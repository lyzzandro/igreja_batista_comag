describe("testando rotas", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const list = [
    { name: "devocionais", router: "devotionals" },
    { name: "livros", router: "books" },
    { name: "artigos", router: "articles" },
    { name: "musicas", router: "musics" },
  ];

  list.forEach((obj, index) => {
    it(obj.name, () => {
      cy.intercept({
        method: "GET",
        url: `/api/v1/${obj.router}*`,
        hostname: "backend-ibcomag.up.railway.app",
      }).as("getData");

      cy.get(`li:nth-child(${index + 2}) .links-header`).click();
      cy.wait("@getData").its("response.statusCode").should("eq", 200);
      cy.url().should("include", obj.name);

      cy.get(".section-grid-item > *").each((element) => {
        cy.wrap(element).should("be.visible");
      });
    });
  });

  it("doe", () => {
    cy.get(`li:nth-child(6) .links-header`).click();
    cy.url().should("include", "/doe");
  });
});
