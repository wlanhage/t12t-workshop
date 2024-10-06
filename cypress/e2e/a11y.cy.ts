/// <reference types="cypress" />

// Define at the top of the spec file or just import it
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}

describe("A11y fails", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/automated/integration");
    cy.injectAxe();
  });

  it("does pass accessibility check", () => {
    cy.checkA11y(undefined, undefined, terminalLog);
  });
});
