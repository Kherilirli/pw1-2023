function hitungLuasDanKeliling() {
    var jariJari = parseFloat(document.getElementById('jariJari').value);

    // Luas lingkaran
    var luas = Math.PI * Math.pow(jariJari, 2);

    // Keliling lingkaran
    var keliling = 2 * Math.PI * jariJari;

    document.getElementById('hasilLuas').innerHTML = 'Luas Lingkaran: ' + luas.toFixed(0);
    document.getElementById('hasilKeliling').innerHTML = 'Keliling Lingkaran: ' + keliling.toFixed(0);
}