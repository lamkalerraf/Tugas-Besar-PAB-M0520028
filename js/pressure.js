const input_bar = document.getElementById("bar");
const input_pa = document.getElementById("pascal");
const input_psi = document.getElementById("ppsi");
const input_atm = document.getElementById("atm");
const input_torr = document.getElementById("torr");
const input_press = document.getElementsByClassName("press-input");

for(let i = 0; i<input_press.length; i++){
    let press_input = input_press[i];
    press_input.addEventListener("input", function(e){
        let press_value = parseFloat(e.target.value);
        switch(e.target.name){
            case "bar":
                input_pa.value = press_value * 100000;
                input_psi.value = press_value * 14.504;
                input_atm.value = press_value / 1.013;
                input_torr.value = press_value * 750;
                break;
            case "pascal":
                input_bar.value = press_value / 100000;
                input_psi.value = press_value / 6895;
                input_atm.value = press_value / 101325;
                input_torr.value = press_value / 133;
                break;
            case "ppsi":
                input_bar.value = press_value / 14.504;
                input_pa.value = press_value * 6895;
                input_atm.value = press_value / 14.696;
                input_torr.value = press_value * 51.715;
                break;
            case "atm":
                input_bar.value = press_value * 1.013;
                input_pa.value = press_value * 101325;
                input_psi.value = press_value * 14.696;
                input_torr.value = press_value * 760;
                break;
            case "torr":
                input_bar.value = press_value / 750;
                input_pa.value = press_value * 133;
                input_psi.value = press_value / 51.715;
                input_atm.value = press_value / 760;
                break;
        }
    })
}