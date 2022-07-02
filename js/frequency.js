const input_hz = document.getElementById("hertz");
const input_khz = document.getElementById("khertz");
const input_mhz = document.getElementById("mhertz");
const input_ghz = document.getElementById("ghertz");
const input_freq = document.getElementsByClassName("freq-input");

for(let i = 0; i<input_freq.length; i++){
    let freq_input = input_freq[i];
    freq_input.addEventListener("input",function(e){
        let freq_value = parseFloat(e.target.value);
        switch(e.target.name){
            case "hertz":
                input_khz.value = freq_value / 1000;
                input_mhz.value = freq_value / 1000000;
                input_ghz.value = freq_value / 1000000000;
                break;
            case "khertz":
                input_hz.value = freq_value * 1000;
                input_mhz.value = freq_value / 1000;
                input_ghz.value = freq_value / 1000000;
                break;
            case "mhertz":
                input_hz.value = freq_value * 1000000;
                input_khz.value = freq_value * 1000;
                input_ghz.value = freq_value / 1000;
                break;
            case "ghertz":
                input_hz.value = freq_value * 1000000000;
                input_khz.value = freq_value * 1000000;
                input_mhz.value = freq_value * 1000;
                break;
        }
    })
}