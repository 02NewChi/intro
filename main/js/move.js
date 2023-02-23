// 01 html
document.querySelector('body').innerHTML += `
    <div class="moveWrap">
        <div class="back"></div>
        <div class="cannonBall"></div>
        <div class="con">
            <div class="cannonBody"></div>
            <div class="iconBody">
                <div class="seat"></div>
            </div>
            <div class="iconWheel wheel01"></div>
            <div class="iconWheel wheel02"></div>
            <img src="" alt="" class="cannonImg">
        </div>
    </div>
`
// 01 js
function pageMoveAni01(bgColor, url){
    let moveWrap = document.querySelector('.moveWrap')
    let moveWrapCon = document.querySelector('.moveWrap .con')
    let cannonBody = document.querySelector('.cannonBody')
    let cannonBall = document.querySelector('.cannonBall')
    cannonBall.style.backgroundColor = bgColor
    moveWrap.classList.add('on')
    setTimeout(function(){
        moveWrapCon.classList.add('on')
        setTimeout(function(){
            cannonBody.classList.add('on')
            cannonBall.classList.add('on')
            setTimeout(function(){
                cannonBall.classList.add('shoot')
                setTimeout(function(){
                    cannonBall.classList.add('bump')
                    setTimeout(function(){
                        location.href = url
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 100)
}