const input_km2 = document.getElementById("km2");
const input_m2 = document.getElementById("m2");
const input_ha = document.getElementById("ha");
const input_mi2 = document.getElementById("mi2");
const input_ac = document.getElementById("ac");
const input_yd2 = document.getElementById("yd2");
const input_ft2 = document.getElementById("ft2");
const input_in2 = document.getElementById("in2");
const input_area = document.getElementsByClassName("area-input");

for(let i = 0; i<input_area.length; i++){
  let area_input = input_area[i];
  area_input.addEventListener("input", function(e){
    let area_value = parseFloat(e.target.value);
    switch(e.target.name){
      case "km2":
        input_m2.value = area_value * 1000000;
        input_ha.value = area_value * 100;
        input_mi2.value = area_value / 2.59;
        input_ac.value = area_value * 247;
        input_yd2.value = area_value * 1196000;
        input_ft2.value = area_value * 10760000;
        input_in2.value = area_value * 1550000000;
        break;
      case "m2":
        input_km2.value = area_value / 1000000;
        input_ha.value = area_value / 10000;
        input_mi2.value = area_value / 2590000;
        input_ac.value = area_value / 4047;
        input_yd2.value = area_value * 1.196;
        input_ft2.value = area_value * 10.764;
        input_in2.value = area_value * 1550;
        break;
      case "ha":
        input_km2.value = area_value / 100;
        input_m2.value = area_value * 10000;
        input_mi2.value = area_value / 259;
        input_ac.value = area_value * 2.471;
        input_yd2.value = area_value * 11960;
        input_ft2.value = area_value * 107639;
        input_in2.value = area_value * 15500000;
        break;
      case "mi2":
        input_km2.value = area_value * 2.59;
        input_m2.value = area_value * 2590000;
        input_ha.value = area_value * 259;
        input_ac.value = area_value * 640;
        input_yd2.value = area_value * 3098000;
        input_ft2.value = area_value * 27880000;
        input_in2.value = area_value * 4014000000;
        break;
      case "ac":
        input_km2.value = area_value / 247;
        input_m2.value = area_value * 4047;
        input_ha.value = area_value / 2.471;
        input_mi2.value = area_value / 640;
        input_yd2.value = area_value * 4840;
        input_ft2.value = area_value * 43560;
        input_in2.value = area_value * 6273000;
        break;
      case "yd2":
        input_km2.value = area_value / 1196000;
        input_m2.value = area_value / 1.196;
        input_ha.value = area_value / 11960;
        input_mi2.value = area_value / 3098000;
        input_ac.value = area_value / 4840;
        input_ft2.value = area_value * 9;
        input_in2.value = area_value * 1296;
        break;
      case "ft2":
        input_km2.value = area_value / 10760000;
        input_m2.value = area_value / 10.764;
        input_ha.value = area_value / 107639;
        input_mi2.value = area_value / 27880000;
        input_ac.value = area_value / 43560;
        input_yd2.value = area_value / 9;
        input_in2.value = area_value * 144;
        break;
      case "in2":
        input_km2.value = area_value / 1550000000;
        input_m2.value = area_value / 1550;
        input_ha.value = area_value / 15500000;
        input_mi2.value = area_value / 4014000000;
        input_ac.value = area_value / 6273000;
        input_yd2.value = area_value / 1296;
        input_ft2.value = area_value / 144;
        break;
    }
  });
}