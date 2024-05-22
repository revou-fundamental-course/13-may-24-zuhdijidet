document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello World!');
});

function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Masukkan nilai alas dan tinggi yang valid!');
        return;
    }

    const area = 0.5 * base * height;
    document.getElementById('result').textContent = `Luas Segitiga: ${area}`;
}

function calculateKeliling() {
    const sisi = parseFloat(document.getElementById('sisi').value);

    if (isNaN(sisi)|| sisi <= 0) {
        alert('Masukkan nilai sisi yang valid!');
        return;
    }

    const keliling = sisi + sisi + sisi;
    document.getElementById('hasil').textContent = `Keliling Segitiga: ${keliling}`;
}
