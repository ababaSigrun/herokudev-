const progarmData = {
    labels: ['Java', 'VBA', 'C', 'COBOL', 'Javascript', 'Python', 'Ruby'],
    datasets: [{
        label: '習得レベル',
        data: [5, 4.8, 3.5, 3.5, 2.5, 2, 1.5],
        backgroundColor: ['red', 'green', 'blue', 'pink', 'black', 'yellow', 'lightyellow']
    }]
}
// グラフを描画 --- (*2)

function setSkillMode(mode) {
    // alert(mode);
    switch (mode) {
        case "progarm":
            ctx = document.getElementById('chart_cv')
            chart_cv = new Chart(ctx, {
                type: 'bar', // グラフの種類
                data: progarmData, // データ
                options: {
                    scales: {                          //軸設定
                        yAxes: [{                      //y軸設定
                            display: true,             //表示設定
                            scaleLabel: {              //軸ラベル設定
                                display: true,          //表示設定
                                labelString: '習得レベル',  //ラベル
                                fontSize: 18               //フォントサイズ
                            },
                            ticks: {                      //最大値最小値設定
                                min: 0,                   //最小値
                                max: 5,                  //最大値
                                fontSize: 18,             //フォントサイズ
                                stepSize: 5               //軸間隔
                            },
                        }],
                    }
                }
            })
            break;

        case "detaBase":
            chart_cv.destroy();
            break;

        case "tool":
            chart_cv.destroy();
            break;
    }
}

