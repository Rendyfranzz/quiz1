const nama = document.getElementById("name");
const ttl = document.getElementById("ttl");
const utusan = document.getElementById("utusan");
const kelurahan = document.getElementById("kelurahan");
const kecamatan = document.getElementById("kecamatan");
const telepon = document.getElementById("telepon")
const form = document.getElementById("form")

form.addEventListener("submit",function(){
    if(nama.value != null && utusan.value != null && kelurahan.value != null && kecamatan.value != null && telepon.value != null ){
        window.alert("berhasil submit")
    }
    window.alert("periksa lagi")
})
