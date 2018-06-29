function responseSlaGrid() {
    $.ajax({
        type: "GET",
        url: "Response.csv",
        success: function(data) {
            var str = Papa.parse(data).data;
            console.log(str);
            var html = '';
            start = new Date().getTime();
            var redCriticalCount = IncCout(str, "0", "Critica");
            var orangeCriticalCount = IncCout(str, "1", "Critica");
            var greenCriticalCount = IncCout(str, "2", "Critica");
            var redHighCount = IncCout(str, "0", "Alta");
            var orangeHighCount = IncCout(str, "1", "Alta");
            var greenHighCount = IncCout(str, "2", "Alta");
            var redMediumCount = IncCout(str, "0", "Media");
            var orangeMediumCount = IncCout(str, "1", "Media");
            var greenMediumCount = IncCout(str, "2", "Media");
            var redLowCount = IncCout(str, "0", "Baja");
            var orangeLowCount = IncCout(str, "1", "Baja");
            var greenLowCount = IncCout(str, "2", "Baja");
			
            var BI_Count = newIncCountByGroupName(str, "BI SUPPORT");
            var SSRML_Count = newIncCountByGroupName(str, "SSRML SUPPORT");
            var IB_Count = newIncCountByGroupName(str, "IB.COM SUPPORT");
            var DBA_Count = newIncCountByGroupName(str, "DBA SUPPORT");
            var WEBLOGIC_Count = newIncCountByGroupName(str, "WEBLOGIC SERVER SUPPORT IB");
            var CARGO_Count = newIncCountByGroupName(str, "CARGO SUPPORT IB");

            if ((redCriticalCount + orangeCriticalCount + greenCriticalCount + redHighCount + orangeHighCount + greenHighCount + redMediumCount + orangeMediumCount + greenMediumCount + redLowCount + orangeLowCount + greenLowCount) == 0) {
                $('#responseSlaDiv').css({                    
                    'background-image': 'url(img/green-smiley.png)',
                    'height': '557px',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center'
                });
            }
            
            soundAlertCheck();

            function soundAlertCheck() {
                    var firstFlag = false;
                    var secondFlag = false;
                    first = new Audio('sound/siren-critical.mp3');
                    second = new Audio('sound/siren-high.mp3');
                    third = new Audio('sound/medium.mp3');
                    forth = new Audio('sound/low.mp3');
                    //==================when all categories are red ===========================================		 
                    if (redCriticalCount > 0 && redHighCount > 0 && redMediumCount > 0 && redLowCount > 0) {
                        first.play();
                        first.addEventListener('ended', function() {
                            second.play();
                            second.addEventListener('ended', function() {
                                third.play();
                                third.addEventListener('ended', function() {
                                    forth.play();
                                    forth.addEventListener('ended', function() {
                                        newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                                    });

                                });
                            });
                        });
                    }
                    //====================when Critical is Zero and all rest are not zero=================================
                    else if (redCriticalCount == 0 && redHighCount > 0 && redMediumCount > 0 && redLowCount > 0) {
                        second.play();
                        second.addEventListener('ended', function() {
                            third.play();
                            third.addEventListener('ended', function() {
                                forth.play();
                                forth.addEventListener('ended', function() {
                                    newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                                });
                            });
                        });
                    }
                    //====================================when High is Zero and all rest are not zero============================
                    else if (redCriticalCount > 0 && redHighCount == 0 && redMediumCount > 0 && redLowCount > 0) {
                        first.play();
                        first.addEventListener('ended', function() {
                            third.play();
                            third.addEventListener('ended', function() {
                                forth.play();
                                forth.addEventListener('ended', function() {
                                    newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                                });
                            });
                        });
                    }
                    //====================================when Medium is Zero and all rest are not zero================================	
                    else if (redCriticalCount > 0 && redHighCount > 0 && redMediumCount == 0 && redLowCount > 0) {
                        first.play();
                        first.addEventListener('ended', function() {
                            second.play();
                            second.addEventListener('ended', function() {
                                forth.play();
                                forth.addEventListener('ended', function() {
                                    newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                                });
                            });
                        });
                    }
                    //====================================when Low is Zero and all rest are not zero================================	
                    else if (redCriticalCount > 0 && redHighCount > 0 && redMediumCount > 0 && redLowCount == 0) {
                        first.play();
                        first.addEventListener('ended', function() {
                            second.play();
                            second.addEventListener('ended', function() {
                                third.play();
                                third.addEventListener('ended', function() {
                                    newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                                });
                            });
                        });
                    }
                    //****************************************************************
                    //====================================critical=R,High=R,Medium=0,Low=0================================
                    else if (redCriticalCount > 0 && redHighCount > 0 && redMediumCount == 0 && redLowCount == 0) {
                        first.play();
                        first.addEventListener('ended', function() {
                            second.play();
                            second.addEventListener('ended', function() {
                                newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                            });
                        });
                    }
                    //====================================critical=R,High=0,Medium=R,Low=0================================
                    else if (redCriticalCount > 0 && redHighCount == 0 && redMediumCount > 0 && redLowCount == 0) {
                        first.play();
                        first.addEventListener('ended', function() {
                            third.play();
                            third.addEventListener('ended', function() {
                                newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                            });
                        });
                    }
                    //====================================critical=R,High=0,Medium=0,Low=R================================
                    else if (redCriticalCount > 0 && redHighCount == 0 && redMediumCount == 0 && redLowCount > 0) {
                        first.play();
                        first.addEventListener('ended', function() {
                            forth.play();
                            forth.addEventListener('ended', function() {
                                newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                            });
                        });
                    }
                    //====================================critical=R,High=0,Medium=0,Low=R================================
                    else if (redCriticalCount == 0 && redHighCount > 0 && redMediumCount > 0 && redLowCount == 0) {
                        second.play();
                        second.addEventListener('ended', function() {
                            third.play();
                            third.addEventListener('ended', function() {
                                newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                            });
                        });
                    }
                    //====================================critical=0,High=R,Medium=0,Low=R================================
                    else if (redCriticalCount == 0 && redHighCount > 0 && redMediumCount == 0 && redLowCount > 0) {
                        second.play();
                        second.addEventListener('ended', function() {
                            forth.play();
                            forth.addEventListener('ended', function() {
                                newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                            });
                        });
                    }
                    //====================================critical=0,High=0,Medium=R,Low=R================================
                    else if (redCriticalCount == 0 && redHighCount == 0 && redMediumCount > 0 && redLowCount > 0) {
                        third.play();
                        third.addEventListener('ended', function() {
                            forth.play();
                            forth.addEventListener('ended', function() {
                                newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                            });
                        });
                    }
                    //****************************************************************
                    //====================================Only Critical Red =======================================
                    else if (redCriticalCount > 0 && redHighCount == 0 && redMediumCount == 0 && redLowCount == 0) {
                        first.play();
                        first.addEventListener('ended', function() {
                            newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                        });
                    }
                    //====================================== Only High Red ========================================
                    else if (redCriticalCount == 0 && redHighCount > 0 && redMediumCount == 0 && redLowCount == 0) {
                        second.play();
                        second.addEventListener('ended', function() {
                            newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                        });
                    }
                    //====================================== Only Midum Red ========================================
                    else if (redCriticalCount == 0 && redHighCount == 0 && redMediumCount > 0 && redLowCount == 0) {
                        third.play();
                        third.addEventListener('ended', function() {
                            newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                        });
                    }
                    //====================================== Only Low Red ========================================
                    else if (redCriticalCount == 0 && redHighCount == 0 && redMediumCount == 0 && redLowCount > 0) {
                        forth.play();
                        forth.addEventListener('ended', function() {
                            newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                        });
                    } else if (redCriticalCount == 0 && redHighCount == 0 && redMediumCount == 0 && redLowCount == 0) {
                        newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count);
                    }
                }
                /* ----Removing blank grids----- */
            if ((redCriticalCount + orangeCriticalCount + greenCriticalCount + redHighCount + orangeHighCount + greenHighCount + redMediumCount + orangeMediumCount + greenMediumCount + redLowCount + orangeLowCount + greenLowCount) == 0) {
                $('#responseSlaTable').remove();
            }
            /*----- function for making grids html dynamically ------*/
            responseMakeGrid(str, html, redCriticalCount);
        }
    });
}

function resolutionSlaGrid() {
    $.ajax({
        type: "GET",
        url: "Resolution.csv",
        success: function(data) {
			//sessionStorage.removeItem('ResolutionRedIncCount');
			sessionStorage.clear();
            var str = Papa.parse(data).data;
            console.log(str);
            var html = '';
            start = new Date().getTime();
            var redCriticalCount = IncCout(str, "0", "Critica");
            var orangeCriticalCount = IncCout(str, "1", "Critica");
            var greenCriticalCount = IncCout(str, "2", "Critica");
            var redHighCount = IncCout(str, "0", "Alta");
            var orangeHighCount = IncCout(str, "1", "Alta");
            var greenHighCount = IncCout(str, "2", "Alta");
            var redMediumCount = IncCout(str, "0", "Media");
            var orangeMediumCount = IncCout(str, "1", "Media");
            var greenMediumCount = IncCout(str, "2", "Media");
            var redLowCount = IncCout(str, "0", "Baja");
            var orangeLowCount = IncCout(str, "1", "Baja");
            var greenLowCount = IncCout(str, "2", "Baja");
			
			var totalResolutionRedIncCount = redCriticalCount+redHighCount+redMediumCount+redLowCount ;	
			sessionStorage.setItem('ResolutionRedIncCount', totalResolutionRedIncCount);			
			
            if ((redCriticalCount + orangeCriticalCount + greenCriticalCount + redHighCount + orangeHighCount + greenHighCount + redMediumCount + orangeMediumCount + greenMediumCount + redLowCount + orangeLowCount + greenLowCount) == 0) {
                $('#resolutionSlaDiv').css({
                    'background-image': 'url(img/green-smiley.png)',
                    'height': '850px',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center'
                });
            }      
            
            /* ----Removing blank grids----- */
            if ((redCriticalCount + orangeCriticalCount + greenCriticalCount + redHighCount + orangeHighCount + greenHighCount + redMediumCount + orangeMediumCount + greenMediumCount + redLowCount + orangeLowCount + greenLowCount) == 0) {
                $('#resolutionSlaTable').remove();
            }
            /*----- function for making grids html dynamically ------*/
            resolveMakeGrid(str, html, redCriticalCount);
        }
    });
}

function buildChart() {
        $.ajax({
            type: "GET",
            url: "RSLV_Chart.csv",
            success: function(data) {
                var str = Papa.parse(data).data;
                var chart = AmCharts.makeChart("chartdiv", {
                    "type": "serial",
                    "theme": "light",
                    "fontSize": 12,
                    "columnWidth": .75,
                    "depth3D": 10,
                    "legend": {
                        "horizontalGap": 10,
                        "maxColumns": 1,
                        "position": "right",
                        "useGraphSettings": true,
                        "markerSize": 10
                    },
                    "dataProvider": [{
                        "teamname": "BI",
                        "critical": str[0][2],
                        "high": str[0][5],
                        "medium": str[0][4],
                        "low": str[0][3],
                    }, {
                        "teamname": "CARGO",
                        "critical": str[1][2],
                        "high": str[1][5],
                        "medium": str[1][4],
                        "low": str[1][3],
                    }, {
                        "teamname": "DBA",
                        "critical": str[2][2],
                        "high": str[2][5],
                        "medium": str[2][4],
                        "low": str[2][3],
                    }, {
                        "teamname": "IB.COM",
                        "critical": str[3][2],
                        "high": str[3][5],
                        "medium": str[3][4],
                        "low": str[3][3],
                    }, {
                        "teamname": "SSRML",
                        "critical": str[4][2],
                        "high": str[4][5],
                        "medium": str[4][4],
                        "low": str[4][3],
                    }, {
                        "teamname": "WEBLOGIC",
                        "critical": str[5][2],
                        "high": str[5][5],
                        "medium": str[5][4],
                        "low": str[5][3],
                    }],
                    "valueAxes": [{
                        "stackType": "regular",
                        "axisAlpha": 0.3,
                        "gridAlpha": 0
                    }],
                    "graphs": [{
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": .5,
                        "labelText": "[[value]]",
                        "lineAlpha": 0,
                        "title": "",
                        "type": "column",
                        "fillColors": "#827f79",
                        "color": "#000000",
                        "valueField": "critical"
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 1,
                        "labelText": "[[value]]",
                        "lineAlpha": 0.3,
                        "title": "",
                        "type": "column",
                        "color": "#000000",
                        "fillColors": "#00ff00",
                        "valueField": "high"
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 1,
                        "labelText": "[[value]]",
                        "lineAlpha": 0.3,
                        "title": "",
                        "type": "column",
                        "fillColors": "#f0ad33",
                        "color": "#000000",
                        "valueField": "medium"
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 1,
                        "labelText": "[[value]]",
                        "lineAlpha": 0,
                        "title": "",
                        "type": "column",
                        "color": "#000000",
                        "fillColors": "#D90000",
                        "valueField": "low"
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 1,
                        "labelText": "[[value]]",
                        "lineAlpha": 0,
                        "title": "",
                        "type": "column",
                        "color": "#000000",
                        "valueField": "meast"
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 1,
                        "labelText": "[[value]]",
                        "lineAlpha": 0,
                        "title": "",
                        "type": "column",
                        "color": "#000000",
                        "valueField": "africa"
                    }],
                    "categoryField": "teamname",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "axisAlpha": 0,
                        "gridAlpha": 0,
                        "position": "left"
                    },
                    "export": {
                        "enabled": true
                    }

                });
            }
        });
    }
    /*----- Total number of count ------*/
function IncCout(str, code, priority) {
    var count = 0;
    for (var row = 0; row <= str.length - 1; row++) {
        var rowlist = str[row];
        if (str[row][8] == code && str[row][2] == priority) {
            count++;
        }
    }
    return count;
}

function newIncCouts(str, newCode) {
    var count = 0;
    for (var row = 0; row <= str.length - 1; row++) {
        var rowlist = str[row];
        if (str[row][13] == newCode) {
            count++;
        }
    }
    return count;
}

function newIncCountByGroupName(str, groupName) {
    var count = 0;
    for (var row = 0; row <= str.length - 1; row++) {
        var rowlist = str[row];
        if (str[row][10] == groupName && str[row][13] == 1) {
            count++;
        }
    }
    return count;
}