// 요구사항 외에 구현해볼 수 있는 내용
// css 파일에 notification 클래스로 미리 css 구현

// position을 정해주지 않으면 top과 right가 반영되지 않음

const body = document.querySelector('body')
const div = document.createElement('div')
div.style.position = 'absolute'
div.style.top = `${top}px`
div.style.right = `${right}px`
div.textContent = html
body.append(div)
setTimeout(()=>{
  div.remove()
},1500)