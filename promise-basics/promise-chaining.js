fetch("/file.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then((githubUser) => {
    new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);

      setTimeout(() => {
        img.remove();
        resolve("작업");
      }, 3000);
    });
  })
  .then((githubUser) =>
    alert(`${githubUser.name}의 이미지를 성공적으로 출력하였습니다.`)
  );

// 과제
// 두 코드의 동작 방식
promise.then(f1).catch(f2);
// f1에서 일어난 error가 catch에 걸릴 수 있다
promise.then(f1, f2);
// f1에서 일어난 error 를 잡을수는 없다
