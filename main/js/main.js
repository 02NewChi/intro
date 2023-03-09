// 파리잡기
// html
document.body.innerHTML = document.body.innerHTML += `
    <!-- 파리 잡기 -->
    <div class="wingPop">
        <div class="back"></div>
        <p class="count">3</p>
        <div class="con pop">
            <p class="title">난이도 설정</p>
            <div class="list">
                <p>1단계</p>
                <p>2단계</p>
                <p class="on">3단계</p>
                <p>4단계</p>
                <p>5단계</p>
                <p>6단계</p>
            </div>
            <button class="btn">시작</button>
        </div>
        <img src="img/wing_on.png" alt="" class="wing">
        <p class="missHitTxt miss">Miss</p>
        <p class="missHitTxt hit">HIT</p>
        <div class="endPop pop">
            <p class="title">성공!<br>축하합니다~</p>
            <button class="btn">확인</button>
        </div>
        <div class="commonXbtn">
            <div class="rotate"></div>
        </div>
    </div>
`
// fn
function wingFn(){
    let wingPop = document.querySelector('.wingPop')
    let wingPopBack = document.querySelector('.wingPop .back')
    let wingPopCon = document.querySelector('.wingPop .con')
    let wingList = document.querySelectorAll('.wingPop .con .list p')
    let wingBtn = document.querySelector('.wingPop .con button')
    let wing = document.querySelector('.wingPop .wing')
    let endPop = document.querySelector('.wingPop .endPop')
    let endPopBtn = document.querySelector('.wingPop .endPop .btn')
    let commonXbtn = document.querySelector('.commonXbtn')
    let wingMiss = document.querySelector('.wingPop .miss')
    let wingHit = document.querySelector('.wingPop .hit')
    let wingCount = document.querySelector('.wingPop .count')
    let wingCountBoolean = true // interval 제어 boolean
    // 파리 못맞출 시 'Miss', '반동', '탄피' 표시
    wingPopBack.addEventListener('click', (e) => {
        let clientX = e.clientX // 보이는 화면의 X 값
        let clientY = e.clientY // 보이는 화면의 Y 값
        console.log(clientX, clientY)
        // miss
        wingMiss.classList.add('on')
        wingMiss.style.top = Number(clientY) - 100 + 'px'
        wingMiss.style.left = clientX + 'px'
        // 반동
        wingPop.classList.add('bounce')
        setTimeout(() => {
            wingMiss.classList.remove('on')
            wingPop.classList.remove('bounce')
        }, 500)
    })
    // 파리 맞출 시 'HIT', '반동', '탄피', '잡은 이미지' 표시
    wing.addEventListener('click', (e) => {
        let clientX = e.clientX // 보이는 화면의 X 값
        let clientY = e.clientY // 보이는 화면의 Y 값
        console.log(clientX, clientY)
        // hit
        wingHit.classList.add('on')
        wingHit.style.top = Number(clientY) - 100 + 'px'
        wingHit.style.left = clientX + 'px'
        // 반동
        wing.classList.add('bounce')
        setTimeout(() => {
            wingHit.classList.remove('on')
            wing.classList.remove('bounce')
        }, 1000)
        // 파리 잡은 이미지로 변환
        wing.setAttribute('src', 'img/wing_off.png') // 잡은 파리 이미지
    })
    wing.setAttribute('src', 'img/wing_on.png') // 파리 이미지 초기화
    // count 설정
    wingCount.style.opacity = '1' // count 나타남
    wingCount.innerHTML = '3' // count 초기화
    // 파리 비활성화
    wing.classList.add('on')
    wing.style.pointerEvents = 'none'
    wing.style.opacity = '0.5'
    wing.style.width = '20px'
    // 단계 설정 팝업
    wingPop.classList.add('on') // 팝업 열기
    // 단계 선택 기능
    for(let i=0; i<wingList.length; i++){
        wingList[i].addEventListener('click', () => {
            for(let k=0; k<wingList.length; k++){
                wingList[k].classList.remove('on')
            }
            wingList[i].classList.add('on') // 선택 버튼 활성화
        })
    }
    // 시작 버튼 클릭
    wingBtn.addEventListener('click', () => {
        // 단계 설정 팝업 닫기
        wingPopCon.classList.add('off')
        setTimeout(function(){
            wingPopCon.classList.add('done')
        }, 500)
        wingStart() // 게임 시작
    })
    // 화면 넓이
    let screenWidth = document.documentElement.clientWidth
    let screenHeight = document.documentElement.clientHeight
    window.onresize = function(){
        screenWidth = document.documentElement.clientWidth
        screenHeight = document.documentElement.clientHeight
        console.log('화면 넓이 : ' + screenWidth + ', 화면 높이 : ' + screenHeight)
    }
    console.log('화면 넓이 : ' + screenWidth + ', 화면 높이 : ' + screenHeight)
    // 게임 실행
    function wingStart(){
        // count down
        setInterval(() => {
            if(wingCountBoolean){
                wingCount.innerHTML = Number(wingCount.innerHTML) - 1 // count 1씩 감소
                if(Number(wingCount.innerHTML) <= 0){ // count 0 이 되면
                    wingCountBoolean = false // interval 멈춤
                    wingCount.innerHTML = '시작!'
                    setTimeout(() => {
                        wingCount.style.opacity = '0' // count 사라짐
                    }, 1000)
                    // 파리 활성화
                    wing.style.pointerEvents = 'auto'
                    wing.style.opacity = '1'
                    wing.style.width = '100px'
                }
            }
        }, 1000)
        // 레벨 변수에 담기
        let levelValue = 1
        let levelNum = parseInt(document.querySelector('.wingPop .con .list p.on').innerHTML)
        if(levelNum == 1){ // 1단계
            levelValue = 3 // 3000 / 3초
        }else if(levelNum == 2){ // 2단계
            levelValue = 2 // 2000 / 2초
        }else if(levelNum == 3){ // 3단계
            levelValue = 1 // 1000 / 1초
        }else if(levelNum == 4){ // 4단계
            levelValue = 0.5 // 500 / 0.5초
        }else if(levelNum == 5){ // 5단계
            levelValue = 0.25 // 250 / 0.25초
        }else if(levelNum == 6){ // 6단계
            levelValue = 0.1 // 100 / 0.1초
        }
        wing.style.transitionDuration = levelValue + 's'
        let autoWing = setInterval(function(){
            wing.style.top = Math.floor(Math.random() * screenHeight) + 'px' // 랜덤 top
            wing.style.left = Math.floor(Math.random() * screenWidth) + 'px' // 랜덤 left
            // console.log('랜덤 top : ' + wing.style.top + ', 랜덤 left : ' + wing.style.left)
        }, Number(levelValue) * 1000)
        console.log(levelNum + '단계 / ' + Number(levelValue) * 1000 + 's / ' + levelValue + '초')
        // 파리 잡음 효과
        wing.addEventListener('click', () => {
            clearInterval(autoWing) // 파리 멈춤
            endPop.classList.add('on')
            setTimeout(() => {
                endPop.classList.add('active')
            }, 500)
        })
        commonXbtn.addEventListener('click', () => {
            clearInterval(autoWing) // 파리 멈춤
        })
    }
    // 팝업 닫기
    let closeWing = () => {
        wingPop.classList.remove('on') // 팝업 닫기
        wing.classList.remove('on')
        wing.removeAttribute('style')
        endPop.classList.remove('on')
        endPop.classList.remove('active')
        setTimeout(() => {
            wingPopCon.classList.remove('off')
            wingPopCon.classList.remove('done')
        }, 500)
    }
    endPopBtn.addEventListener('click', () => {
        closeWing()
    })
    commonXbtn.addEventListener('click', () => {
        closeWing()
    })
}