//ANIM
const animItems = document.querySelectorAll('._anim-items')

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll (){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight)
            {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active')
            }else{
                if(!animItem.classList.contains('_anim-no-hide') || scrollY == 0) {
                    animItem.classList.remove('_active')
                }            
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}
//=============================================================

//BURGER
const headerBurger = document.querySelector('.menu__burger');
if (headerBurger){
    const headerMenu = document.querySelector('.menu__body');
    headerBurger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    }) 
}