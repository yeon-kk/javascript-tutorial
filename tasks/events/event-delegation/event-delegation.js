// [최종]
const container = document.querySelector("#container");
container.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const pane = e.target.closest(".pane");
  pane.remove();
});

// [도전1]의도와 다름. 이러면 이벤트 위임을 적용하지 않은 것과 같다.

// const buttons = document.querySelectorAll('.remove-button')
// buttons.forEach((button)=>{
//   button.addEventListener('click',e=>{
//   const pane = e.target.closest('.pane')
//   pane.hidden = true
// })
// })

// [도전2] 버튼이 아니라 p태그 부분을 클릭해도 적용
// const container = document.querySelector('#container')
// container.addEventListener('click',e=>{
// const pane = e.target.closest('.pane')
// pane.hidden = true
// })
