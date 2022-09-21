const nama = document.getElementById("name");
const ttl = document.getElementById("ttl");
const utusan = document.getElementById("utusan");
const kelurahan = document.getElementById("kelurahan");
const kecamatan = document.getElementById("kecamatan");
const telepon = document.getElementById("telepon")
const form = document.getElementById("form")
const lomba = document.getElementsByName("lomba")

form.addEventListener("submit",function(){
    // for (var i = 0, length = lomba.length; i < length; i++) {
    //     if (lomba[i].checked) {
    //       alert(lomba[i].value);
    //       break;
    //     }
    //   }
    if(nama.value != null && utusan.value != null && kelurahan.value != null && kecamatan.value != null && telepon.value != null ){
        window.alert("berhasil submit")
    }else{ window.alert("periksa lagi")}
   
})

