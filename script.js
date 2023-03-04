const modeToggler = document.querySelector('#modeSwitch');
const root = document.querySelector(':root');
const toggler = document.querySelector('label');

modeToggler.addEventListener('input', ()=>{
    if(modeToggler.checked === true){
        root.style.setProperty('--background', 'hsl(0, 0%, 100%)')
        root.style.setProperty('--headerBackground', 'hsl(225, 100%, 98%)')
        root.style.setProperty('--statBackground', 'hsl(227, 47%, 96%)')
        root.style.setProperty('--textMain', 'hsl(230, 17%, 14%)')
        root.style.setProperty('--textSecond', 'hsl(228, 12%, 44%)')
        root.style.setProperty('--hover', 'hsl(232, 33%, 91%)')
        toggler.style.backgroundColor = 'hsl(230, 22%, 74%)'
        toggler.style.backgroundImage = 'none'

    }else{
        root.style.setProperty('--background', 'hsl(230, 17%, 14%)')
        root.style.setProperty('--headerBackground', 'hsl(232, 19%, 15%)')
        root.style.setProperty('--statBackground', 'hsl(228, 28%, 20%)')
        root.style.setProperty('--textMain', 'hsl(0, 0%, 100%)')
        root.style.setProperty('--textSecond', 'hsl(228, 34%, 66%)')
        root.style.setProperty('--hover', 'hsl(228, 26%, 27%)')
        toggler.style.backgroundColor = 'none'
        toggler.style.backgroundImage = 'linear-gradient(40deg,hsl(210, 78%, 56%),hsl(146, 68%, 55%))'

    }
})

