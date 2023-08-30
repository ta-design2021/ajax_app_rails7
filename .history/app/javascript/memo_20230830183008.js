function post (){
  //リクエストを送信する処理
  console.log("イベント発火");
};

window.addEventListener('turbo:load', post);
