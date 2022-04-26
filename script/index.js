

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

    const skilD = document.getElementById("skilD");
    const storyD = document.getElementById("storyD");
    const porfileD = document.getElementById("porfileD");
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
    const dateNow = new Date();
    const dateBirth = new Date(2018, 0, 31);
    const timeTillNow = dateNow.getTime() - dateBirth.getTime();
    const daysTillNow = timeTillNow / (1000 * 3600 * 24);
    const DAYS_PER_MONTH = 365 / 12;
    const ageY = Math.floor(daysTillNow / 365);
    const ageM = Math.floor((daysTillNow - 365 * ageY) / DAYS_PER_MONTH);
    const ageD = Math.floor((daysTillNow - 365 * ageY - DAYS_PER_MONTH * ageM));
    const olds = ageY + "歳" + ageM + "ヶ月" + ageD + "日";
    document.getElementById("oldid").innerHTML = olds;
}

/**
 * 業務詳細 というか感想。
 * @param {*} no 
 */
function information(no) {
    // ここの部分はcace文で切り分けること。
    let elem;
    switch (no) {
        case 1:
            elem = document.getElementById('detail1');
            break;
        case 2:
            elem = document.getElementById('detail2');
            break;
        case 3:
            elem = document.getElementById('detail3');
            break;
        case 4:
            elem = document.getElementById('detail4');
            break;
        case 5:
            elem = document.getElementById('detail5');
            break;
        case 6:
            elem = document.getElementById('detail6');
            break;
        case 7:
            elem = document.getElementById('detail7');
            break;
        case 8:
            elem = document.getElementById('detail8');
            break;
        case 9:
            elem = document.getElementById('detail9');
            break;
        case 10:
            elem = document.getElementById('detail10');
            break;
        case 11:
            elem = document.getElementById('detail11');
            break;
        case 12:
            elem = document.getElementById('detail12');
            break;
        case 13:
            elem = document.getElementById('detail13');
            break;
        default:
            console.log('作ってないよ');
    }




    if (elem.hidden == false) {
        elem.hidden = true;
    } else {
        elem.hidden = false;
    }
}
