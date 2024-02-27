describe('testando rotas', () => {
  it('devocionais', () => {
    cy.visit('https://www.ibcomag.com.br')
    cy.get('header > button').click()
    cy.get('.menu-responsive > :nth-child(2) > a').click()
  })
  
  it('livros', () => {
    cy.visit('https://www.ibcomag.com.br')
    cy.get('header > button').click()
    cy.get('.menu-responsive > :nth-child(3) > a').click()
  })

  it('artigos', () => {
    cy.visit('https://www.ibcomag.com.br')
    cy.get('header > button').click()
    cy.get('.menu-responsive > :nth-child(4) > a').click()
  })

  it('musicas', () => {
    cy.visit('https://www.ibcomag.com.br')
    cy.get('header > button').click()
    cy.get('.menu-responsive > :nth-child(5) > a').click()
  })

  it('doe', () => {
    cy.visit('https://www.ibcomag.com.br')
    cy.get('header > button').click()
    cy.get('.menu-responsive > :nth-child(6) > a').click()
  })
})