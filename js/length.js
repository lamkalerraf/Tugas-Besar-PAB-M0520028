const input_km = document.getElementById("km");
const input_m = document.getElementById("meter");
const input_cm = document.getElementById("cm");
const input_mm = document.getElementById("mm");
const input_micm = document.getElementById("micm");
const input_nm = document.getElementById("nm");
const input_mi = document.getElementById("mi");
const input_yd = document.getElementById("yd");
const input_ft = document.getElementById("ft");
const input_in = document.getElementById("in");
const input_nmi = document.getElementById("nmi");
const input_length = document.getElementsByClassName("length-input");

for(let i = 0; i<input_length.length; i++){
    let length_input = input_length[i];
    length_input.addEventListener("input",function(e){
        let length_value = parseFloat(e.target.value);
        switch(e.target.name){
            case "km":
                input_m.value = length_value * 1000;
                input_cm.value = length_value * 100000;
                input_mm.value = length_value * 1000000;
                input_micm.value = length_value * 1000000000;
                input_nm.value = length_value * 1000000000000;
                input_mi.value = length_value / 1.609;
                input_yd.value = length_value * 1094;
                input_ft.value = length_value * 3281;
                input_in.value = length_value * 39370;
                input_nmi.value = length_value / 1.852;
                break;
            case "meter":
                input_km.value = length_value / 1000;
                input_cm.value = length_value * 100;
                input_mm.value = length_value * 1000;
                input_micm.value = length_value * 1000000;
                input_nm.value = length_value * 1000000000;
                input_mi.value = length_value / 1609;
                input_yd.value = length_value * 1.094;
                input_ft.value = length_value * 3.281;
                input_in.value = length_value * 39.37;
                input_nmi.value = length_value / 1852;
                break;
            case "cm":
                input_km.value = length_value / 100000;
                input_m.value = length_value / 100;
                input_mm.value = length_value * 10;
                input_micm.value = length_value * 10000;
                input_nm.value = length_value * 10000000;
                input_mi.value = length_value / 160934;
                input_yd.value = length_value / 91.44;
                input_ft.value = length_value / 30.48;
                input_in.value = length_value / 2.54;
                input_nmi.value = length_value / 185200;
                break;
            case "mm":
                input_km.value = length_value / 1000000;
                input_m.value = length_value / 1000;
                input_cm.value = length_value / 10;
                input_micm.value = length_value * 1000;
                input_nm.value = length_value * 1000000;
                input_mi.value = length_value / 1609000;
                input_yd.value = length_value / 914;
                input_ft.value = length_value / 305;
                input_in.value = length_value / 25.4;
                input_nmi.value = length_value / 1852000;
                break;
            case "micm":
                input_km.value = length_value / 1000000000;
                input_m.value = length_value / 1000000;
                input_cm.value = length_value / 10000;
                input_mm.value = length_value / 1000;
                input_nm.value = length_value * 1000;
                input_mi.value = length_value / 1609000000;
                input_yd.value = length_value / 914400;
                input_ft.value = length_value / 304800;
                input_in.value = length_value / 25400;
                input_nmi.value = length_value / 1852000000;
                break;
            case "nm":
                input_km.value = length_value / 1000000000000;
                input_m.value = length_value / 1000000000;
                input_cm.value = length_value / 10000000;
                input_mm.value = length_value / 1000000;
                input_micm.value = length_value / 1000;
                input_mi.value = length_value / 1609000000000;
                input_yd.value = length_value / 914400000;
                input_ft.value = length_value / 304800000;
                input_in.value = length_value / 25400000;
                input_nmi.value = length_value / 1852000000000;
                break;
            case "mi":
                input_km.value = length_value * 1.609;
                input_m.value = length_value * 1609;
                input_cm.value = length_value * 160934;
                input_mm.value = length_value * 1609000;
                input_micm.value = length_value * 1609000000;
                input_nm.value = length_value * 1609000000000;
                input_yd.value = length_value * 1760;
                input_ft.value = length_value * 5280;
                input_in.value = length_value * 63360;
                input_nmi.value = length_value / 1.151;
                break;
            case "yd":
                input_km.value = length_value / 1094;
                input_m.value = length_value / 1.094;
                input_cm.value = length_value * 91.44;
                input_mm.value = length_value * 914;
                input_micm.value = length_value * 914400;
                input_nm.value = length_value * 914400000;
                input_mi.value = length_value / 1760;
                input_ft.value = length_value * 3;
                input_in.value = length_value * 36;
                input_nmi.value = length_value / 2025;
                break;
            case "ft":
                input_km.value = length_value / 3281;
                input_m.value = length_value / 3.281;
                input_cm.value = length_value * 30.48;
                input_mm.value = length_value * 305;
                input_micm.value = length_value * 304800;
                input_nm.value = length_value * 304800000;
                input_mi.value = length_value / 5280;
                input_yd.value = length_value / 3;
                input_in.value = length_value * 12;
                input_nmi.value = length_value / 6076;
                break;
            case "in":
                input_km.value = length_value / 39370;
                input_m.value = length_value / 39.37;
                input_cm.value = length_value * 2.54;
                input_mm.value = length_value * 25.4;
                input_micm.value = length_value * 25400;
                input_nm.value = length_value * 25400000;
                input_mi.value = length_value / 63360;
                input_yd.value = length_value / 36;
                input_ft.value = length_value / 12;
                input_nmi.value = length_value / 72913;
                break;
            case "nmi":
                input_km.value = length_value * 1.852;
                input_m.value = length_value * 1852;
                input_cm.value = length_value * 185200;
                input_mm.value = length_value * 1852000;
                input_micm.value = length_value * 1852000000;
                input_nm.value = length_value * 1852000000000;
                input_mi.value = length_value * 1.151;
                input_yd.value = length_value * 2025;
                input_ft.value = length_value * 6076;
                input_in.value = length_value * 72913;
                break;
        }
    })
}