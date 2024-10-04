/// <reference types="cypress" />
describe("A11y fails", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.injectAxe();
  });

  it("does pass accessibility check", () => {
    cy.checkA11y();
  });
});
