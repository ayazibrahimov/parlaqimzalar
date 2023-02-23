// const heartSolids = document.querySelectorAll('.heart__solid')
// const heartReds = document.querySelectorAll('.heart__red')

// // heartSolid.addEventListener('click',function(e){
// //     e.target.classList.toggle('unShown')
// //     heartRed.classList.toggle('unShown')
// // })

// heartSolids.forEach((heartSolid,idx)=>{
//     heartSolid.addEventListener('click',function(e){
//         e.target.classList.add('unShown')
//         heartReds[idx].classList.remove('unShown')
//     })
// })


// heartReds.forEach((heartRed,idx)=>{
//     heartRed.addEventListener('click',function(e){
//         e.target.classList.add('unShown')
//         heartSolids[idx].classList.remove('unShown')
//     })
// })


// gets a reference to the heartDOm
//const heartDOM = document.querySelectorAll('.js-heart');
const heartDOMS = document.querySelectorAll('.js-heart');
// initialized like to false when user hasnt selected
let liked = false;


heartDOMS.forEach((heartDOM)=>{
    heartDOM.onclick = (event) => {
        // check if liked 
        liked = !liked; // toggle the like ( flipping the variable)
        
        // this is what we clicked on
        const target = event.currentTarget;
        
        if (liked) {
            // remove empty heart if liked and add the full heart
            target.classList.remove('far');
            target.classList.add('fas', 'pulse');
        } else {
            // remove full heart if unliked and add empty heart
            target.classList.remove('fas');
            target.classList.add('far');
        }
    }
})

// create a onclick listener



heartDOMS.forEach((heartDOM)=>{
    heartDOM.addEventListener('animationend', (event) => {
        event.currentTarget.classList.remove('pulse');
    })   
})












