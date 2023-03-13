let text_1 = document.querySelector('.text-1')
let text_2 = document.querySelector('.text-2')
let readMore = document.querySelector('.read__more')
let closeTxt = document.querySelector('.close__text')


readMore.addEventListener('click',function(e){

   e.target.classList.add('unShown')
   text_2.classList.remove('unShown')
})

closeTxt.addEventListener('click',function(){
   readMore.classList.remove('unShown')
   text_2.classList.add('unShown')
})














