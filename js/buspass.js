/**
 * Created by Administrator on 14/03/2015.
 */

function getPasses(days) {
    var pass = false;
    for (var i = 0, j = 1, k = 0; i < days.length; i++) {
        if (!(!pass && days[i].classList.contains("holiday"))) {
            pass = true;
            days[i].setAttribute("pass", j);
            k++;
            //generate new pass
            if (!((k + 1) % 30)) {
                j++;
                k = 0;
                pass = false;
            }
        }
    }
    return days
}

function checkPass() {


}

function getSaved(passes) {
    var cday = Number(document.getElementById("pass").value);
    var max = cday * passes.length;
    var total = 0;
    for (var i = 0; i < passes.length; i++) {
        if (passes[i].hasAttribute("pass")) {
            total += cday;
        }
    }
    return (max - total)
}

function getDays() {
    // Returns a static list of days from DOM
    var nmdays = document.querySelectorAll(".day");
    var days = Array.prototype.slice.call(nmdays);
    for (var i = days.length; i--;) {
        if (days[i].classList.contains("badmonth")) {
            days.splice(i, 1);
        }
    }
    return days
}

function process() {
    var days = getDays();
    var passes = getPasses(days);
    var saved = getSaved(passes);
    document.getElementById("saved").value = saved.toFixed(2);
    var cal = document.getElementById("mycal");
    cal.customRenderFn = function (dayEl) {
        var myindex = passes.indexOf(dayEl);
        if (myindex > -1) {
            var mypass = passes[myindex];
            if (mypass.hasAttribute("pass")) {
                var mypassval = Number(mypass.getAttribute("pass"));
                console.log(mypassval);
                var dcolor = (mypassval % 2) ? "even" : "odd";
                xtag.addClass(dayEl, dcolor);
            }
        }
    }
}

function initCustomRender() {
    // Initial Calendar rendering with weekends and holidays
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
            xtag.addClass(dayEl, "holiday");
        }
    };
    document.getElementById("daily").value = ((12.20 + 16.10) * 2 / 10).toString();
    document.getElementById("pass").value = (72.00 / 30).toString();
}

document.addEventListener('DOMComponentsLoaded', function () {
    // Events to fire up on page components load
    initCustomRender();
});