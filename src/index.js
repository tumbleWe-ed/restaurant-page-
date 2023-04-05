import './styles.css';


const content = document.querySelector('#content')

// hero
const hero = document.createElement('div')
hero.className = 'hero'
content.appendChild(hero)

const homeBtn = document.createElement('div')
homeBtn.textContent = 'HOME'
const menuBtn = document.createElement('div')
menuBtn.textContent = 'MENU'
const aboutBtn = document.createElement('div')
aboutBtn.textContent = 'ABOUT'

hero.append(homeBtn,menuBtn,aboutBtn)

// main-body
const mainBody = document.createElement('div')
const mainBodyText = document.createElement('div')
mainBody.appendChild(mainBodyText)
mainBodyText.textContent = 'Desserts'
mainBody.className = 'main-body'
content.appendChild(mainBody)

// footer   
const footer = document.createElement('div');
footer.className = 'footer'
footer.innerHTML = 'background photo by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Brooke Lark</a>  on  <a href="https://unsplash.com/photos/V4MBq8kue3U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash</a>';
content.appendChild(footer);