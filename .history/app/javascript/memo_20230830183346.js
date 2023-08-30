function post (){
  //リクエストを送信する処理
  const form = document.getElementById("form");
  form.addEventListener("submit", () => {
    console.log("イベント発火");
  });
};

window.addEventListener('turbo:load', post);
