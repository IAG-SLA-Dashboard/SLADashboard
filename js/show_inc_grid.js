function responseMakeGrid(str, html, redCriticalCount) {
   
    tableCount = 0;
    closeTableTag = 0;
    for (row = 0; row <= str.length - 1; row++) {       
        if (tableCount == 0) {
            closeTableTag = 0;
            html += '<tr >\r\n';
        }
        rowlist = str[row];
        for (col = 0; col < rowlist.length; col++) {
            if (str[row][8] == "0" && str[row][2] == "Critica") {               
                if (col == 0) {
                    
                    if (str[row][13] == "1") {
                        html += '<td align="center"><div class="buttonPink"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div><div class="ribbon-container-critical"> <a> <strong>Critical</strong> </a> </div>' + ' <div class="marginTop3">' + ' <strong>' + str[row][0] + ' </strong>' + ' <br><strong class="marginRight16">' + str[row][6] + ' </strong> <br><strong>' + str[row][10] + ' </strong>' + ' <br><strong>' + "Breach In: " + str[row][12] + ' </strong> </div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonPink"> <div class="ribbon-container-critical"><a><strong>Critical</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
                
            }
            if (str[row][8] == "1" && str[row][2] == "Critica") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonOrange"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-critical"><a><strong>Critical</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonOrange"> <div class="ribbon-container-critical"><a><strong>Critical</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            if (str[row][8] == "2" && str[row][2] == "Critica") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonGreen"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-critical"><a><strong>Critical</strong></a></div>' + '<div class="marginTop3">' + '<strong ">' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonGreen"> <div class="ribbon-container-critical"><a><strong>Critical  </strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
			if (str[row][8] == "3" && str[row][2] == "Critica") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonRed"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-critical"><a><strong>Critical</strong></a></div>' + '<div class="marginTop3">' + '<strong ">' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonRed"> <div class="ribbon-container-critical"><a><strong>Critical  </strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            //---------------------------HIGH-------------
            if (str[row][8] == "0" && str[row][2] == "Alta") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonPink"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonPink"> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            if (str[row][8] == "1" && str[row][2] == "Alta") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonOrange"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong>' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonOrange"> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            if (str[row][8] == "2" && str[row][2] == "Alta") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonGreen"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonGreen"> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
			if (str[row][8] == "3" && str[row][2] == "Alta") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonRed"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonRed"> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            //-------------------Medium------------------
            if ((str[row][8] == "0" && str[row][2] == "Media")) {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonPink"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonPink"> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            if (str[row][8] == "1" && str[row][2] == "Media") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonOrange"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonOrange"> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            if (str[row][8] == "2" && str[row][2] == "Media") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonGreen"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonGreen"> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
			if (str[row][8] == "3" && str[row][2] == "Media") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonRed"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonRed"> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            //------------------low-------------------
            if (str[row][8] == "0" && str[row][2] == "Baja") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonPink"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonPink"> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            if (str[row][8] == "1" && str[row][2] == "Baja") {
                if (col == 0) {                   
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonOrange"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong >' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonOrange"> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
            if (str[row][8] == "2" && (str[row][2]) == "Baja") {
                if (col == 0) {                    
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonGreen"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong>' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonGreen"> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
			if (str[row][8] == "3" && (str[row][2]) == "Baja") {
                if (col == 0) {                    
                    if (str[row][13] == "1") {
                        html += '<td align="center"> <div class="buttonRed"><div class="newIcon"><div class="newRotate"><strong>New</strong></div></div> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong>' + str[row][0] + '</strong>' + '<br><strong class="marginRight16">' + str[row][6] + '</strong><br><strong >' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    } else {
                        html += '<td align="center"> <div class="buttonRed"> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></div></td>\r\n';
                    }
                }
            }
        }
        if (tableCount == 1) {
            html += '</tr>\r\n';
            tableCount = 0;
            closeTableTag = 1;
        }
        if (closeTableTag == 0) {
            tableCount = 1;
        }        
    }
    $('#responseSlaTable').append(html);
}

function resolveMakeGrid(str, html, redCriticalCount) {
    tableCount = 0;
    closeTableTag = 0;
    for (row = 0; row <= str.length - 1; row++) {
        if (tableCount == 0) {
            closeTableTag = 0;
            html += '<tr >\r\n';
        }
        rowlist = str[row];
        for (col = 0; col < rowlist.length; col++) {
            if (str[row][8] == "0" && str[row][2] == "Critica") {
                if (col == 0) {                   
                    //html += '<td align="center"> <div class="buttonRed"> <div class="ribbon-container-critical"><a><strong>Critical</strong></a></div>' + '<br>' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></td>\r\n';
					html += '<td align="center"> <div class="buttonPink"> <div class="ribbon-container-critical"><a><strong>Critical</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                  }
            }
            if (str[row][8] == "1" && str[row][2] == "Critica") {
                if (col == 0) {
                    //html += '<td align="center"> <div class="buttonOrange"> <div class="ribbon-container-critical"><a><strong>Critical</strong></a></div>' + '<br>' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></td>\r\n';
                    html += '<td align="center"> <div class="buttonOrange"> <div class="ribbon-container-critical"><a><strong>Critical</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
            if (str[row][8] == "2" && str[row][2] == "Critica") {
                if (col == 0) {                    
                    //html += '<td align="center"> <div class="buttonGreen"> <div class="ribbon-container-critical"><a><strong>Critical  </strong></a></div>' + '<br>' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong></div></td>\r\n';
					html += '<td align="center"> <div class="buttonGreen"> <div class="ribbon-container-critical"><a><strong>Critical  </strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
			if (str[row][8] == "3" && str[row][2] == "Critica") {
                if (col == 0) {                    
                    html += '<td align="center"> <div class="buttonRed"> <div class="ribbon-container-critical"><a><strong>Critical  </strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
            //---------------------------HIGH-------------
            if (str[row][8] == "0" && str[row][2] == "Alta") {
                if (col == 0) {                   
                    html += '<td align="center"> <div class="buttonPink"> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
            if (str[row][8] == "1" && str[row][2] == "Alta") {
                if (col == 0) {                   
                    html += '<td align="center"> <div class="buttonOrange"> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
               }
            }
            if (str[row][8] == "2" && str[row][2] == "Alta") {
                if (col == 0) {                   
                    html += '<td align="center"> <div class="buttonGreen"> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
               }
            }
			if (str[row][8] == "3" && str[row][2] == "Alta") {
                if (col == 0) {                   
                    html += '<td align="center"> <div class="buttonRed"> <div class="ribbon-container-high"><a><strong>High</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
               }
            }
            //-------------------Medium------------------
            if ((str[row][8] == "0" && str[row][2] == "Media")) {
                if (col == 0) {                   
                    html += '<td align="center"> <div class="buttonPink"> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
               }
            }
            if (str[row][8] == "1" && str[row][2] == "Media") {
                if (col == 0) {                   
                    html += '<td align="center"> <div class="buttonOrange"> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
            if (str[row][8] == "2" && str[row][2] == "Media") {
                if (col == 0) {                  
                    html += '<td align="center"> <div class="buttonGreen"> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
			if (str[row][8] == "3" && str[row][2] == "Media") {
                if (col == 0) {                  
                    html += '<td align="center"> <div class="buttonRed"> <div class="ribbon-container-medium"><a><strong>Medium</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft14">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
            //------------------low-------------------
            if (str[row][8] == "0" && str[row][2] == "Baja") {
                if (col == 0) {                  
                    html += '<td align="center"> <div class="buttonPink"> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
            if (str[row][8] == "1" && str[row][2] == "Baja") {
                if (col == 0) {                  
                    html += '<td align="center"> <div class="buttonOrange"> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
            if (str[row][8] == "2" && (str[row][2]) == "Baja") {
                if (col == 0) {                   
                    html += '<td align="center"> <div class="buttonGreen"> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
			if (str[row][8] == "3" && (str[row][2]) == "Baja") {
                if (col == 0) {                   
                    html += '<td align="center"> <div class="buttonRed"> <div class="ribbon-container-low"><a><strong>Low</strong></a></div>' + '<div class="marginTop3">' + '<strong class="marginLeft7">' + str[row][0] + '</strong>' + '<br><strong>' + str[row][6] + '<br>' + str[row][10] + '</strong>' + '<br><strong>' + "Breach In:  " + str[row][12] + '</strong> </div></div></td>\r\n';
                }
            }
        }
        if (tableCount == 1) {
            html += '</tr>\r\n';
            tableCount = 0;
            closeTableTag = 1;
        }
        if (closeTableTag == 0) {
            tableCount = 1;
        }
    }
    $('#resolutionSlaTable').append(html);
}