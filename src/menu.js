// eslint-disable-next-line import/no-cycle
import mainBody from "./index"
import cupcake from "./images/cupcake.jpg"

export default function menu() {
   mainBody.innerHTML = ''

   const divContainer = document.createElement('div')
   divContainer.id = 'div-container'
   mainBody.append(divContainer)


   const arrOfDivs = []
   for (let i = 0; i < 6; i++) {
    window[`div${i}`] = document.createElement('div')
    divContainer.append(window[`div${i}`])
    arrOfDivs.push(window[`div${i}`])
   }
   
   const textDiv = document.createElement('div')
   const img1 = document.createElement('img');
   img1.src  = cupcake;
   textDiv.innerHTML = "<h3>Cupcake</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
   arrOfDivs[0].append(img1)
   arrOfDivs[0].append(textDiv)
   
}