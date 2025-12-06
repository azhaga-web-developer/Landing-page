// Fetch inspirational quotes using AllOrigins proxy
async function fetchQuote() {
  try {
    // Use proxy to bypass CORS
    const response = await fetch("https://api.allorigins.win/raw?url=https://type.fit/api/quotes");
    const data = await response.json();

    // Pick a random quote
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

    const quoteElement = document.getElementById("quote");
    quoteElement.style.opacity = 0;
    setTimeout(() => {
      quoteElement.textContent = `"${randomQuote.text}" — ${randomQuote.author || "Unknown"}`;
      quoteElement.style.opacity = 1;
    }, 300);
  } catch (error) {
    console.error(error);

    // Fallback quotes if API fails
    const localQuotes = [
      { text: "Hope is stronger than fear.", author: "Anonymous" },
      { text: "Awareness is the first step to change.", author: "Unknown" },
      { text: "Together we can make a difference.", author: "Community" }
    ];

    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    const randomQuote = localQuotes[randomIndex];
    document.getElementById("quote").textContent =
      `"${randomQuote.text}" — ${randomQuote.author}`;
  }
}

// Load first quote
fetchQuote();

// Auto-refresh every 30 seconds
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