const parentBtn = document.querySelectorAll('.parent-header');

parentBtn.forEach((item) =>{
    item.addEventListener('click', function(){
        const arrow = item.querySelector('.arrow');
        item.nextElementSibling.classList.toggle('active')
            if(item.nextElementSibling.classList.contains('active')){
                arrow.style.transform = "rotate(180deg)"
            }else{
                arrow.style.transform = "rotate(0deg)"
            }
    })
})