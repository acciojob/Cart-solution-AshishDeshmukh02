/// <reference types="cypress"/>

describe("#testcase-1 : render-component-solution-test", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  it("rendering correctly", () => {
    cy.get("#main").should("exist");
  });

  it("Contains a navbar", () => {
    cy.get("nav").should("exist");
  });

  it("Have the text useReducer", () => {
    cy.get("nav").contains("useReducer");
  });
});

describe("#testcase-2 : Checking Cart", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  it("Clear Cart is working", () => {
    cy.get("#cart-items-list").should("exist");
    cy.get("#clear-all-cart").click();
    cy.get("#cart-items-list").should("not.exist");
    cy.get("#nav-cart-item-count").should("have.text", 0);
  });
});

describe("#testcase-3 : test for buttons", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  it("Increment and decrement is working", () => {
    cy.get("#nav-cart-item-count").should("have.text", 3);

    cy.get("#cart-amount-1").should("have.text", 1);
    cy.get("#increment-btn-1").click().click();
    cy.get("#cart-amount-1").should("have.text", 3);
    cy.get("#decrement-btn-1").click();
    cy.get("#cart-amount-1").should("have.text", 2);

    cy.get("#nav-cart-item-count").should("have.text", 4);

    cy.get("#cart-amount-2").should("have.text", 1);
    cy.get("#increment-btn-2").click().click().click().click();
    cy.get("#cart-amount-2").should("have.text", 5);
    cy.get("#decrement-btn-2").click().click();
    cy.get("#cart-amount-2").should("have.text", 3);

    cy.get("#nav-cart-item-count").should("have.text", 6);

    cy.get("#cart-amount-3").should("have.text", 1);
    cy.get("#increment-btn-3").click().click().click();
    cy.get("#cart-amount-3").should("have.text", 4);
    cy.get("#nav-cart-item-count").should("have.text", 9);
    cy.get("#decrement-btn-3").click().click().click();
    cy.get("#cart-amount-3").should("have.text", 1);
    cy.get("#nav-cart-item-count").should("have.text", 6);
    cy.get("#cart-total-amount").should("have.text", "$ 3399.94");
    cy.get("#decrement-btn-3").click();
    cy.get("cart-item-3").should("not.exist");
  });

  it("Remove button test", () => {
    cy.get("#cart-item-remove-1").click();
    cy.get("cart-item-1").should("not.exist");
    cy.get("#nav-cart-item-count").should("have.text", 3);
    cy.get("#cart-total-amount").should("have.text", "$ 1499.97");
  });
});
