

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
    const targetSpeaceId = 'detail' + no;
    const targetButtonId = 'detailButton' + no;
    const elem = document.getElementById(targetSpeaceId);
    const button = document.getElementById(targetButtonId);

    if (elem.hidden == false) {
        elem.hidden = true;
        button.textContent = 'more';
    } else {
        elem.hidden = false;
        button.textContent = 'close';
    }
}
