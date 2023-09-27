window.addEventListener('DOMContentLoaded', () =>{
    const deadline = '2023-10-28';

    function getTimeRemaining(endtime) {
        const t =  Date.parse(deadline) - new Date(),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total' : t,
            hours,minutes,seconds
        };
    }

    function getZeroNum(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(upateClock, 1000);

        upateClock();

        function upateClock() {
            const t1 = getTimeRemaining(endtime);

            hours.innerHTML = getZeroNum(t1.hours);
            minutes.innerHTML = getZeroNum(t1.minutes);
            seconds.innerHTML = getZeroNum(t1.seconds);


            if (t1.total <= 0){
                clearInterval(timeInterval);
            }

        }
    }


    function getTimeRemaining1(endtime) {
        const t1 =  Date.parse(deadline) - new Date(),
            hours = Math.floor((t1 / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t1 / 1000 / 60) % 60),
            seconds = Math.floor((t1 / 1000) % 60);

        return {
            'total' : t1,
            hours,minutes,seconds
        };
    }

    function setClock1(selector, endtime) {
        const timer = document.querySelector(selector),
            hours = timer.querySelector(".hours1"),
            minutes = timer.querySelector(".minutes1"),
            seconds = timer.querySelector(".seconds1"),
            timeInterval = setInterval(upateClock1, 1000);

        upateClock1();

        function upateClock1() {
            const t = getTimeRemaining1(endtime);

            hours.innerHTML = getZeroNum(t.hours);
            minutes.innerHTML = getZeroNum(t.minutes);
            seconds.innerHTML = getZeroNum(t.seconds);


            if (t.total <= 0){
                clearInterval(timeInterval);
            }

        }
    }




    function getTimeRemaining2(endtime) {
        const t2 =  Date.parse(deadline) - new Date(),
            hours = Math.floor((t2 / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t2 / 1000 / 60) % 60),
            seconds = Math.floor((t2 / 1000) % 60);

        return {
            'total' : t2,
            hours,minutes,seconds
        };
    }

    function setClock2(selector, endtime) {
        const timer = document.querySelector(selector),
            hours = timer.querySelector(".hours2"),
            minutes = timer.querySelector(".minutes2"),
            seconds = timer.querySelector(".seconds2"),
            timeInterval = setInterval(upateClock2, 1000);

        upateClock2();

        function upateClock2() {
            const t = getTimeRemaining2(endtime);

            hours.innerHTML = getZeroNum(t.hours);
            minutes.innerHTML = getZeroNum(t.minutes);
            seconds.innerHTML = getZeroNum(t.seconds);


            if (t.total <= 0){
                clearInterval(timeInterval);
            }

        }
    }


    function getTimeRemaining3(endtime) {
        const t3 =  Date.parse(deadline) - new Date(),
            hours = Math.floor((t3 / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t3 / 1000 / 60) % 60),
            seconds = Math.floor((t3 / 1000) % 60);

        return {
            'total' : t3,
            hours,minutes,seconds
        };
    }

    function setClock3(selector, endtime) {
        const timer = document.querySelector(selector),
            hours = timer.querySelector(".hours3"),
            minutes = timer.querySelector(".minutes3"),
            seconds = timer.querySelector(".seconds3"),
            timeInterval = setInterval(upateClock3, 1000);

        upateClock3();

        function upateClock3() {
            const t = getTimeRemaining3(endtime);

            hours.innerHTML = getZeroNum(t.hours);
            minutes.innerHTML = getZeroNum(t.minutes);
            seconds.innerHTML = getZeroNum(t.seconds);


            if (t.total <= 0){
                clearInterval(timeInterval);
            }

        }
    }

    setClock(".timer-main", deadline);
    setClock1(".timer-main1", deadline);
    setClock2(".timer-main2", deadline);
    setClock3(".timer-main3", deadline);

    $(document).ready(function (){
        $('.ask-card-question').click(function(event){
            $(this).toggleClass('active').next().slideToggle(300);
        })
    })

    $(document).ready(function (){
        $('.program-card-title').click(function(event){
            $(this).toggleClass('active1').next().slideToggle(300);
        })
    })


    const nav = document.querySelector('#nav'),
        navBtn = document.querySelector('#nav-btn'),
        navBtnImg = document.querySelector('#nav-btn-img');
    navBtn.onclick = () => {
        if (nav.classList.toggle('open')) {
            navBtnImg.src = "./img/nav-close.svg";
        } else {
            navBtnImg.src = "./img/nav-open.svg";
        }
    }

});