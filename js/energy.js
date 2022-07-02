const input_jol = document.getElementById("joule");
const input_kjol = document.getElementById("kjoule");
const input_cal = document.getElementById("grcal");
const input_kcal = document.getElementById("kcal");
const input_watt = document.getElementById("watth");
const input_kwatt = document.getElementById("kwatth");
const input_btu = document.getElementById("btu");
const input_ust = document.getElementById("ustherm");
const input_ftp = document.getElementById("ftp");
const input_energy = document.getElementsByClassName("energy-input");

for(let i = 0; i<input_energy.length; i++){
    let energy_input = input_energy[i];
    energy_input.addEventListener("input",function(e){
        let energy_value = parseFloat(e.target.value);
        switch(e.target.name){
            case "joule":
                input_kjol.value = energy_value / 1000;
                input_cal.value = energy_value / 4.184;
                input_kcal.value = energy_value / 4184;
                input_watt.value = energy_value / 3600;
                input_kwatt.value = energy_value / 3600000;
                input_btu.value = energy_value / 1055;
                input_ust.value = energy_value / 105500000;
                input_ftp.value = energy_value / 1.356;
                break;
            case "kjoule":
                input_jol.value = energy_value * 1000;
                input_cal.value = energy_value * 239;
                input_kcal.value = energy_value / 4.184;
                input_watt.value = energy_value / 3.6;
                input_kwatt.value = energy_value / 3600;
                input_btu.value = energy_value / 1.055;
                input_ust.value = energy_value / 105480;
                input_ftp.value = energy_value * 738;
                break;
            case "cal":
                input_jol.value = energy_value * 4.184;
                input_kjol.value = energy_value / 239;
                input_kcal.value = energy_value / 1000;
                input_watt.value = energy_value / 860;
                input_kwatt.value = energy_value / 860421;
                input_btu.value = energy_value / 252;
                input_ust.value = energy_value / 25210000;
                input_ftp.value = energy_value * 3.086;
                break;
            case "kcal":
                input_jol.value = energy_value * 4184;
                input_kjol.value = energy_value * 4.184;
                input_cal.value = energy_value * 1000;
                input_watt.value = energy_value * 1.162;
                input_kwatt.value = energy_value / 860;
                input_btu.value = energy_value * 3.966;
                input_ust.value = energy_value / 25210;
                input_ftp.value = energy_value * 3086;
                break;
            case "watth":
                input_jol.value = energy_value * 3600;
                input_kjol.value = energy_value * 3.6;
                input_cal.value = energy_value * 860;
                input_kcal.value = energy_value / 1.162;
                input_kwatt.value = energy_value / 1000;
                input_btu.value = energy_value * 3.412;
                input_ust.value = energy_value / 29300;
                input_ftp.value = energy_value * 2655;
                break;
            case "kwatth":
                input_jol.value = energy_value * 3600000;
                input_kjol.value = energy_value * 3600;
                input_cal.value = energy_value * 860421;
                input_kcal.value = energy_value / 860;
                input_watt.value = energy_value * 1000;
                input_btu.value = energy_value * 3412;
                input_ust.value = energy_value / 29.3;
                input_ftp.value = energy_value * 2655000;
                break;
            case "btu":
                input_jol.value = energy_value * 1055;
                input_kjol.value = energy_value * 1.055;
                input_cal.value = energy_value * 252;
                input_kcal.value = energy_value / 3.966;
                input_watt.value = energy_value / 3.412;
                input_kwatt.value = energy_value / 3412;
                input_ust.value = energy_value / 99976;
                input_ftp.value = energy_value * 778;
                break;
            case "ust":
                input_jol.value = energy_value * 105500000;
                input_kjol.value = energy_value * 105480;
                input_cal.value = energy_value * 25210000;
                input_kcal.value = energy_value * 25210;
                input_watt.value = energy_value * 29300;
                input_kwatt.value = energy_value * 29.3;
                input_btu.value = energy_value * 99976;
                input_ftp.value = energy_value * 77800000;
                break;
            case "ftp":
                input_jol.value = energy_value * 1.356;
                input_kjol.value = energy_value / 738;
                input_cal.value = energy_value / 3.086;
                input_kcal.value = energy_value / 3086;
                input_watt.value = energy_value / 2655;
                input_kwatt.value = energy_value / 2655000;
                input_btu.value = energy_value / 778;
                input_ust.value = energy_value / 77800000;
                break;
        }
    })
}