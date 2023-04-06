import './styles.css';
// eslint-disable-next-line import/no-cycle
import menu from "./menu";


const content = document.querySelector('#content')
    // hero
    const hero = document.createElement('div')
    hero.className = 'hero'
    const homeBtn = document.createElement('div')
    homeBtn.textContent = 'HOME'
    const menuBtn = document.createElement('div')
    menuBtn.className = 'menu'
    menuBtn.textContent = 'MENU'
    const aboutBtn = document.createElement('div')
    aboutBtn.textContent = 'ABOUT';
    
    hero.append(homeBtn,menuBtn,aboutBtn);
    content.appendChild(hero);

    // main-body
    const mainBody = document.createElement("div");

function home() {
    mainBody.innerHTML = ''
    // main-body
    const mainBodyText = document.createElement('div');
    mainBodyText.id = 'main-body-text'
    mainBody.appendChild(mainBodyText);
    mainBodyText.textContent = 'Desserts';
    mainBody.className = 'main-body';
    content.appendChild(mainBody);
}
home()



    // footer   
const footer = document.createElement('div');
const footerContent = document.createElement('div')
footer.appendChild(footerContent)
footer.className = 'footer'
footerContent.innerHTML = 'background photo by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Brooke Lark</a>  on  <a href="https://unsplash.com/photos/V4MBq8kue3U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash</a>';
content.appendChild(footer);


console.log(menu);

export default mainBody;
menuBtn.addEventListener('click',() => {
    menu()
});

homeBtn.addEventListener("click",() => {

    home()
})