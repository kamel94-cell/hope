// Tutaj możesz dodać interaktywne funkcje, np. obsługę formularza losowania.
document.querySelector('.lottery-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const walletAddress = e.target.querySelector('input').value;
    alert(`Dziękujemy za zgłoszenie! Twój adres portfela: ${walletAddress}`);
});