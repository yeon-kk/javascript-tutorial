### 'try..catch'와 에러 핸들링

#### ‘try…catch’ 문법

```
try {
  // 코드...
} catch (err) {
  // 에러 핸들링
}
```

- try..catch는 동기적으로 동작하기 때문에, setTimeout의 내부에서 발생하는 예외를 잡기 위해서는 함수 내부에 try..catch를 구현해야 한다.

#### 에러 객체

- 에러 발생시 에러 객체를 생성해서 catch 블록에 인수로 전달
  - name
  - message
  - stack(비표준 프로퍼티)

#### 선택적 ‘catch’ 바인딩

단, 일부 브라우저에서는 폴리필 필요

```
try {
  // ...
} catch { // <-- (err) 없이 쓸 수 있음
  // ...
}
```

#### 직접 에러를 만들어서 던지기

- ‘throw’ 연산자

```
let json = '{ "age": 1 }';
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }
  alert( user.name );
} catch(error) {
  alert( `JSON Error \nError name: ${error.name}\nError message: ${error.message}` );
  //JSON Error
  //Error name: SyntaxError
  //Error message: 불완전한 데이터: 이름 없음
}
```

#### 에러 다시 던지기

```
try{

}catch (err){
    if(!(err instanceof SyntaxError)){
        throw err
    }
}
```

이렇게 throw를 하면, 예상치 못한 에러(여기서는 SyntaxError가 아닌 다른 에러)를 throw해서 상위 블록의 try..catch에서 처리하도록 구성할 수 있다.

#### try…catch…finally

finally는

- 에러가 없는 경우: try 실행이 끝난 후 실행
- 에러가 발생한 경우: catch 실행이 끝난 후 실행

- finally와 return: try에 return이 있더라도, 곧바로 종료하지 않고 finally까지 진행된 후 return

#### 과제1

finally 아니면 코드만?

finally가 있다면 항상 작업 내역 삭제가 이루어지지만, (1) catch에 의해 상위 블록으로 throw되는 경우 (2) try문에 return이 있는 경우에는 작업 내역 삭제가 이루어지지 않는다.
