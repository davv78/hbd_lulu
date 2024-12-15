window.onload = function() {
  // Menyembunyikan modal alert saat halaman pertama kali dimuat
  document.getElementById("alert-container").style.display = "none";
};

let currentPage = 1;

function nextPage() {
  document.getElementById(`page-${currentPage}`).style.display = "none";
  currentPage++;
  document.getElementById(`page-${currentPage}`).style.display = "block";
}



function redirectToFlower() {
  window.location.href = 'bunga.html'; // Ganti 'halaman-bunga.html' dengan URL halaman bunga Anda
}

