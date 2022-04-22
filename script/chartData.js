const progarmData = {
    labels: ['Java', 'VBA', 'C', 'COBOL', 'Javascript', 'Python', '4D'],
    datasets: [{
        label: '習得レベル(Lv3で1人月程度のイメージ）',
        data: [5, 4, 3, 3, 3, 3, 3],
        backgroundColor: ['lightseagreen', 'darkturquoise', 'mediumturquoise', 'turquoise', 'palegreen', 'springgreen', 'mediumseagreen']
    }]
}
const detaBaseData = {
    labels: ['MariaDB', 'OracleDB', 'Access', '4D', 'SQLServer'],
    datasets: [{
        label: '習得レベル(Lv3で1人月程度のイメージ）',
        data: [5, 4.5, 2.0, 1.5, 0.5],
        backgroundColor: ['lightseagreen', 'darkturquoise', 'mediumturquoise', 'turquoise', 'palegreen'],
        borderWidth: 1
    }]
}

const officeData = {
    labels: ['Excel', 'Word', 'Outlook', 'PowerPoint'],
    datasets: [{
        label: '習得レベル(Lv3で1人月程度のイメージ）',
        data: [5, 4, 2.0, 2.0],
        backgroundColor: ['lightseagreen', 'darkturquoise', 'mediumturquoise', 'turquoise'],
        borderWidth: 1
    }]
}

// グラフを描画 --- (*2)

function setSkillMode(mode) {
    if (window.chart_cv instanceof Chart) {
        chart_cv.destroy();
    }
    switch (mode) {
        case "progarm":
            ctx = document.getElementById('chart_cv')
            chart_cv = new Chart(ctx, {
                type: 'bar', // グラフの種類
                data: progarmData, // データ
                options: {
                    scales: {                          //軸設定
                        yAxes: [{                      //y軸設定
                            ticks: {                      //最大値最小値設定
                                min: 0,                   //最小値
                                max: 5,                  //最大値
                                fontSize: 18,             //フォントサイズ
                                stepSize: 1               //軸間隔
                            },
                        }],
                    }
                }
            })
            break;

        case "detaBase":
            ctx = document.getElementById('chart_cv')
            chart_cv = new Chart(ctx, {
                type: 'bar', // グラフの種類
                data: detaBaseData, // データ
                options: {
                    scales: {                          //軸設定
                        yAxes: [{                      //y軸設定
                            ticks: {                      //最大値最小値設定
                                min: 0,                   //最小値
                                max: 5,                  //最大値
                                fontSize: 18,             //フォントサイズ
                                stepSize: 1               //軸間隔
                            },
                        }],
                    }
                }
            })
            break;

        case "office":
            ctx = document.getElementById('chart_cv')
            chart_cv = new Chart(ctx, {
                type: 'bar', // グラフの種類
                data: officeData, // データ
                options: {
                    scales: {                          //軸設定
                        yAxes: [{                      //y軸設定
                            ticks: {                      //最大値最小値設定
                                min: 0,                   //最小値
                                max: 5,                  //最大値
                                fontSize: 18,             //フォントサイズ
                                stepSize: 1               //軸間隔
                            },
                        }],
                    }
                }
            })


            break;
    }
}

