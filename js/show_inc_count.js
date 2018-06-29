function responseSlaGrid() {
    $.ajax({
        type: "GET",
		async: false,
		cache: false,
        url: "Response.csv",
        success: function(data) {
            str = Papa.parse(data).data;
            console.log(str);
            html = '';
            start = new Date().getTime();
            redCriticalCount = IncCout(str, "0", "Critica");
            orangeCriticalCount = IncCout(str, "1", "Critica");
            greenCriticalCount = IncCout(str, "2", "Critica");
			grayCriticalCount = IncCout(str, "3", "Critica");
            redHighCount = IncCout(str, "0", "Alta");
            orangeHighCount = IncCout(str, "1", "Alta");
            greenHighCount = IncCout(str, "2", "Alta");
			grayHighCount = IncCout(str, "3", "Alta");
            redMediumCount = IncCout(str, "0", "Media");
            orangeMediumCount = IncCout(str, "1", "Media");
            greenMediumCount = IncCout(str, "2", "Media");
			grayMediumCount = IncCout(str, "3", "Media");
            redLowCount = IncCout(str, "0", "Baja");
            orangeLowCount = IncCout(str, "1", "Baja");
            greenLowCount = IncCout(str, "2", "Baja");  
			grayLowCount = IncCout(str, "3", "Baja");  			
			
			
			redCritical_BI_Count = redIncCountByGroupName(str, "BI SUPPORT", "Critica", "0");
			redCritical_SSRML_Count = redIncCountByGroupName(str, "SSRML SUPPORT", "Critica", "0");
			redCritical_IB_Count = redIncCountByGroupName(str, "IB.COM SUPPORT", "Critica", "0");
			redCritical_DBA_Count = redIncCountByGroupName(str, "DBA SUPPORT", "Critica", "0");
			redCritical_WEBLOGIC_Count = redIncCountByGroupName(str, "WEBLOGIC SERVER SUPPORT IB", "Critica", "0");
			redCritical_CARGO_Count = redIncCountByGroupName(str, "CARGO SUPPORT IB", "Critica", "0");
			
			redHigh_BI_Count = redIncCountByGroupName(str, "BI SUPPORT","Alta","0");
			redHigh_SSRML_Count = redIncCountByGroupName(str, "SSRML SUPPORT", "Alta","0");
			redHigh_IB_Count = redIncCountByGroupName(str, "IB.COM SUPPORT","Alta","0");
			redHigh_DBA_Count = redIncCountByGroupName(str, "DBA SUPPORT","Alta","0");
			redHigh_WEBLOGIC_Count = redIncCountByGroupName(str, "WEBLOGIC SERVER SUPPORT IB","Alta","0");
			redHigh_CARGO_Count = redIncCountByGroupName(str, "CARGO SUPPORT IB","Alta","0");
			
			redMedium_BI_Count = redIncCountByGroupName(str, "BI SUPPORT","Media","0");
			redMedium_SSRML_Count = redIncCountByGroupName(str, "SSRML SUPPORT","Media","0");
			redMedium_IB_Count = redIncCountByGroupName(str, "IB.COM SUPPORT","Media","0");
			redMedium_DBA_Count = redIncCountByGroupName(str, "DBA SUPPORT","Media","0");
			redMedium_WEBLOGIC_Count = redIncCountByGroupName(str, "WEBLOGIC SERVER SUPPORT IB","Media","0");
			redMedium_CARGO_Count = redIncCountByGroupName(str, "CARGO SUPPORT IB","Media","0");
			
			redLow_BI_Count = redIncCountByGroupName(str, "BI SUPPORT","Baja","0");
			redLow_SSRML_Count = redIncCountByGroupName(str, "SSRML SUPPORT","Baja","0");
			redLow_IB_Count = redIncCountByGroupName(str, "IB.COM SUPPORT","Baja","0");
			redLow_DBA_Count = redIncCountByGroupName(str, "DBA SUPPORT","Baja","0");
			redLow_WEBLOGIC_Count = redIncCountByGroupName(str, "WEBLOGIC SERVER SUPPORT IB","Baja","0");
			redLow_CARGO_Count = redIncCountByGroupName(str, "CARGO SUPPORT IB","Baja","0");
			
			BI_Count = newIncCountByGroupName(str, "BI SUPPORT");
			SSRML_Count = newIncCountByGroupName(str, "SSRML SUPPORT");
            IB_Count = newIncCountByGroupName(str, "IB.COM SUPPORT");
            DBA_Count = newIncCountByGroupName(str, "DBA SUPPORT");
            WEBLOGIC_Count = newIncCountByGroupName(str, "WEBLOGIC SERVER SUPPORT IB");
            CARGO_Count = newIncCountByGroupName(str, "CARGO SUPPORT IB");
			
			var redCriticalArray = [redCritical_BI_Count,redCritical_SSRML_Count,redCritical_IB_Count,redCritical_DBA_Count,redCritical_WEBLOGIC_Count,redCritical_CARGO_Count];
			var redHighArray = [redHigh_BI_Count,redHigh_SSRML_Count,redHigh_IB_Count,redHigh_DBA_Count,redHigh_WEBLOGIC_Count,redHigh_CARGO_Count];
			var redMediumArray = [redMedium_BI_Count,redMedium_SSRML_Count,redMedium_IB_Count,redMedium_DBA_Count,redMedium_WEBLOGIC_Count,redMedium_CARGO_Count];
			var redLowArray = [redLow_BI_Count,redLow_SSRML_Count,redLow_IB_Count,redLow_DBA_Count,redLow_WEBLOGIC_Count,redLow_CARGO_Count];
			var newIncArray = [BI_Count,SSRML_Count,IB_Count,DBA_Count,WEBLOGIC_Count,CARGO_Count];
				
			var notifierArray = [redCriticalArray,redHighArray,redMediumArray,redLowArray,newIncArray];	
			
			//placing smiley when no incident in response area
            if ((redCriticalCount + orangeCriticalCount + greenCriticalCount + grayCriticalCount + redHighCount + orangeHighCount + greenHighCount + grayHighCount + redMediumCount + orangeMediumCount + greenMediumCount + grayMediumCount + redLowCount + orangeLowCount + greenLowCount +grayLowCount) == 0) {
                $('#responseSlaDiv').css({
                    'background-image': 'url(img/green-smiley.png)',
                    'height': '557px',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center'
                });
            }

                /* ----Removing blank grids----- */
            if ((redCriticalCount + orangeCriticalCount + greenCriticalCount + grayCriticalCount + redHighCount + orangeHighCount + greenHighCount + grayHighCount + redMediumCount + orangeMediumCount + greenMediumCount + grayMediumCount + redLowCount + orangeLowCount + greenLowCount +grayLowCount) == 0) {
                $('#responseSlaTable').remove();
            }
            /*----- function for making grids html dynamically ------*/
            responseMakeGrid(str, html, redCriticalCount);
			redCriticalGroupSoundAlert(notifierArray);
			console.log("#######aaaaa");
			resolutionSlaGrid();
        }
    });
}

function resolutionSlaGrid() {
    $.ajax({
        type: "GET",
		async: false,
		cache: false,
        url: "Resolution.csv",
        success: function(data) {
         
            str = Papa.parse(data).data;
            console.log(str);
            html = '';
            start = new Date().getTime();
            redCriticalCount = IncCout(str, "0", "Critica");
            orangeCriticalCount = IncCout(str, "1", "Critica");
            greenCriticalCount = IncCout(str, "2", "Critica");
			grayCriticalCount = IncCout(str, "3", "Critica");
            redHighCount = IncCout(str, "0", "Alta");
            orangeHighCount = IncCout(str, "1", "Alta");
            greenHighCount = IncCout(str, "2", "Alta");
			grayHighCount = IncCout(str, "3", "Alta");
            redMediumCount = IncCout(str, "0", "Media");
            orangeMediumCount = IncCout(str, "1", "Media");
            greenMediumCount = IncCout(str, "2", "Media");
			grayMediumCount = IncCout(str, "3", "Media");
            redLowCount = IncCout(str, "0", "Baja");
            orangeLowCount = IncCout(str, "1", "Baja");
            greenLowCount = IncCout(str, "2", "Baja");
			grayLowCount = IncCout(str, "3", "Baja");
			
			redCountForSound = newIncCouts(str, "1");
          
            sessionStorage.setItem('redCountForSound', redCountForSound);
			
			//placing smiley when no incident in resolution area
            if ((redCriticalCount + orangeCriticalCount + greenCriticalCount + grayCriticalCount + redHighCount + orangeHighCount + greenHighCount + grayHighCount + redMediumCount + orangeMediumCount + greenMediumCount + grayMediumCount + redLowCount + orangeLowCount + greenLowCount +grayLowCount) == 0) {
                $('#resolutionSlaDiv').css({
                    'background-image': 'url(img/green-smiley.png)',
                    'height': '850px',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center'
                });
            }

            /* ----Removing blank grids----- */
            if ((redCriticalCount + orangeCriticalCount + greenCriticalCount + grayCriticalCount + redHighCount + orangeHighCount + greenHighCount + grayHighCount + redMediumCount + orangeMediumCount + greenMediumCount + grayMediumCount + redLowCount + orangeLowCount + greenLowCount +grayLowCount) == 0) {
                $('#resolutionSlaTable').remove();
            }
            /*----- function for making grids html dynamically ------*/
            resolveMakeGrid(str, html, redCriticalCount);
			console.log("######bbbbbbbbbbb");
			buildChart();
        }
    });
}

function buildChart() {
        $.ajax({
            type: "GET",
			async: false,
			cache: false,
            url: "RSLV_Chart.csv",
            success: function(data) {
                str = Papa.parse(data).data;	
				console.log(str);
				$('#biGreen').append(str[0][4]);
				$('#biYellow').append(str[0][3]);
				$('#biGray').append(str[0][2]);
				
				$('#cargoGreen').append(str[1][4]);
				$('#cargoYellow').append(str[1][3]);
				$('#cargoGray').append(str[1][2]);
				
				$('#dbaGreen').append(str[2][4]);
				$('#dbaYellow').append(str[2][3]);
				$('#dbaGray').append(str[2][2]);
				
				$('#ibGreen').append(str[3][4]);
				$('#ibYellow').append(str[3][3]);
				$('#ibGray').append(str[3][2]);
				
				$('#ssrmlGreen').append(str[4][4]);
				$('#ssrmlYellow').append(str[4][3]);
				$('#ssrmlGray').append(str[4][2]);
				
				$('#weblogicGreen').append(str[5][4]);
				$('#weblogicYellow').append(str[5][3]);
				$('#weblogicGray').append(str[5][2]);
				
                chart = AmCharts.makeChart("chartdiv", {
                    "type": "serial",
                    "theme": "light",
                    "fontSize": 10,
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
                        "critical": 0,
                        "high": str[0][2],
                        "medium": str[0][3],
                        "low": str[0][4],
                    }, {
                        "teamname": "CARGO",
                        "critical": 0,
                        "high": str[1][2],
                        "medium": str[1][3],
                        "low": str[1][4],
                    }, {
                        "teamname": "DBA",
                        "critical": 0,
                        "high": str[2][2],
                        "medium": str[2][3],
                        "low": str[2][4],
                    }, {
                        "teamname": "IB.COM",
                        "critical": 0,
                        "high": str[3][2],
                        "medium": str[3][3],
                        "low": str[3][4],
                    }, {
                        "teamname": "SSRML",
                        "critical": 0,
                        "high": str[4][2],
                        "medium": str[4][3],
                        "low": str[4][4],
                    }, {
                        "teamname": "WEBLOGIC",
                        "critical": 0,
                        "high": str[5][2],
                        "medium": str[5][3],
                        "low": str[5][4],
                    }],
                    "valueAxes": [{
                        "stackType": "regular",
                        "axisAlpha": 0.3,
                        "gridAlpha": 0
                    }],
                    "graphs": [{
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 0,
                        "labelText": "[[value]]",
                        "lineAlpha": 0,
                        "title": "",
                        "type": "column",
                        "color": "#000000",
                        "valueField": "critical"
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 0.8,
                        "labelText": "[[]]",
                        "lineAlpha": 0.3,
                        "title": "",
                        "type": "column",
                        "color": "#000000",
                        "fillColors": "#827f79",
                        "valueField": "high",
						"labelPosition": ""
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 0.8,
                        "labelText": "[[]]",
                        "lineAlpha": 0.3,
                        "title": "",
                        "type": "column",
                        "fillColors": "#eff224",
                        "color": "#000000",
                        "valueField": "medium",					
						"labelPosition": ""
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 0.8,
                        "labelText": "[[]]",
                        "lineAlpha": 0,
                        "title": "",
                        "type": "column",
						"fillColors": "#00FF00",
                        "color": "#eeeee",
                        "valueField": "low",
						"labelPosition": ""
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 0,
                        "labelText": "[[value]]",
                        "lineAlpha": 0,
                        "title": "",
                        "type": "column",
                        "color": "#000000",
                        "valueField": "meast"
                    }, {
                        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                        "fillAlphas": 0,
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
				console.log("#####cccccccccc");
            }
        });
    }
    /*----- Total number of count ------*/
function IncCout(str, code, priority) {
    count = 0;
    for (row = 0; row <= str.length - 1; row++) {
        rowlist = str[row];
        if (str[row][8] == code && str[row][2] == priority) {
            count++;
        }
    }
    return count;
}

function newIncCouts(str, newCode) {
    count = 0;
    for (row = 0; row <= str.length - 1; row++) {
        rowlist = str[row];
        if (str[row][14] == newCode) {
            count++;
        }
    }
    return count;
}

function newIncCountByGroupName(str, groupName) {
    count = 0;
    for (row = 0; row <= str.length - 1; row++) {
        rowlist = str[row];
        if (str[row][10] == groupName && str[row][13] == 1) {
            count++;
        }
    }
    return count;
}

function redIncCountByGroupName(str, groupName, priority, code) {
	redCount = 0;
    for (redRow = 0; redRow <= str.length - 1; redRow++) {
        rowlist = str[redRow];
        if (str[redRow][10] == groupName && str[redRow][2] == priority && str[redRow][8] == code) {
            redCount++;
        }
    }
    return redCount;
}