const input_c = document.getElementById("celcius");
const input_r = document.getElementById("reaumur");
const input_f = document.getElementById("fahrenheit");
const input_k = document.getElementById("kelvin");
const input_temp = document.getElementsByClassName("temp-input");

for(let i = 0; i<input_temp.length; i++){
  let temp_input = input_temp[i];
  temp_input.addEventListener("input", function(e){
    let temp_value = parseFloat(e.target.value);
    switch(e.target.name){
      case "celcius":
        input_r.value = temp_value * (4/5);
        input_f.value = temp_value * (9/5) + 32;
        input_k.value = temp_value + 273.15;
        break;
      case "reaumur":
        input_c.value = temp_value * (5/4);
        input_f.value = temp_value * (9/4) + 32;
        input_k.value = temp_value * (5/4) + 273.15;
        break;
      case "fahrenheit":
        input_c.value = (temp_value - 32) * (5/9);
        input_r.value = (temp_value - 32) * (4/9);
        input_k.value = (temp_value + 459.67) * (5/9);
        break;
     case "kelvin":
        input_c.value = temp_value - 273.15;
        input_r.value = (temp_value - 273.15) * (4/5);
        input_f.value = temp_value * (9/5) - 459.67;
        break;
      }
  });
}