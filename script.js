const quoteCard = document.getElementById('quoteCard');
const errorDisplay = document.getElementById('error');
const getQuoteBtn = document.getElementById('getQuoteBtn');

function fetchQuote() {
  quoteCard.innerHTML = '';
  errorDisplay.textContent = '';

  fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(data => {
      quoteCard.innerHTML = `
        <blockquote>"${data.fact}"</blockquote>
      `;
    })
    .catch(err => {
      errorDisplay.textContent = err.message;
    });
}
fetchQuote();
getQuoteBtn.addEventListener('click', fetchQuote);
