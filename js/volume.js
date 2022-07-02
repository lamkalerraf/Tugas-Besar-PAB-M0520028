const input_m3 = document.getElementById("m3");
const input_liter = document.getElementById("liter");
const input_ml = document.getElementById("ml");
const input_ft3 = document.getElementById("ft3");
const input_in3 = document.getElementById("in3");
const input_usgal = document.getElementById("usgal");
const input_ukgal = document.getElementById("ukgal");
const input_usfo = document.getElementById("usfo");
const input_ukfo = document.getElementById("ukfo");
const input_volume = document.getElementsByClassName("volume-input");

for(let i = 0; i<input_volume.length; i++){
    let volume_input = input_volume[i];
    volume_input.addEventListener("input",function(e){
        let volume_value = parseFloat(e.target.value);
        switch(e.target.name){
            case "m3":
                input_liter.value = volume_value * 1000;
                input_ml.value = volume_value * 1000000;
                input_ft3.value = volume_value * 35.315;
                input_in3.value = volume_value * 61024;
                input_usgal.value = volume_value * 264;
                input_ukgal.value = volume_value * 220;
                input_usfo.value = volume_value * 33814;
                input_ukfo.value = volume_value * 35195;
                break;
            case "liter":
                input_m3.value = volume_value / 1000;
                input_ml.value = volume_value * 1000;
                input_ft3.value = volume_value / 28.317;
                input_in3.value = volume_value * 61.024;
                input_usgal.value = volume_value / 3.785;
                input_ukgal.value = volume_value / 4.546;
                input_usfo.value = volume_value * 33.814;
                input_ukfo.value = volume_value * 35.195;
                break;
            case "ml":
                input_m3.value = volume_value / 1000000;
                input_liter.value = volume_value / 1000;
                input_ft3.value = volume_value / 28317;
                input_in3.value = volume_value / 16.387;
                input_usgal.value = volume_value / 3785;
                input_ukgal.value = volume_value / 4546;
                input_usfo.value = volume_value / 29.574;
                input_ukfo.value = volume_value / 28.413;
                break;
            case "ft3":
                input_m3.value = volume_value / 35.315;
                input_liter.value = volume_value * 28.317;
                input_ml.value = volume_value * 28317;
                input_in3.value = volume_value * 1728;
                input_usgal.value = volume_value * 7.481;
                input_ukgal.value = volume_value * 6.229;
                input_usfo.value = volume_value * 958;
                input_ukfo.value = volume_value * 997;
                break;
            case "in3":
                input_m3.value = volume_value / 61024;
                input_liter.value = volume_value / 61.024;
                input_ml.value = volume_value * 16.387;
                input_ft3.value = volume_value / 1728;
                input_usgal.value = volume_value / 231;
                input_ukgal.value = volume_value / 277;
                input_usfo.value = volume_value / 1.805;
                input_ukfo.value = volume_value / 1.734;
                break;
            case "usgal":
                input_m3.value = volume_value / 264;
                input_liter.value = volume_value * 3.785;
                input_ml.value = volume_value * 3785;
                input_ft3.value = volume_value / 7.481;
                input_in3.value = volume_value * 231;
                input_ukgal.value = volume_value / 1.201;
                input_usfo.value = volume_value * 128;
                input_ukfo.value = volume_value * 133;
                break;
            case "ukgal":
                input_m3.value = volume_value / 220;
                input_liter.value = volume_value * 4.546;
                input_ml.value = volume_value * 4546;
                input_ft3.value = volume_value / 6.229;
                input_in3.value = volume_value * 277;
                input_usgal.value = volume_value * 1.201;
                input_usfo.value = volume_value * 154;
                input_ukfo.value = volume_value * 160;
                break;
            case "usfo":
                input_m3.value = volume_value / 33814;
                input_liter.value = volume_value / 33.814;
                input_ml.value = volume_value * 29.574;
                input_ft3.value = volume_value / 958;
                input_in3.value = volume_value * 1.805;
                input_usgal.value = volume_value / 128;
                input_ukgal.value = volume_value / 154;
                input_ukfo.value = volume_value * 1.041;
                break;
            case "ukfo":
                input_m3.value = volume_value / 35195;
                input_liter.value = volume_value / 35.195;
                input_ml.value = volume_value * 28.413;
                input_ft3.value = volume_value / 997;
                input_in3.value = volume_value * 1.734;
                input_usgal.value = volume_value / 133;
                input_ukgal.value = volume_value / 160;
                input_usfo.value = volume_value / 1.041;
                break;
        }
    })
}