import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("step1", () => {
  cy.visit("/");
});

When("step2", () => {
  cy.reload();
});

Then("step3", () => {
  cy.scrollTo(0, 200);
});
