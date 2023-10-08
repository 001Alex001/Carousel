const scrollContainer = document.querySelector('.gallery')
const backBtn = document.getElementById('backBtn')  
const nextBtn = document.getElementById('nextBtn')


nextBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft += 314
})
backBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 313
})

scrollContainer.addEventListener('wheel',(e)=>{
    scrollContainer.scrollLeft += e.deltaY
})


