import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("open the url", () => {
  cy.visit("https://the-internet.herokuapp.com/");
});
When("click on the pratice section", () => {
  cy.get("[href='/dropdown']").click();
});
Then(
  "on opening the openbox Automation application check the main heading",
  () => {
    cy.get("[class='example']")
      .children()
      .contains("Dropdown List")
      .contains("Dropdown List");
  }
);

When("check the drop down heading should be Static Dropdown Example", () => {
  cy.visit("https://the-internet.herokuapp.com/dropdown");
  cy.get("[id='dropdown']")
    .children()
    .eq(0)
    .should("have.contain", "Please select an option");
});

Then("try to select the drop down value as {string}", (inputData) => {
  cy.get("[id='dropdown']").select(inputData);
});

Then("Verify if the drop is selected as {string}", (Data) => {
  cy.get("[id='dropdown']").should("have.contain", Data);
});
