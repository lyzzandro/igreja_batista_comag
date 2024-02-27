describe('testando rotas', () => {
  it('devocionais', () => {
    cy.visit('https://www.ibcomag.com.br')
    cy.get('#nome').type("Lyzzandro Dualamo Soares Teodosio")
    cy.get('#email').type("lyzzandro@gmail.com")
    cy.get('#mensagem').type("Mensagem de teste, ignora-la.")
    cy.get('form > .button-fill').click()
    // cy.get('#target').click()
  })
  
})