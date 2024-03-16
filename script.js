fetch("https://poetrydb.org/author,linecount/Shakespeare;14/lines")
  .then((response) => response.json())
  .then((data) => {
    // Get a random quote from the response
    console.log(data);
    document.getElementById("loading").style.display = "none";
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    // Get the quote container
    const quoteContainer = document.getElementById("poem");
    // Set the quote content inside the paragraph element
    quoteContainer.textContent = randomQuote.lines;
  })
  .catch((error) => {
    console.error("Error fetching quote:", error);
  });

document.getElementById("loading").style.display = "block";
