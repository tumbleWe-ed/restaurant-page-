// eslint-disable-next-line import/no-cycle
import mainBody from "./index"

export default function about() {
    mainBody.innerHTML = '';
    const aboutDivContainer = document.createElement('div')
    aboutDivContainer.id = 'about'
    mainBody.append(aboutDivContainer)
    // header
    const header = document.createElement('div')
    header.id = 'about-header'
    header.textContent = 'About  Us';
    // text div
    const textDiv = document.createElement('div')
    textDiv.id = 'about-text-div'
    textDiv.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ';

    aboutDivContainer.append(header,textDiv)
}