// getElementById는 HTML에서 ID값이 title인 태그를 찾는 함수
const id =  document.getElementById("title");

// getElementByClassName은 HTML에서 class값이 hello인 태그를 찾는 함수 (array로 return)
const className = document.getElementsByClassName("Hello");

// getElementsByTagName은 HTML에서 tag 가 h1인 태그를 찾는 함수 (array로 return)
const tagName = document.getElementsByTagName("h1");

// querySelector은 HTML에서 class가 hello인 태그 안에 h1을 찾는 함수  (단 하나의 element를 return)
//  여러개일 경우 first Element 하나만 가져옴
const querySelector = document.querySelector(".hello h1");

// querySelectorAll은 array로 가져옴 
const querySelectorAll = document.querySelectorAll(".hello h1");

//title.innerText = "Got You!";

/* EVENT */ 

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // const title을 누르면 이벤트 실행
   h1.style.color = "blue";
}

function handleMouseEnter(){
    // 마우스를 const Title에 올리면 이벤트 실행
    h1.innerText = "Mouse is here!"
}
function handleMouseLeave(){
    // 마우스가 const Title에서 나갈때 이벤트 실행
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    // window가 resize(화면크기가 바뀔때)실행
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    // 복사할때 실행
    alert("copier")
}

function handleWindowOffline(){
    // wifi에 연결 안될때 실행
    alert("SOS no WIFI")
}

function handleWindowOnline(){
    // wifi에 연결 안될때 실행
    alert("ALL Gooood")
}

// event가 발생하면 호출한 function을 전달하는데 그때 ()을 안쓰는게 가장 중요
// 이벤트가 발생 했을때 function을 실행을 하기 위해
h1.addEventListener("click" , handleTitleClick);
// h1.onclick = handleTitleClick  --> 로도 가능하지만 잘 안쓰임
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

/* Window Event */
window.addEventListener("resize" ,handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
