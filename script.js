function onDOMLoad() {
  // Check if the body tag has any children
  if (document.body.childElementCount === 0) {
    // Create a new paragraph element
    var paragraph = document.createElement("p");

    // Set the text content of the paragraph
    paragraph.textContent = "DOM load success";

    // Append the paragraph to the body of the document
    document.body.appendChild(paragraph);
  }
}

// Attach the onDOMLoad function to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMLoad);
