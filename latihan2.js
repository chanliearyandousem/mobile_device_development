export let perhitunganBMI = (tinggi, berat) => {
    let hasil = berat/(tinggi*tinggi) ; 
        if (hasil>=30) {
            console.log(`Hasil BMI Anda adalah ${hasil}`);
            console.log(`Anda termasuk dalam kategori Obesitas`);
        } else if (hasil >=25 && hasil <= 29.9) {
            console.log(`Hasil BMI Anda adalah ${hasil}`);
            console.log(`Anda termasuk dalam katergori kelebihan berat badan`);
        } else if(hasil >= 18.5 && hasil <=24.9) {
            console.log(`Hasil BMI Anda adalah ${hasil}`);
            console.log(`Anda termasuk dalam kategori berat badan ideal`)
        } else if(hasil <=18){
            console.log(`Hasil BMI Anda adalah ${hasil}`);
            console.log(`Anda memiliki berar badan dibawah normal`)
        }
    
};