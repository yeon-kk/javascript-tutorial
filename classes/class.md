## 클래스와 기본 문법

### 클래스란

- 함수의 한 종류
- 클래스 내부에서 정의한 메서드는 클래스.prototype에 저장

### 클래스는 단순한 편의 문법이 아닙니다

1. 클래스 생성자를 new와 함께 호출하지 않으면 에러 발생, 이때 [[isClassConstructor]]:true가 사용됨

2. 클래스에 정의된 `메서드`는 열거할 수 없다. prototype 프로퍼티에 추가된 메서드의 enumerable 플래그가 false
   - (예) for..in으로 객체 순회시 메서드를 순회 대상에서 제외
3. 항상 엄격모드로 실행됨

### 클래스 표현식

```
let User = class MyClass{
    sayHi(){}
}
new User().sayHi();
alert(MyClass)// MyClass는 클래스 밖에서 사용 불가능
```

클래스를 동적으로 생성 가능

```
function makeClass(phrase){
    return class{
        sayHi(){}
    }
}
let User = makeClass('안녕하세요!')
new User().sayHi();
```

### getter와 setter

```
class User {
  constructor(name) {
    // setter를 활성화합니다.
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

let user = new User("k");
```

- 의아했던 부분은 setter 함수가 활성화되는 시점이었다.
  - constructor에서는 this.name = name 이었지만,
  - set name(value)는 this.\_name = value로
  - 필드명이 name과 \_name로 달랐다.
  - 그래서 constructor로 인스턴스를 생성했을 때 setter가 호출되는지 확인하기 위해 setter에 console 코드를 추가했는데 생성자로 인스턴스가 생성될 때 setter가 활성화된 것을 확인할 수 있었다.
  ```
  set name(value){
      console.log('set활성화')
      this._name = value
  }
  ```

### 계산된 메서드 이름 [...]

```
class User{
    ['say'+'Hi'](){}
}
```

### 클래스 필드

- 클래스 필드는 User.prototype이 아닌, 개별 객체에만 클래스 필드가 설정된다.

```
class User{
    name = 'k';
}
let user = new User()
alert(user.name)
alert(User.prototype.name)
```

```
class Button {
  constructor(value) {
    this.value = value;
  }
  //click(){
  //  alert(this.value);
  //}
  click = ()=>{
    alert(this.value);
  }
}

```

- click = ()=>{}는 각 Button 객체마다 독립적인 함수를 만들어주고, 이 함수의 this를 해당 객체에 바인딩시켜준다.
- 따라서 button.click을 아무데나 전달할 수 있고 this에는 의도한 값이 들어가게 된다.
