const generateQuoteBtn = document.getElementById('generate-quote');
const noOfQuotes = document.getElementById('no-of-quote');
const error = document.getElementById('error');
const quotesDiv = document.querySelector('.quotes');

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateQuote = async () => {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const object = await response.json();
    if (object.length < noOfQuotes.value) {
      quotesDiv.innerHTML = '';
      error.innerHTML = 'Please enter a valid number';
      return;
    }
    if (noOfQuotes.value > 0) {
      const randomStartIndex = randomNumber(
        0,
        object.length - noOfQuotes.value
      );
      const quotes = object.slice(
        randomStartIndex,
        randomStartIndex + Number(noOfQuotes.value)
      );
      let output = '';
      quotes.forEach((quote) => {
        output += `
        <div class="quote">
          <p>${quote.text}</p>
          <p class="author">-${quote.author}</p>
        </div>
      `;
      });
      quotesDiv.innerHTML = output;
      error.innerHTML = '';
    } else {
      quotesDiv.innerHTML = '';
      error.innerHTML = 'Please enter a valid number';
      return;
    }
  } catch (error) {
    quotesDiv.innerHTML = '';
    error.innerHTML = error.message || 'Something went wrong';
  }
};

generateQuoteBtn.addEventListener('click', generateQuote);
