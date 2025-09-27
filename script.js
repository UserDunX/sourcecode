document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit standar

    const url = document.getElementById('url-input').value;
    const sourceCodeElement = document.getElementById('source-code');

    // Tampilkan pesan loading
    sourceCodeElement.textContent = 'Sedang memuat kode sumber...';

    fetch('https://cors-anywhere.herokuapp.com/' + url) // Menggunakan CORS Anywhere
        .then(response => response.text())
        .then(data => {
            sourceCodeElement.textContent = data;
        })
        .catch(error => {
            sourceCodeElement.textContent = 'Terjadi kesalahan: ' + error;
        });
});
