const input_mph = document.getElementById("mileph");
const input_fps = document.getElementById("footps");
const input_mps = document.getElementById("meterps");
const input_kph = document.getElementById("kmeterph");
const input_knot = document.getElementById("knot");
const input_speed = document.getElementsByClassName("speed-input");

for(let i = 0; i<input_speed.length; i++){
    let speed_input = input_speed[i];
    speed_input.addEventListener("input", function(e){
        let speed_value = parseFloat(e.target.value);
        switch(e.target.name){
            case "mileph":
                input_fps.value = speed_value * 1.467;
                input_mps.value = speed_value / 2.237;
                input_kph.value = speed_value * 1.609;
                input_knot.value = speed_value / 1.151;
                break;
            case "footps":
                input_mph.value = speed_value / 1.467;
                input_mps.value = speed_value / 3.281;
                input_kph.value = speed_value * 1.097;
                input_knot.value = speed_value / 1.688;
                break;
            case "meterps":
                input_mph.value = speed_value * 2.237;
                input_fps.value = speed_value * 3.281;
                input_kph.value = speed_value * 3.6;
                input_knot.value = speed_value * 1.944;
                break;
            case "kmeterph":
                input_mph.value = speed_value / 1.609;
                input_fps.value = speed_value / 1.097;
                input_mps.value = speed_value / 3.6;
                input_knot.value = speed_value / 1.852;
                break;
            case "knot":
                input_mph.value = speed_value * 1.151;
                input_fps.value = speed_value * 1.688;
                input_mps.value = speed_value / 1.944;
                input_kph.value = speed_value * 1.852;
                break;
        }
    })
}