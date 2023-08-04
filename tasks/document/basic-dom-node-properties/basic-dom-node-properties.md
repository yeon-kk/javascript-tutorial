## 주요 노드 프로퍼티

### [요약]

- nodeType
- nodeName/tagName
- innerHTML
- outerHTML
- data
- textContent
- hidden

### DOM 노드 클래스

- console.log(elem): 요소의 `DOM 트리`를 출력
- console.dir(elem): 요소를 `DOM 객체`처럼 취급하여 출력, 프로퍼티를 확인하기 용이하다.

### nodeName과 tagName으로 태그 이름 확인하기

### innerHTML로 내용 조작하기

- 요소 안의 HTML을 문자열 형태로 받아올 수 있다
- 스크립트 태그는 실행되지 않는다

#### innerHTML += 사용 시 주의점

- 기존 내용을 삭제 후, 기존 내용과 새로운 내용을 합친 내용을 쓰게 된다. 기존 내용이 전부 사라지고 다시 로딩

### outerHTML로 요소의 전체 HTML 보기

### nodeValue/data로 텍스트 노드 내용 조작하기

(여기서는 data 사용)

```
<body>
    hello world!
    <!-- 주석 -->
    <script>
        const text = document.body.firstChild;
        alert(text.data) // hello world!

        const comment = text.nextSibling;
        alert(comment.data) // 주석
    </script>
</body>
```

### textContent로 순수한 텍스트만

- 사용자가 입력한 문자열이 순수 텍스트로 저장. 사용자가 입력한 값 그대로 출력

```
<div id='elem1'></div>
<div id='elem2'></div>
let name = prompt('입력해주세요.','<i>hello</i>')
elem1.innerHTML = name // 기울여진 hello
elem2.textContent = name // <i>hello</i>

```

### hidden 프로퍼티

- style="display:none"과 동일

```
<div id='elem'>*</div>
setInterval(()=>{
    elem.hidden = !elem.hidden
},1000)
```

### 기타 프로퍼티

- value
- href
- id

#### 특정 클래스에서 지원하는 프로퍼티 전체를 확인하는 방법

1. console.dir(elem)
2. 개발자 도구의 Elements 패널의 하위 패널 'Properties'를 선택하면 프로퍼티 목록 확인 가능
