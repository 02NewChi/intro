// random move function
function randomMoveFn(bgColor, url){
    let moveArr = ['01', '02']
    let randomNum = Math.floor(Math.random() * moveArr.length)
    console.log(randomNum)
    eval('pageMoveAni' + moveArr[randomNum] + '(bgColor, url)')
}
// ★★★★★★★★★★★★★★★
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
// ★★★★★★★★★★★★★★★
// 02 html
document.querySelector('body').innerHTML += `
    <div class="flyWrap">
        <div class="flyBg"></div>
        <div class="flyCon">
            <img src="" alt="">
        </div>
    </div>
`
// 02 js
function pageMoveAni02(bgColor, url){
    let flyWrap = document.querySelector('.flyWrap')
    let flyCon = document.querySelector('.flyCon')
    let flyConImg = document.querySelector('.flyCon img')
    flyWrap.classList.add('on')
    flyCon.style.backgroundColor = bgColor
    let imgList = ['army', 'fish', 'person']
    flyConImg.setAttribute('src', 'img/' + imgList[Math.floor(Math.random()*imgList.length)] + '.png')
    setTimeout(function(){
        flyCon.classList.add('on')
        setTimeout(function(){
            flyCon.classList.add('active')
            setTimeout(function(){
                location.href = url
            }, 2000)
        }, 2000)
    }, 10)
}