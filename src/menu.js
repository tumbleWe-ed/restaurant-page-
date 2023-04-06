// eslint-disable-next-line import/no-cycle
import mainBody from "./index"
import cupcake from "./images/items/cupcake.jpg"

export default function menu() {
   mainBody.innerHTML = ''
    // div container
   const divContainer = document.createElement('div')
   divContainer.id = 'div-container'
   mainBody.append(divContainer)

    // div items
   const arrOfDivs = []
   const arrOfTextDivs = []
   // eslint-disable-next-line no-plusplus
   for (let i = 0; i < 6; i++) {
    window[`div${i}`] = document.createElement('div')
    divContainer.append(window[`div${i}`])
    arrOfDivs.push(window[`div${i}`])

    // text divs
    const textDiv = document.createElement('div')
    window[`div${i}`].append(textDiv)
    arrOfTextDivs.push(textDiv)
   }
   
   // Item Creator
   function createItem(item,index,title) {
    const img1 = document.createElement('img');
    img1.src  = item;
    arrOfTextDivs[index].innerHTML = `<h3>${title}</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,`
    arrOfDivs[index].append(img1,arrOfTextDivs[index])
   }
   createItem(cupcake,0,'Cupcake')
   // Item 1
   /** const img1 = document.createElement('img');
   img1.src  = cupcake;
   arrOfTextDivs[0].innerHTML = "<h3>Cupcake</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
   arrOfDivs[0].append(img1)
   arrOfDivs[0].append(arrOfDivs[0])* */

}