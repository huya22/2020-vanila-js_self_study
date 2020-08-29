const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);

    // 위는 아래의 코드를 압축시켜 놓은 꼴과 마찬가지다.
    
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // }
    // else{
    //     title.classList.add(CLICKED_CLASS);
    // }
}
function init(){
    title.addEventListener("click", handleClick);
}
init();