
function setActive(number) {
    let ematura = document.getElementById("ematuraLink");
    let arebicaAndroid = document.getElementById("arebicaAndroidLink");
    let ckfbih = document.getElementById("ckfbihLink");
    let arebicaWeb = document.getElementById("arebicaWebLink");
    let bosancica = document.getElementById("bosancicaLink");
    let acuteAngle = document.getElementById("patisserieLink");
    let resume =  document.getElementById("resumeLink");
    let spamFilter = document.getElementById("spamFilterLink");

    switch (number){
        case 0:
            ematura.style.borderBottom = "aqua 2px solid";
            arebicaAndroid.style.borderBottom = "none";
            ckfbih.style.borderBottom = "none";
            arebicaWeb.style.borderBottom = "none";
            bosancica.style.borderBottom = "none";
            acuteAngle.style.borderBottom = "none";
            resume.style.borderBottom = "none";
            spamFilter.style.borderBottom = "none";
            break;
        case 1:
            arebicaAndroid.style.borderBottom = "aqua 2px solid";
            ematura.style.borderBottom = "none";
            ckfbih.style.borderBottom = "none";
            arebicaWeb.style.borderBottom = "none";
            bosancica.style.borderBottom = "none";
            acuteAngle.style.borderBottom = "none";
            resume.style.borderBottom = "none";
            spamFilter.style.borderBottom = "none";
            break;
        case 2:
            ematura.style.borderBottom = "none";
            arebicaAndroid.style.borderBottom = "none";
            ckfbih.style.borderBottom = "aqua 2px solid";
            arebicaWeb.style.borderBottom = "none";
            bosancica.style.borderBottom = "none";
            acuteAngle.style.borderBottom = "none";
            resume.style.borderBottom = "none";
            spamFilter.style.borderBottom = "none";
            break;
        case 3:
            ematura.style.borderBottom = "none";
            arebicaAndroid.style.borderBottom = "none";
            ckfbih.style.borderBottom = "none";
            arebicaWeb.style.borderBottom = "aqua 2px solid";
            bosancica.style.borderBottom = "none";
            acuteAngle.style.borderBottom = "none";
            resume.style.borderBottom = "none";
            spamFilter.style.borderBottom = "none";
            break;
        case 4:
            ematura.style.borderBottom = "none";
            arebicaAndroid.style.borderBottom = "none";
            ckfbih.style.borderBottom = "none";
            arebicaWeb.style.borderBottom = "none";
            bosancica.style.borderBottom = "aqua 2px solid";
            acuteAngle.style.borderBottom = "none";
            resume.style.borderBottom = "none";
            spamFilter.style.borderBottom = "none";
            break;
        case 5:
            ematura.style.borderBottom = "none";
            arebicaAndroid.style.borderBottom = "none";
            ckfbih.style.borderBottom = "none";
            arebicaWeb.style.borderBottom = "none";
            bosancica.style.borderBottom = "none";
            acuteAngle.style.borderBottom = "aqua 2px solid";
            resume.style.borderBottom = "none";
            spamFilter.style.borderBottom = "none";
            break;
        case 6:
            ematura.style.borderBottom = "none";
            arebicaAndroid.style.borderBottom = "none";
            ckfbih.style.borderBottom = "none";
            arebicaWeb.style.borderBottom = "none";
            bosancica.style.borderBottom = "none";
            acuteAngle.style.borderBottom = "none";
            resume.style.borderBottom = "aqua 2px solid";
            spamFilter.style.borderBottom = "none";
            break;
        case 7:
            ematura.style.borderBottom = "none";
            arebicaAndroid.style.borderBottom = "none";
            ckfbih.style.borderBottom = "none";
            arebicaWeb.style.borderBottom = "none";
            bosancica.style.borderBottom = "none";
            acuteAngle.style.borderBottom = "none";
            resume.style.borderBottom = "none";
            spamFilter.style.borderBottom = "aqua 2px solid";
            break;
    }

}

window.onscroll = function(){
    console.log("WE ARE RUNNING");
    let ematura = document.querySelector("#ematura");
    let arebicaAndroid = document.querySelector("#arebicaAndroid");
    let redCross = document.querySelector("#ckfbih");
    let arebicaWeb = document.querySelector("#arebicaWeb");
    let bosancicaWeb = document.querySelector("#bosancicaWeb");
    let patisserie = document.querySelector("#acuteAngle");
    let resume = document.querySelector("#resumeII");
    let spamFilter = document.querySelector("#spamFilter");

    if(ematura.getBoundingClientRect().top <= 50){
        setActive(0);
    }
    if(arebicaAndroid.getBoundingClientRect().top <= 50){
        setActive(1);
    }
    if(redCross.getBoundingClientRect().top <= 50){
        setActive(2);
    }
    if(arebicaWeb.getBoundingClientRect().top <= 50){
        setActive(3);
    }
    if(bosancicaWeb.getBoundingClientRect().top <= 50){
        setActive(4);
    }
    if(patisserie.getBoundingClientRect().top <= 50){
        setActive(5);
    }
    if(resume.getBoundingClientRect().top <= 50){
        setActive(6);
    }
    if(spamFilter.getBoundingClientRect().top <= 50){
        setActive(7);
    }
}