### 스타일과 클래스

요소에 스타일을 적용할 수 있는 2가지 방법

1. <div class="..."> CSS에 클래스 만들고 클래스 추가하기
2. <div style="...">: 프로퍼티를 style에 바로 써주기

하지만, `CSS 클래스`를 수정하는 것이 더 중요하다.
(style의 경우 클래스를 다룰 수 없을 때만 사용해야 한다. 가령 요소의 좌표를 동적으로 계산하고 계산한 좌표를 설정할 때)

#### className과 classList

- className: 속성 값 전체를 바꾸는 경우
- classList: 개별 클래스 조작

classList의 메서드

- add
- remove
- toggle
- contains

classList는 이터러블 객체이기 떄문에, for ... of를 사용해 클래스 나열이 가능하다

#### 요소의 스타일

- 카멜 표기법(특정 브라우저 전용 프로퍼티 또한 카멜 표기법)

#### style 프로퍼티 재지정하기

- 빈 문자열 할당으로 프로퍼티 삭제

```
elem.style.display = ""
```

cssText: 전체 스타일을 설정하는 방법

```
elem.style.cssText = `color: white; width:100px;`
```

#### 단위에 주의하기

#### getComputedStyle로 계산된 스타일 얻기
- style만으로는 `CSS 클래스`를 사용해 적용한 스타일을 읽을 수 없다!
```
let computedStyle = getComputedStyle(element)
```

