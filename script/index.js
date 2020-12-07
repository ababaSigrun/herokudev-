

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
};


/**
 * ディスプレイ表示
 */
function getDisplay(arg1) {
    alert(arg1);
}

