/* tambah bab dan muat */
function muatTXT(namaFile, idContainer) {
  fetch(namaFile)
    .then(response => {
      if (!response.ok) throw new Error("File tidak ditemukan");
      return response.text();
    })
    .then(teks => {
      document.getElementById(idContainer).innerText = teks;
    })
    .catch(error => console.log(error));
}

muatTXT("bab1.txt", "bab-1-container");
muatTXT("bab2.txt", "bab-2-container");
muatTXT("bab3.txt", "bab-3-container");





<!-- Fungsi untuk mencari teks di semua kontainer bab, pencarian kalimat tak bekerja --> 
     
function cariTeks() {
  // Ambil kata kunci dari input
  const kataKunci = document.getElementById("search-input").value.toLowerCase().trim();
  // Ambil semua kontainer bab (sesuaikan dengan id yang kamu gunakan)
  const kontainerBab = document.querySelectorAll("#bab-1-container, #bab-2-container");

  // Kalo tidak ada kata kunci, tampilkan semua teks dan keluar
  if (kataKunci === "") {
    kontainerBab.forEach(kontainer => {
      kontainer.innerHTML = kontainer.dataset.teksAsli; // Kembalikan teks asli
    });
    return;
  }

  // Cari dan soroti kata kunci di setiap kontainer
  kontainerBab.forEach(kontainer => {
    const teksAsli = kontainer.dataset.teksAsli || kontainer.innerText; // Simpan teks asli sekali saja
    kontainer.dataset.teksAsli = teksAsli; // Simpan ke atribut data untuk nanti

    // Ganti kata kunci dengan teks yang disoroti (pakai <mark> biar terlihat beda)
    const teksDenganSorotan = teksAsli.replace(
      new RegExp(`(${kataKunci})`, "gi"), // "gi" = global (semua kemunculan) & case-insensitive
      "<mark>$1</mark>"
    );

    // Tampilkan teks yang sudah disoroti
    kontainer.innerHTML = teksDenganSorotan;
  });
}



// Tambah fitur search dengan tombol enter (opsional tapi praktis)

/*
document.getElementById("search-input").addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
     cariTeks();
   }
 });
 
 */