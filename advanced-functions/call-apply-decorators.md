## call/apply와 데코레이터, 포워딩

### 코드 변경 없이 캐싱 기능 추가하기

클로저 개념을 이해하면 slow = cachingDecorator(slow)를 이해하기 한결 수월하다.
cachingDecorator은 변수 cache를 갖는다.
cachingDecorator함수를 한번 호출한 뒤, 함수가 종료되면 더이상 외부에서는 직접적으로 cache변수를 수정할 수 없다.
오직 return function(x){} 에 의해서만 cache변수에 접근할 수 있다.

언뜻 보면 slow = cachingDecorator(slow)는 slow를 slow 한다는 건가? 는 생각이.. 들지만
cachingDecorator함수 안의 return functions(x){}인 함수를 호출하는 것을 의미한다.
코드를 조금 수정하면, return slow = function(x){}이 된다.

- 그러면, 왜 caching인가?

  단순히 클로저의 역할을 한다는 것이 캐싱의 의미가 아니다.
  slow라는 함수의 주석(2번 라인)을 살펴보면 '// CPU 집약적인 작업' 으로 표현되어 있다.
  여기서는 alert()를 호출하고 종료할 뿐이지만, 사실 엄청나게 복잡한 연산이 행해질 수 있다.

  따라서, slow 즉, return function(x){}를 호출할 때 if문으로 cache에 x가 저장이 되어있는지 확인하는 이유는 엄청 복잡한 연산이 다시 수행되지 않게하기 위함이다.

```
function slow(x) {
  alert(`slow(${x})을/를 호출함`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return slow = function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);

    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) );
alert( "다시 호출: " + slow(1) );

alert( slow(2) );
alert( "다시 호출: " + slow(2) );
```

설명에서 다음 문단이 잘 이해되지 않았다.

> 모든 함수를 대상으로 cachingDecorator를 호출 할 수 있는데, 이때 반환되는 것은 캐싱 래퍼입니다. 함수에 cachingDecorator를 적용하기만 하면 캐싱이 가능한 함수를 원하는 만큼 구현할 수 있기 때문에 데코레이터 함수는 아주 유용하게 사용됩니다.

1. 데코레이터 함수가 유용한 이유가 무엇이지?
2. 캐싱이 가능한 함수를 원하는 만큼 구현할 수 있다는 의미가 무엇이지?

1번에 대한 이유는, 클로저이기 때문에 한번 호출할 때마다 변수 cache는 독립적으로 새로 생성된다. 따라서 호출할 때마다 cache라는 메모리 공간이 새로 생성되기 떄문에 붕어빵 틀 처럼 새로운 cache라는 새로운 메모리 공간을 독립적으로 생성할 수 있다는 것을 의미한다.

데코레이터 함수는 let cache = new Map()를 제공하기 때문에, cache라는 변수를 조작할 수 있는 어떤 임의의 func가 들어오더라도
독립적으로 cache에 저장이 가능하다.

2. 내가 해석한 바로는 캐싱이 가능한 함수란, 함수의 입력으로 들어온 x라는 값이 엄청난 연산을 거친 뒤 y라는 값을 return하는 함수를 의미한다. 이때 x와 y는 (아마도) 1:1로 대응해야 캐싱이 가능하겠지만, 어쨌든.

종합해보면

1. 데코레이터 함수는 cache라는 변수를 갖는다.
2. 내부함수인 클로저는 먼저 cache의 x에 대응하는 값이 있는지를 확인한다.
3. 있다면 해당 값을 리턴하고
4. 없다면 콜백을 실행해서 연산과정을 거친 뒤 얻은 결과값을 cache에 저장한다. 그 뒤 결과값을 리턴한다.

### 'func.call’를 사용해 컨텍스트 지정하기

```
func.call(context, arg1, arg2, ...)
```

단순하게 보면 context 객체에 func를 추가해서 사용하겠다는 것을 의미한다.(메서드를 빌린다)

여기에 arg는 단순히 func를 호출할 때 필요한 매개변수이다.

### 여러 인수 전달하기

그런데, 위처럼 arg1, arg2 이렇게 각각 구분하는 것이 아니라, 여러 인수를 한번에 전달하려면 arguments를 사용한다.

```
func.call(context, ...arguemnts)
```

### func.apply

- call은 이터러블
- apply는 유사 배열 객체

```
func.apply(context, args)
```

### 메서드 빌리기

### 데코레이터와 함수 프로퍼티
