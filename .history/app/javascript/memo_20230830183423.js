function post (){
  //リクエストを送信する処理
  const form = document.getElementById("form");
  form.addEventListener("submit", () => {
  });
};

window.addEventListener('turbo:load', post);
