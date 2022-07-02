const input_ton = document.getElementById("ton");
const input_kg = document.getElementById("kg");
const input_gram = document.getElementById("gram");
const input_mg = document.getElementById("mg");
const input_micg = document.getElementById("micg");
const input_lton = document.getElementById("lton");
const input_ston = document.getElementById("ston");
const input_stone = document.getElementById("stone");
const input_lb = document.getElementById("pound");
const input_oz = document.getElementById("ounce");
const input_mass = document.getElementsByClassName("mass-input");

for(let i = 0; i<input_mass.length; i++){
    let mass_input = input_mass[i];
    mass_input.addEventListener("input",function(e){
        let mass_value = parseFloat(e.target.value);
        switch(e.target.name){
            case "ton":
                input_kg.value = mass_value * 1000;
                input_gram.value = mass_value * 1000000;
                input_mg.value = mass_value * 1000000000;
                input_micg.value = mass_value * 1000000000000;
                input_lton.value = mass_value / 1.016;
                input_ston.value = mass_value * 1.102;
                input_stone.value = mass_value * 157;
                input_lb.value = mass_value * 2205;
                input_oz.value = mass_value * 35274;
                break;
            case "kg":
                input_ton.value = mass_value / 1000;
                input_gram.value = mass_value * 1000;
                input_mg.value = mass_value * 1000000;
                input_micg.value = mass_value * 1000000000;
                input_lton.value = mass_value / 1016;
                input_ston.value = mass_value / 907;
                input_stone.value = mass_value / 6.35;
                input_lb.value = mass_value * 2.205;
                input_oz.value = mass_value * 35.274;
                break;
            case "gram":
                input_ton.value = mass_value / 1000000;
                input_kg.value = mass_value / 1000;
                input_mg.value = mass_value * 1000;
                input_micg.value = mass_value * 1000000;
                input_lton.value = mass_value / 1016000;
                input_ston.value = mass_value / 907185;
                input_stone.value = mass_value / 6350;
                input_lb.value = mass_value / 454;
                input_oz.value = mass_value / 28.35;
                break;
            case "mg":
                input_ton.value = mass_value / 1000000000;
                input_kg.value = mass_value / 1000000;
                input_gram.value = mass_value / 1000;
                input_micg.value = mass_value * 1000;
                input_lton.value = mass_value / 1016000000;
                input_ston.value = mass_value / 907200000;
                input_stone.value = mass_value / 6350000;
                input_lb.value = mass_value / 453592;
                input_oz.value = mass_value / 28350;
                break;
            case "micg":
                input_ton.value = mass_value / 1000000000000;
                input_kg.value = mass_value / 1000000000;
                input_gram.value = mass_value / 1000000;
                input_mg.value = mass_value / 1000;
                input_lton.value = mass_value / 1016000000000;
                input_ston.value = mass_value / 907200000000;
                input_stone.value = mass_value / 6350000000;
                input_lb.value = mass_value / 453600000;
                input_oz.value = mass_value / 28350000;
                break;
            case "lton":
                input_ton.value = mass_value * 1.016;
                input_kg.value = mass_value * 1016;
                input_gram.value = mass_value * 1016000;
                input_mg.value = mass_value * 1016000000;
                input_micg.value = mass_value * 1016000000000;
                input_ston.value = mass_value * 1.12;
                input_stone.value = mass_value * 160;
                input_lb.value = mass_value * 2240;
                input_oz.value = mass_value * 35840;
                break;
            case "ston":
                input_ton.value = mass_value / 1.102;
                input_kg.value = mass_value * 907;
                input_gram.value = mass_value * 907185;
                input_mg.value = mass_value * 907200000;
                input_micg.value = mass_value * 907200000000;
                input_lton.value = mass_value / 1.12;
                input_stone.value = mass_value * 143;
                input_lb.value = mass_value * 2000;
                input_oz.value = mass_value * 32000;
                break;
            case "stone":
                input_ton.value = mass_value / 157;
                input_kg.value = mass_value * 6.35;
                input_gram.value = mass_value * 6350;
                input_mg.value = mass_value * 6350000;
                input_micg.value = mass_value * 6350000000;
                input_lton.value = mass_value / 160;
                input_ston.value = mass_value / 143;
                input_lb.value = mass_value * 14;
                input_oz.value = mass_value * 224;
                break;
            case "pound":
                input_ton.value = mass_value / 2205;
                input_kg.value = mass_value / 2.205;
                input_gram.value = mass_value * 454;
                input_mg.value = mass_value * 453592;
                input_micg.value = mass_value * 453600000;
                input_lton.value = mass_value / 2240;
                input_ston.value = mass_value / 2000;
                input_stone.value = mass_value / 14;
                input_oz.value = mass_value * 16;
                break;
            case "ounce":
                input_ton.value = mass_value / 35274;
                input_kg.value = mass_value / 35.274;
                input_gram.value = mass_value * 28.35;
                input_mg.value = mass_value * 28350;
                input_micg.value = mass_value * 28350000;
                input_lton.value = mass_value / 35840;
                input_ston.value = mass_value / 32000;
                input_stone.value = mass_value / 224;
                input_lb.value = mass_value / 16;
                break;
        }
    })
}