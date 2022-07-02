const input_bit = document.getElementById("bit");
const input_kbit = document.getElementById("kbit");
const input_mbit = document.getElementById("mbit");
const input_gbit = document.getElementById("gbit");
const input_tbit = document.getElementById("tbit");
const input_byte = document.getElementById("byte");
const input_kbyte = document.getElementById("kbyte");
const input_mbyte = document.getElementById("mbyte");
const input_gbyte = document.getElementById("gbyte");
const input_tbyte = document.getElementById("tbyte");
const input_storage = document.getElementsByClassName("storage-input");

for(let i = 0; i<input_storage.length; i++){
  let storage_input = input_storage[i];
  storage_input.addEventListener("input", function(e){
    let storage_value = parseFloat(e.target.value);
    switch(e.target.name){
      case "bit":
        input_kbit.value = storage_value / 1000;
        input_mbit.value = storage_value / 1000000;
        input_gbit.value = storage_value / 1000000000;
        input_tbit.value = storage_value / 1000000000000;
        input_byte.value = storage_value / 8;
        input_kbyte.value = storage_value / 8000;
        input_mbyte.value = storage_value / 8000000;
        input_gbyte.value = storage_value / 8000000000;
        input_tbyte.value = storage_value / 8000000000000;
        break;
      case "kbit":
        input_bit.value = storage_value * 1000;
        input_mbit.value = storage_value / 1000;
        input_gbit.value = storage_value / 1000000;
        input_tbit.value = storage_value / 1000000000;
        input_byte.value = storage_value * 125;
        input_kbyte.value = storage_value / 8;
        input_mbyte.value = storage_value / 8000;
        input_gbyte.value = storage_value / 8000000;
        input_tbyte.value = storage_value / 8000000000;
        break;
      case "mbit":
        input_bit.value = storage_value * 1000000;
        input_kbit.value = storage_value * 1000;
        input_gbit.value = storage_value / 1000;
        input_tbit.value = storage_value / 1000000;
        input_byte.value = storage_value * 125000;
        input_kbyte.value = storage_value * 125;
        input_mbyte.value = storage_value / 8;
        input_gbyte.value = storage_value / 8000;
        input_tbyte.value = storage_value / 8000000;
        break;
      case "gbit":
        input_bit.value = storage_value * 1000000000;
        input_kbit.value = storage_value * 1000000;
        input_mbit.value = storage_value * 1000;
        input_tbit.value = storage_value / 1000;
        input_byte.value = storage_value * 125000000;
        input_kbyte.value = storage_value * 125000;
        input_mbyte.value = storage_value * 125;
        input_gbyte.value = storage_value / 8;
        input_tbyte.value = storage_value / 8000;
        break;
      case "tbit":
        input_bit.value = storage_value * 1000000000000;
        input_kbit.value = storage_value * 1000000000;
        input_mbit.value = storage_value * 1000000;
        input_gbit.value = storage_value * 1000;
        input_byte.value = storage_value * 125000000000;
        input_kbyte.value = storage_value * 125000000;
        input_mbyte.value = storage_value * 125000;
        input_gbyte.value = storage_value * 125;
        input_tbyte.value = storage_value / 8;
        break;
      case "byte":
        input_bit.value = storage_value * 8;
        input_kbit.value = storage_value / 125;
        input_mbit.value = storage_value / 125000;
        input_gbit.value = storage_value / 125000000;
        input_tbit.value = storage_value / 125000000000;
        input_kbyte.value = storage_value / 1000;
        input_mbyte.value = storage_value / 1000000;
        input_gbyte.value = storage_value / 1000000000;
        input_tbyte.value = storage_value / 1000000000000;
        break;
      case "kbyte":
        input_bit.value = storage_value * 8000;
        input_kbit.value = storage_value * 8;
        input_mbit.value = storage_value / 125;
        input_gbit.value = storage_value / 125000;
        input_tbit.value = storage_value / 125000000;
        input_byte.value = storage_value * 1000;
        input_mbyte.value = storage_value / 1000;
        input_gbyte.value = storage_value / 1000000;
        input_tbyte.value = storage_value / 1000000000;
        break;
      case "mbyte":
        input_bits.value = storage_value * 8000000;
        input_kbit.value = storage_value * 8000;
        input_mbit.value = storage_value * 8;
        input_gbit.value = storage_value / 125;
        input_tbit.value = storage_value / 125000;
        input_byte.value = storage_value * 1000000;
        input_kbyte.value = storage_value * 1000;
        input_gbyte.value = storage_value / 1000;
        input_tbyte.value = storage_value / 1000000;
        break;
      case "gbyte":
        input_bit.value = storage_value * 8000000000;
        input_kbit.value = storage_value * 8000000;
        input_mbit.value = storage_value * 8000;
        input_gbit.value = storage_value * 8;
        input_tbit.value = storage_value / 125;
        input_byte.value = storage_value * 1000000000;
        input_kbyte.value = storage_value * 1000000;
        input_mbyte.value = storage_value * 1000;
        input_tbyte.value = storage_value / 1000;
        break;
      case "tbyte":
        input_bit.value = storage_value * 8000000000000;
        input_kbit.value = storage_value * 8000000000;
        input_mbit.value = storage_value * 8000000;
        input_gbit.value = storage_value * 8000;
        input_tbit.value = storage_value * 8;
        input_byte.value = storage_value * 1000000000000;
        input_kbyte.value = storage_value * 1000000000;
        input_mbyte.value = storage_value * 1000000;
        input_gbyte.value = storage_value * 1000;
        break;
    }
  });
}