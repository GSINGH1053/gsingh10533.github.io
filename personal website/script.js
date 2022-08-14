function start(){
    let showResumeBtn = document.querySelector("#Resume")
    showResumeBtn.addEventListener("click",function(){window.open("https://docs.google.com/document/d/1lh4DVK7sYDYiyuToTXzn7WdGUt2C8du6rdqBCDHwXMk/edit?usp=sharing");});
}
const navbar = document.querySelector(".navbar");
const navbarOFFsetTop = navbar.offsetTop;
const sections=document.querySelectorAll("section");
const navbarLinks=document.querySelector(".navbar-link");

window.addEventListener("scroll",()=>{
    mainFn();
    navbar();
});

const mainFn = ()=>{
    if(window.pageYOffset>= navbar.offsetTop){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }

    sections.forEach((section,i)=>{
        if(window.pageYOffset>=section.offsetTop 
            + 15){
            navbarLinks.forEach(navbarLink =>{
                navbarLink.classList.remove('change');
            });
            navbarlink[i].classList.add
            ('change');
        }
    });
 };
mainFn();
window.addEventListener("resize",()=>{
    window.location.reload();
});
function getNow(){
    let date=new Date();
    let yyyy= date.getFullYear()
    let mm=date.getMonth() + 1;
    mm = mm < 10? "0" +mm :mm;
    let dd = date.getDate();
    dd=dd< 10? "0" + dd : dd;
    let stringDate = mm + "/" + dd + "/" + yyyy;
    return stringDate;
}
 function hiddenotherOptions(){
     let formoption1 = document.querySelector('.formoption1');
     let formoption2 = document.querySelector('.formoption2');
     let formoption3 = document.querySelector('.formoption3');
     let formoption4 = document.querySelector('.formoption4');
     formoption1.getElementsByClassName.visibility="hidden";
     formoption2.getElementsByClassName.visibility="hidden";
     formoption3.getElementsByClassName.visibility="hidden";
     formoption4.getElementsByClassName.visibility="hidden";
 };