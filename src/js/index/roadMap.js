import ActiveClass from '../classes/ActiveClass.js'
addEventListener('DOMContentLoaded', ()=>{
    const activeTextBtn = document.querySelector('.active-text')
    activeTextBtn.addEventListener('click', ()=>{
        const activeText = new ActiveClass ({
            element: activeTextBtn.parentElement
        }) 
        activeText.setActive(true)
    })
})