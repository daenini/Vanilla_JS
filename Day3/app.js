const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a")

function onLoginsubmit(event){
    event.preventDefault(); // event가 웹에서 발생될때 웹은 새로고침을 해주는데 그것을 막는 함수
    console.log(loginInput.value);
   
}

function handleLinkClick(event){
    event.preventDefault();
}

loginForm.addEventListener("submit" , onLoginsubmit);
link.addEventListener("click", handleLinkClick)


