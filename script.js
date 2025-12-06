async function fetchQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

    const quoteElement = document.getElementById("quote");
    quoteElement.style.opacity = 0;
    setTimeout(() => {
      quoteElement.textContent = `"${randomQuote.text}" — ${randomQuote.author || "Unknown"}`;
      quoteElement.style.opacity = 1;
    }, 300);
  } catch (error) {
    document.getElementById("quote").textContent = "Could not load quote.";
    console.error(error);
  }
}

fetchQuote();
setInterval(fetchQuote, 30000);

// Form validation
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent actual submission

  const name = document.querySelector("input[type='text']").value.trim();
  const email = document.querySelector("input[type='email']").value.trim();
  const message = document.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
});