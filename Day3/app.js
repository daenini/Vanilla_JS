const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기함 String을 저장하고 싶을 때 사용

function onLoginsubmit(event){
    event.preventDefault(); // event가 웹에서 발생될때 웹은 새로고침을 해주는데 그것을 막는 함수
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    greeting.innerText = `Hello ${userName}`;
    // === greeting.innerText = "Hello "+userName;

    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit" , onLoginsubmit);



