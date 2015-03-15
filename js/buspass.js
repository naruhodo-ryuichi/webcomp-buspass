/**
 * Created by Administrator on 14/03/2015.
 */
function getdays() {
    var days = document.querySelector(".day");
    for (var i = days.length; i--;) {
        if (days[i].classList.contains("badmonth")) {
            days[i].remove();
        }
    }
    return days
}

function process() {
    var days = getdays();
    console.log(days.length);
    var cal = document.getElementById("mycal");
    var i = 30;
    cal.customRenderFn = function (dayEl, date, isoStr) {
        if (!dayEl.classList.contains("badmonth") || !dayEl.classList.contains("weekend")) {
            xtag.addClass(dayEl, "even");
        }
        i--;
    }
}

function initCustomRender() {
    var holidays = [
        "2015-01-28",
        "2015-03-19",
        "2015-04-02",
        "2015-04-03",
        "2015-05-01",
        "2015-05-02",
        "2015-05-15",
        "2015-06-04",
        "2015-08-15",
        "2015-10-12",
        "2015-11-09",
        "2015-12-08",
        "2015-12-25"
    ];
    var cal = document.getElementById("mycal");
    cal.customRenderFn = function (dayEl, date, ISOstr) {
        if ((holidays.indexOf(ISOstr) > -1) || (date.getDay() % 6 == 0)) {
            xtag.addClass(dayEl, "weekend");
        }
    };
    var daily = document.getElementById("daily");
    daily.value = ((12.20 + 16.10) * 2 / 10).toString();
    var pass = document.getElementById("pass");
    pass.value = (72.00 / 30).toString();
}

document.addEventListener('DOMComponentsLoaded', function () {
    initCustomRender();
});