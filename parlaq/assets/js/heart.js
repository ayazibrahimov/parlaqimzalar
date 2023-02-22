const heartSolids = document.querySelectorAll('.heart__solid')
const heartReds = document.querySelectorAll('.heart__red')

// heartSolid.addEventListener('click',function(e){
//     e.target.classList.toggle('unShown')
//     heartRed.classList.toggle('unShown')
// })

heartSolids.forEach((heartSolid,idx)=>{
    heartSolid.addEventListener('click',function(e){
        e.target.classList.add('unShown')
        heartReds[idx].classList.remove('unShown')
    })
})


heartReds.forEach((heartRed,idx)=>{
    heartRed.addEventListener('click',function(e){
        e.target.classList.add('unShown')
        heartSolids[idx].classList.remove('unShown')
    })
})












