

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
    /*
        各ページのエレメントを取得
    */

    var skilD = document.getElementById( "skilD" );
    var storyD = document.getElementById( "storyD" );
    var porfileD = document.getElementById( "porfileD" );
    switch( arg1 ) {
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

