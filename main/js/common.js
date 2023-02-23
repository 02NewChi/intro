// 페이지 진입 효과
function enter(bgColor){
    let enter = document.querySelector('.enter')
    enter.style.backgroundColor = bgColor
    setTimeout(function(){
        enter.classList.add('active')
        setTimeout(function(){
            enter.classList.add('on')
            setTimeout(function(){
                enter.classList.add('off')
            }, 1000)
        }, 1000)
    }, 10)
}