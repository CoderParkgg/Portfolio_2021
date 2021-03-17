const introduce = document.querySelector("#introduction__description");
const text1 = introduce.querySelector("#span1");
const text2 = introduce.querySelector("#span2");
const project = document.querySelector("#project");
const main = document.querySelector("#main")

function showProject(){
}

function handleScroll(event){
    text1.innerHTML = `안녕하세요 :) 전남대학교에 다니고 있는 소프트웨어공학과 205292 박건규 입니다.`;
    text2.innerHTML = `
    저는 웹개발에 관심이 많습니다. 
    프론트 엔드와 백엔드를 모두 경험해 보고 싶고 함께 공부할 사람이 없어서.. 프론트부터 혼자서 차근차근 공부해나가고 있습니다. 
    1학년 동안 HTML, CSS의 조작을 배워 웹사이트의 레이아웃을 짤 수 있도록 공부하였고요, 이번 겨울방학동안 Javascript를 공부하여 간단한 프로젝트를 해 보았습니다. 저의 계획은 올 해 안에 저만의 웹사이트를 런칭해보는 것인데요. (백엔드까지 만들어서 말이죠!) 이 동아리에 들어가 함께 공부하면서 
    협업을 배우면 저에게 있어 정말 값진 경험이 될 것입니다. 저를 성장시킬수 있는 기회!
    `;
    project.classList.remove("hide");
    main.classList.remove("main");
    text1.classList.add("show");
    text2.classList.add("show1");
    project.classList.add("show1");
    
}

function init(){
window.addEventListener("scroll", handleScroll);
}init();