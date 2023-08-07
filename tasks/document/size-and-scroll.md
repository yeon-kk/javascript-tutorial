
- offsetParent
- offsetLeft, offsetTop
- offsetWidth, offsetHeight

`테두리` 두께 계산
- clientTop
- clientLeft

`테두리` 안 영역 사이즈(padding 포함)
- clientWidth: [주의] 세로 스크롤바 너비를 제외해야 테두리 안 영역 사이즈인 clientWidth값이 나온다.
- clientHeight: 패딩을 더한 값


- scrollWidth:
- scrollHeight:스크롤바에 의해 감춰진 영역을 포함

변경 가능하기 때문에 자동 스크롤 기능 & 최상단, 최하단 이동가능
- scrollLeft
- scrollTop: 세로 스크롤바에 의해 가려져 보이지 않는 위쪽 콘텐츠의 

### CSS를 사용해 너비와 높이를 얻지 마세요
#### getComputedStyle이 아닌 기하 프로퍼티를 사용해 높이와 너비 정보를 얻어야 하는 이유
1. width와 height는 다른 CSS프로퍼티의 영향을 받는다(예: box-sizing)
2. css의 width와 height는 auto일 수 있다.(inline element)
3. scrollbar의 너비를 포함하는 브라우저가 있다.
