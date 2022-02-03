/* if else를 활용한 글씨 바꾸기 */
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
*/

/* JavaScript에서 css를 건들지 않고 코딩하는 법 */

const h1 = document.querySelector("div.hello:first-child h1");
const clickedClass = "clicked";
//css에서 정의한 것과 같아야됨

/*
    className --> 이전에 class 들은 상관안하고 className을 바꿈
    classList 
            .contains --> 우리가 명시한 const가 HTML element의 class에 포함되어 있는지 확인할때 씀
            .add --> class에 추가
            .remove --> class에서 삭제
    toggle --> h1의 classList에 넣고자 하는 class가 이미 있는지 확인하고 있으면 제거 없으면 생성
*/
function handleTitleClick(){
    //<toggle 사용 후>
    h1.classList.toggle("clicked");
   /*
   <toggle 사용 전>
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
   } else {
        h1.classList.add(clickedClass);
        // h1 태그에 className을 active로 만들어줌
   }
    */
}

h1.addEventListener("click", handleTitleClick);


