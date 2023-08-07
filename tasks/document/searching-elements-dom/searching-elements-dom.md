## getElement*, querySelector*로 요소 검색하기

- 요소들이 가까이 붙어있지 않은 경우, 상대위치를 이용하지 않으면서 요소에 접근하는 방법

### document.getElementById 혹은 id를 사용해 요소 검색하기

### querySelectorAll

```
document.querySelectorAll('div > span:last-child')
```

### querySelector

### matches

### closest

```
elem.closest(css)
```

- elem 자기 자신을 포함하여 css 선택자와 일치하는 가장 가까운 조상 노드를 찾는다.
- 해당 요소 노드부터 시작해 DOM 트리를 한 단계씩 거슬러 올라가며 요소를 찾는다.
- css 선택자와 일치하는 요소를 찾으면 해당 요소를 반환

### getElementsBy\* : s 이기 때문에 요소 하나가 아닌 일치하는 요소들을 컬렉션으로 반환

getElement`s`By

- 태그, 클래스를 이용해 원하는 노드 찾는 메서드
- querySelector가 편하다.

- elem.getElementsByTagName(tag)
- elem.getElementsByClassName(className)
- document.getElementsByName(name)

### 살아있는 컬렉션

getElementsBy와 querySelectorAll 차이

- getElementsBy: 문서에 변경이 있다면 컬렉션이 자동으로 갱신된다.

```
<div>첫 번째 div</div>
<script>
    const divs = document.getElementsByTagName('div')
    alert(divs.length) // 1
</script>
<div>두 번째 div</div>
<script>
    alert(divs.length) //2
</script>
```

- querySelectorAll: 정적인 컬렉션 반환. 컬렉션이 확정되면 늘어나지 않는다
