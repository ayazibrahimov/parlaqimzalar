let text_1 = document.querySelector('.text-1')
let text_2 = document.querySelector('.text-2')
let readMore = document.querySelector('.read__more')
let closeTxt = document.querySelector('.close__text')
let booksDetailText = document.querySelector('.books__detail-text-1') 
let textGrayScale = document.querySelector('.text-grayScale')


document.addEventListener('DOMContentLoaded',getAllDatas)


function getAllDatas(){

   let text = booksDetailText.textContent.replace( /\s/g, ' ').split(' ')

   let cutted = text.splice(-12).join(' ')
   
   let textInfo = text.join(' ')
   
   booksDetailText.textContent = textInfo
   textGrayScale.textContent = cutted
   
   textGrayScale.classList.add('grayscale--text')
   
}

   
   // readMore.addEventListener('click',function(e){
      
      //    e.target.classList.add('unShown')
      //    text_2.classList.remove('unShown')
      //    textGrayScale.classList.remove('grayscale--text')
      // })
      
// closeTxt.addEventListener('click',function(){
//    readMore.classList.remove('unShown')
//    text_2.classList.add('unShown')
//    textGrayScale.classList.add('grayscale--text')
// })














