/**
 * Created by Administrator on 14/03/2015.
 */

function initCustomRender(){
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
    cal.customRenderFn = function(dayEl, date){
        if((holidays.indexOf(date.toISOString().slice(0,10)) > -1)||(date.getDay() % 6==0)){
            xtag.addClass(dayEl, "weekend");
        }
    };
}

document.addEventListener('DOMComponentsLoaded', function(){
    initCustomRender();
});