

/**
 *  skillクリック時
 */
document.getElementById("skill").onclick = function () {
    getDisplay("skill");
};

/**
 *  storyクリック時
 */
document.getElementById("story").onclick = function () {
    getDisplay("story");
};


/**
 *  profileクリック時
 */
document.getElementById("profile").onclick = function () {
    getDisplay("profile");
    ageCalculation();
};


/**
 * ディスプレイ表示
 */
function getDisplay(arg1) {
    /*
        各ページのエレメントを取得
    */

    var skilD = document.getElementById("skilD");
    var storyD = document.getElementById("storyD");
    var porfileD = document.getElementById("porfileD");
    switch (arg1) {
        case "skill":
            skilD.style.display = 'block';
            storyD.style.display = 'none';
            porfileD.style.display = 'none';
            break;

        case "story":
            skilD.style.display = 'none';
            storyD.style.display = 'block';
            porfileD.style.display = 'none';
            break;

        case "profile":
            skilD.style.display = 'none';
            storyD.style.display = 'none';
            porfileD.style.display = 'block';
            break;
    }
}

/**
 * 年齢計算
 */
function ageCalculation() {
    var dateNow = new Date();
    var dateBirth = new Date(2018, 0, 31);
    var timeTillNow = dateNow.getTime() - dateBirth.getTime();
    var daysTillNow = timeTillNow / (1000 * 3600 * 24);
    const DAYS_PER_MONTH = 365 / 12;
    var ageY = Math.floor(daysTillNow / 365);
    var ageM = Math.floor((daysTillNow - 365 * ageY) / DAYS_PER_MONTH);
    var ageD = Math.floor((daysTillNow - 365 * ageY - DAYS_PER_MONTH * ageM));
    var olds =  ageY + "歳" + ageM + "ヶ月" + ageD + "日";
    document.getElementById("oldid").innerHTML = olds;
}

