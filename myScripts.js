const menuButton=document.querySelector('.nav-toggle');
const navigationMenu=document.querySelector('.nav-bar');
const closeButton=document.querySelector('.nav-toggle2');
const mobileNav = document.querySelector('.fade-nav-bar')
const body = document.querySelector('.body')
// const closeIcon=document.querySelector('closeicon')

menuButton.addEventListener('click', () => {
  
        menuButton.style.display='none'
        closeButton.style.display = 'block'
        mobileNav.style.display = 'block'
        mobileNav.style.margiTop = '4rem'
        navigationMenu.style.transform = 'translateX(0%)'
        body.style.overflow = 'hidden'
})
 
    closeButton.addEventListener('click', () => {
            closeButton.style.display='none'   
            menuButton.style.display = 'block' 
            mobileNav.style.display = 'none'
            navigationMenu.style.transform = 'translateX(100%)'
            body.style.overflow = 'visible'
            
    })
            // navigationMenu.style.display='none'
           
           
    //     }
    //     else{
    //         closeButton.style.display='block'
    //         menuButton.style.display = 'none'
    //         navigationMenu.style.display='block'
    //         navigationMenu.style.transform = 'translateX(100%)'
    //         }
    //     })
        

// const menuButton=document.querySelector('.nav-toggle')
// const navigationMenu=document.querySelector('.nav-bar')
// // const hamburgerIcon =document.querySelector('.toggle')

// menuButton.addEventListener('click', ()=> {
// if(menuButton.classList.contains('toggle2')){
//     menuButton.classList.remove('toggle2')
//     menuButton.style.display='block'
//     navigationMenu.style.display='none'
// }
// else{
//     menuButton.classList.add('toggle2')
//     navigationMenu.style.display='block'
// }
// })