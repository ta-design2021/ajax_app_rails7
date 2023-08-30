function post (){
  //リクエストを送信する処理
  const form = document.getElementById("form");
  form.addEventListener("submit", () => {
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
  });
};

window.addEventListener('turbo:load', post);
