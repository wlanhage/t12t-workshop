import AppAppBar from "../../src/components/AppAppBar";

describe("<AppAppBar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AppAppBar />);
  });
});
