const input_bits = document.getElementById("bits");
const input_kbits = document.getElementById("kbits");
const input_mbits = document.getElementById("mbits");
const input_gbits = document.getElementById("gbits");
const input_tbits = document.getElementById("tbits");
const input_bytes = document.getElementById("bytes");
const input_kbytes = document.getElementById("kbytes");
const input_mbytes = document.getElementById("mbytes");
const input_gbytes = document.getElementById("gbytes");
const input_tbytes = document.getElementById("tbytes");
const input_data = document.getElementsByClassName("data-input");

for(let i = 0; i<input_data.length; i++){
  let data_input = input_data[i];
  data_input.addEventListener("input", function(e){
    let data_value = parseFloat(e.target.value);
    switch(e.target.name){
      case "bits":
        input_kbits.value = data_value / 1000;
        input_mbits.value = data_value / 1000000;
        input_gbits.value = data_value / 1000000000;
        input_tbits.value = data_value / 1000000000000;
        input_bytes.value = data_value / 8;
        input_kbytes.value = data_value / 8000;
        input_mbytes.value = data_value / 8000000;
        input_gbytes.value = data_value / 8000000000;
        input_tbytes.value = data_value / 8000000000000;
        break;
      case "kbits":
        input_bits.value = data_value * 1000;
        input_mbits.value = data_value / 1000;
        input_gbits.value = data_value / 1000000;
        input_tbits.value = data_value / 1000000000;
        input_bytes.value = data_value * 125;
        input_kbytes.value = data_value / 8;
        input_mbytes.value = data_value / 8000;
        input_gbytes.value = data_value / 8000000;
        input_tbytes.value = data_value / 8000000000;
        break;
      case "mbits":
        input_bits.value = data_value * 1000000;
        input_kbits.value = data_value * 1000;
        input_gbits.value = data_value / 1000;
        input_tbits.value = data_value / 1000000;
        input_bytes.value = data_value * 125000;
        input_kbytes.value = data_value * 125;
        input_mbytes.value = data_value / 8;
        input_gbytes.value = data_value / 8000;
        input_tbytes.value = data_value / 8000000;
        break;
      case "gbits":
        input_bits.value = data_value * 1000000000;
        input_kbits.value = data_value * 1000000;
        input_mbits.value = data_value * 1000;
        input_tbits.value = data_value / 1000;
        input_bytes.value = data_value * 125000000;
        input_kbytes.value = data_value * 125000;
        input_mbytes.value = data_value * 125;
        input_gbytes.value = data_value / 8;
        input_tbytes.value = data_value / 8000;
        break;
      case "tbits":
        input_bits.value = data_value * 1000000000000;
        input_kbits.value = data_value * 1000000000;
        input_mbits.value = data_value * 1000000;
        input_gbits.value = data_value * 1000;
        input_bytes.value = data_value * 125000000000;
        input_kbytes.value = data_value * 125000000;
        input_mbytes.value = data_value * 125000;
        input_gbytes.value = data_value * 125;
        input_tbytes.value = data_value / 8;
        break;
      case "bytes":
        input_bits.value = data_value * 8;
        input_kbits.value = data_value / 125;
        input_mbits.value = data_value / 125000;
        input_gbits.value = data_value / 125000000;
        input_tbits.value = data_value / 125000000000;
        input_kbytes.value = data_value / 1000;
        input_mbytes.value = data_value / 1000000;
        input_gbytes.value = data_value / 1000000000;
        input_tbytes.value = data_value / 1000000000000;
        break;
      case "kbytes":
        input_bits.value = data_value * 8000;
        input_kbits.value = data_value * 8;
        input_mbits.value = data_value / 125;
        input_gbits.value = data_value / 125000;
        input_tbits.value = data_value / 125000000;
        input_bytes.value = data_value * 1000;
        input_mbytes.value = data_value / 1000;
        input_gbytes.value = data_value / 1000000;
        input_tbytes.value = data_value / 1000000000;
        break;
      case "mbytes":
        input_bits.value = data_value * 8000000;
        input_kbits.value = data_value * 8000;
        input_mbits.value = data_value * 8;
        input_gbits.value = data_value / 125;
        input_tbits.value = data_value / 125000;
        input_bytes.value = data_value * 1000000;
        input_kbytes.value = data_value * 1000;
        input_gbytes.value = data_value / 1000;
        input_tbytes.value = data_value / 1000000;
        break;
      case "gbytes":
        input_bits.value = data_value * 8000000000;
        input_kbits.value = data_value * 8000000;
        input_mbits.value = data_value * 8000;
        input_gbits.value = data_value * 8;
        input_tbits.value = data_value / 125;
        input_bytes.value = data_value * 1000000000;
        input_kbytes.value = data_value * 1000000;
        input_mbytes.value = data_value * 1000;
        input_tbytes.value = data_value / 1000;
        break;
      case "tbytes":
        input_bits.value = data_value * 8000000000000;
        input_kbits.value = data_value * 8000000000;
        input_mbits.value = data_value * 8000000;
        input_gbits.value = data_value * 8000;
        input_tbits.value = data_value * 8;
        input_bytes.value = data_value * 1000000000000;
        input_kbytes.value = data_value * 1000000000;
        input_mbytes.value = data_value * 1000000;
        input_gbytes.value = data_value * 1000;
        break;
    }
  });
}