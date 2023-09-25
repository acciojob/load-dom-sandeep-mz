//your JS code here. If required.
 // document.addEventListener("DOMContentLoaded", ()=> {
 //            document.write = "<h2>DOM load success</h2>"
 //    });


 // Function to execute when the DOM is loaded
        function onDOMLoad() {
            // Create a new paragraph element
            var paragraph = document.createElement("p");
            
            // Set the text content of the paragraph
            paragraph.textContent = "DOM load success";
            
            // Append the paragraph to the body of the document
            document.body.appendChild(paragraph);
        }

        // Attach the onDOMLoad function to the DOMContentLoaded event
        document.addEventListener("DOMContentLoaded", onDOMLoad);
