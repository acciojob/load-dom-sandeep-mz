describe("DOM Test", () => {
  it("Should check for absence of script element in body", () => {
    // Visit the web page you want to test
    cy.visit("http://localhost:3000"); // Replace with your actual URL

    // Wait for the DOM to be fully loaded
    cy.document().should("have.property", "readyState").should("equal", "complete");

    // Check if there are no script elements within the body
    cy.get("body").find("script").should("not.exist");
  });
});
