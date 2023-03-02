
const book__detail = document.querySelector('.book__detail--text')
const click__look = document.querySelector('.click__look')

window.addEventListener('DOMContentLoaded', function() {
  
    const datas = book__detail.innerHTML

    if(datas.split('').length > 855){
        click__look.classList.remove('unShown')
    }else{
        click__look.classList.add('unShown')   
    }

})









