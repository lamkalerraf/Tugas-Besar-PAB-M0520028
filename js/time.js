const input_sec = document.getElementById("sec");
const input_min = document.getElementById("min");
const input_hour = document.getElementById("hour");
const input_day = document.getElementById("day");
const input_week = document.getElementById("week");
const input_month = document.getElementById("month");
const input_year = document.getElementById("year");
const input_dec = document.getElementById("dec");
const input_century = document.getElementById("century");
const input_time = document.getElementsByClassName("time-input");

for(let i = 0; i<input_time.length; i++){
    let time_input = input_time[i];
    time_input.addEventListener("input",function(e){
        let time_value = parseFloat(e.target.value);
        switch(e.target.name){
            case "sec":
                input_min.value = time_value / 60;
                input_hour.value = time_value / 3600;
                input_day.value = time_value / 86400;
                input_week.value = time_value / 604800;
                input_month.value = time_value / 2628000;
                input_year.value = time_value / 31540000;
                input_dec.value = time_value / 315400000;
                input_century.value = time_value / 3154000000;
                break;
            case "min":
                input_sec.value = time_value * 60;
                input_hour.value = time_value / 60;
                input_day.value = time_value / 1440;
                input_week.value = time_value / 10080;
                input_month.value = time_value / 43800;
                input_year.value = time_value / 525600;
                input_dec.value = time_value / 5256000;
                input_century.value = time_value / 52560000;
                break;
            case "hour":
                input_sec.value = time_value * 3600;
                input_min.value = time_value * 60;
                input_day.value = time_value / 24;
                input_week.value = time_value / 168;
                input_month.value = time_value / 730;
                input_year.value = time_value / 8760;
                input_dec.value = time_value / 87600;
                input_century.value = time_value / 876000;
                break;
            case "day":
                input_sec.value = time_value * 86400;
                input_min.value = time_value * 1440;
                input_hour.value = time_value * 24;
                input_week.value = time_value / 7;
                input_month.value = time_value / 30;
                input_year.value = time_value / 365;
                input_dec.value = time_value / 3650;
                input_century.value = time_value / 36500;
                break;
            case "week":
                input_sec.value = time_value * 604800;
                input_min.value = time_value * 10080;
                input_hour.value = time_value * 168;
                input_day.value = time_value * 7;
                input_month.value = time_value / 4.345;
                input_year.value = time_value / 52;
                input_dec.value = time_value / 521;
                input_century.value = time_value / 5214;
                break;
            case "month":
                input_sec.value = time_value * 2628000;
                input_min.value = time_value * 43800;
                input_hour.value = time_value * 730;
                input_day.value = time_value * 30;
                input_week.value = time_value * 4.345;
                input_year.value = time_value / 12;
                input_dec.value = time_value / 120;
                input_century.value = time_value / 1200;
                break;
            case "year":
                input_sec.value = time_value * 31540000;
                input_min.value = time_value * 525600;
                input_hour.value = time_value * 8760;
                input_day.value = time_value * 365;
                input_week.value = time_value * 52;
                input_month.value = time_value * 12;
                input_dec.value = time_value / 10;
                input_century.value = time_value / 100;
                break;
            case "dec":
                input_sec.value = time_value * 315400000;
                input_min.value = time_value * 5256000;
                input_hour.value = time_value * 87600;
                input_day.value = time_value * 3650;
                input_week.value = time_value * 521;
                input_month.value = time_value * 120;
                input_year.value = time_value * 10;
                input_century.value = time_value / 10;
                break;
            case "century":
                input_sec.value = time_value * 3154000000;
                input_min.value = time_value * 52560000;
                input_hour.value = time_value * 876000;
                input_day.value = time_value * 36500;
                input_week.value = time_value * 5214;
                input_month.value = time_value * 1200;
                input_year.value = time_value * 100;
                input_dec.value = time_value * 10;
                break;
        }
    })
}