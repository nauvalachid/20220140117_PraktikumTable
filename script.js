// Memilih elemen input pencarian, baris tabel, dan heading tabel
const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// Menambahkan event listener ke input pencarian untuk memicu fungsi pencarian
search.addEventListener('input', searchTable);

// Fungsi untuk melakukan pencarian pada tabel
function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(), // Mendapatkan teks dari setiap baris tabel dan mengonversinya ke huruf kecil
            search_data = search.value.toLowerCase(); // Mendapatkan teks pencarian dan mengonversinya ke huruf kecil

        // Menyembunyikan baris yang tidak cocok dengan pencarian dengan menambahkan atau menghapus kelas 'hide'
        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);

        // Menetapkan animasi penundaan untuk muncul/menyembunyikan baris
        row.style.setProperty('--delay', i / 25 + 's');
    })

    // Memberikan warna latar belakang yang berbeda untuk baris yang muncul setelah pencarian
    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}