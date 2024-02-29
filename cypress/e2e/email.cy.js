describe("testando rotas", () => {
  it("devocionais", () => {
    cy.visit("/");
    cy.get("#nome").type("Lyzzandro Dualamo Soares Teodosio");
    cy.get("#email").type("lyzzandro@gmail.com");
    cy.get("#mensagem").type("Mensagem de teste, ignora-la.");
    cy.get("form > .button-fill").click();
    // cy.wait(1000);
    // cy.url().should("eq", "https://formsubmit.co/ibcomag@gmail.com");
  });
});
