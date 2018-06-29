//for responseSlaDiv scroll
function responseSlaDivScroll() {    
    $('#responseSlaDiv').animate({
        scrollTop: $(document).height()
    }, 20000);
    setTimeout(function() {
        $('#responseSlaDiv').animate({
            scrollTop: 0
        }, 20000);
    }, 20000);
    setInterval(function() {
        $('#responseSlaDiv').animate({
            scrollTop: $(document).height()
        }, 20000);
        setTimeout(function() {
            $('#responseSlaDiv').animate({
                scrollTop: 0
            }, 20000);
        }, 8000);
    }, 20000);
}

//for resolutionSlaDiv scroll
function resolutionSlaDivScroll() {    
    $('#resolutionSlaDiv').animate({
        scrollTop: $(document).height()
    }, 20000);
    setTimeout(function() {
        $('#resolutionSlaDiv').animate({
            scrollTop: 0
        }, 20000);
    }, 20000);
    setInterval(function() {
        $('#resolutionSlaDiv').animate({
            scrollTop: $(document).height()
        }, 20000);
        setTimeout(function() {
            $('#resolutionSlaDiv').animate({
                scrollTop: 0
            }, 20000);
        }, 8000);
    }, 20000);
}

//getting modified time for page refresh.
function csvRefreshTime(fileName) {
    xhReq = new XMLHttpRequest();
    xhReq.open("HEAD", fileName, false);
    xhReq.send(null);
    lastModified = xhReq.getResponseHeader("Last-Modified");
    myDate = new Date(lastModified);
    fileCreationDate = myDate.getDate() + "-" + getStringMonth(myDate.getMonth()) + "-" + myDate.getFullYear() + "   " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    fileCreationDate = fileCreationDate.toLocaleString();
    return fileCreationDate;
}

function getStringMonth(month) {
    monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return monthsArr[month];
}
	