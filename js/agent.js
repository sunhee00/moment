let smartPhones=['iphone','ipod','ipad','opera mini','opera mobi','nokia','android','webos','windows ce','blackberry','iemobile','sonyericssion'];
//스마트 폰 구분
for(let i in smartPhones) {
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
        document.location='http://duru.dothome.co.kr/mindex.html';
    }//location은 주소창
}



