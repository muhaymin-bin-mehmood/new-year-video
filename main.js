/* Time Counter */
let countDate = new Date('Jan 1, 2021 00:00:00').getTime();

function saleTime(){
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / second);

    document.getElementById('day').innerText = d;
    document.getElementById('Hour').innerText = h;
    document.getElementById('Minute').innerText = m;
    document.getElementById('Second').innerText = s;
}
setInterval(function(){
    saleTime();
}, 1000)

$(document).ready(function(){
    $('.red').delay('200').animate({height: '0'}, 2000);

    $('.blue').delay('1700').animate({
        width: "500px",
    }, 2000);

    $('h1').delay('3000').animate({marginTop: "-120px", opacity: '1'}, 2000);

    $('.newYear').delay('3400').animate({
        marginTop: "5px",
        opacity: '1',
        fontSize: '8rem',
        letterSpacing: '12px',
    }, 2000);

    $('.countdown #day').delay('4000').animate({
        top: "0",
        opacity: '1'
    }, 2000);
    $('.countdown #Hour').delay('4200').animate({
        top: "0",
        opacity: '1'
    }, 2000);
    $('.countdown #Minute').delay('4400').animate({
        top: "0",
        opacity: '1'
    }, 2000);
    $('.countdown #Second').delay('4600').animate({
        top: "0",
        opacity: '1'
    }, 2000);
})