// random move function
function randomMoveFn(bgColor, url){
    let moveArr = ['01', '02', '03', '04']
    let randomNum = Math.floor(Math.random() * moveArr.length)
    console.log(randomNum)
    eval('pageMoveAni' + moveArr[randomNum] + '(bgColor, url)')
}
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
// 03 html
document.querySelector('body').innerHTML += `
    <div class="ballWrap">
        <div class="back"></div>
        <div class="ballList"></div>
    </div>
`
// 03 js
function pageMoveAni03(bgColor, url){
    let ballWrap = document.querySelector('.ballWrap')
    let ballList = document.querySelector('.ballList')
    // wrap ?????????
    ballWrap.style.display = 'block'
    // html ??????
    for(let i=0; i<16; i++){
        ballList.innerHTML += `
            <div class="ball ball${i}"></div>
        `
    }
    ballWrap.innerHTML += '<div class="mainBall"></div>'
    // ??? ??? ??????
    let balls = document.querySelectorAll('.ball')
    let mainBall = document.querySelector('.mainBall')
    for(let i=0; i<balls.length; i++){
        balls[i].style.backgroundColor = bgColor
    }
    mainBall.style.backgroundColor = bgColor
    // ??? ???????????????
    setTimeout(function(){
        // ??? ?????????
        for(let i=0; i<balls.length; i++){
            balls[i].classList.add('on')
        }
        // ??? ????????? & ????????? ?????????
        setTimeout(function(){
            for(let i=0; i<balls.length; i++){
                mainBall.classList.add('on')
                mainBall.classList.add('ani')
            }
            // ??? ??????
            setTimeout(function(){
                mainBall.classList.remove('ani')
                mainBall.classList.add('boom')
                // ????????? ??????
                setTimeout(function(){
                    location.href = url
                }, 1000)
            }, 2000)
        }, 1000)
    }, 500)
}
// 04 html
document.querySelector('body').innerHTML += `
    <div class="superWrap">
        <div class="back"></div>
        <div class="con">
            <div></div>
            <img src="" alt="">
        </div>
    </div>
`
// 04 js
function pageMoveAni04(bgColor, url){
    let superWrap = document.querySelector('.superWrap')
    let superWrapCon = document.querySelector('.superWrap .con')
    let superWrapConDiv = document.querySelector('.superWrap .con div')
    let superWrapConImg = document.querySelector('.superWrap .con img')
    /* ?????? */
    superWrap.classList.add('on')
    /* ?????? css class */
    let horiVert = ['hori', 'vert'] // css class ??????
    let randomNum = Math.floor(Math.random() * horiVert.length) // ?????? ??????
    let randomClass = horiVert[randomNum] // class ?????? ??? ?????? ?????? ??????
    superWrapCon.classList.add(randomClass)
    superWrapConImg.setAttribute('src', 'img/super_'+randomClass+'.png') // ?????? ????????? ?????? ?????????
    console.log(randomClass)
    /* ??????????????? ?????? */
    superWrapConDiv.style.backgroundColor = bgColor
    setTimeout(function(){
        superWrapCon.classList.add('on')
        setTimeout(function(){
            superWrapConDiv.classList.add('on')
            setTimeout(function(){
                location.href = url
            }, 2000)
        }, 2000)
    }, 100)
}