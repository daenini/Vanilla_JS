const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기함 String을 저장하고 싶을 때 사용
const USERNAME_KEY = "username";


function onLoginsubmit(event){
    event.preventDefault(); // event가 웹에서 발생될때 웹은 새로고침을 해주는데 그것을 막는 함수
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// loginform에서 이름을 입력하고 그 이름을 h1에 출력해주는 함수
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    // === greeting.innerText = "Hello "+userName;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage에 username이 있는지 확인하는 if문
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginsubmit);
}else{
    // show thr greetings
    paintGreetings(savedUsername);
}

