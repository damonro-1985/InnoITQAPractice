describe('Practice Test', () => {
  it('Visits and validates the dropdown option', () => {
    cy.visit('http://the-internet.herokuapp.com')
    cy.contains('Dropdown').click()
    cy.url().should('include', '/dropdown')
    cy.get('#dropdown').should('exist')    
    cy.get("select").select("Option 1").should('have.value','1')
    cy.get("select").select("Option 2").should('have.value','2')
  })
  it('Visits the Login (Basic Auth) option', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.url().should('include', '/basic_auth')
    cy.get('h3').should('include.text', 'Basic Auth')
    cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
  })  
  it('Visits the Sortable Data Tables option', () => {
    cy.visit('http://the-internet.herokuapp.com')
    cy.contains('Sortable Data Tables').click()
    cy.url().should('include', '/tables')
    cy.get('#table2').scrollIntoView()
    cy.get('#table2 thead tr th').should('have.length', '6')
    cy.contains('.dues', 'Due').click()
    cy.contains('.dues', 'Due').click()
    cy.get('#table2').contains('th', 'Due')
    cy.contains('#table2 td','$51.00').should('exist')
    cy.get('#table2 tbody tr').eq(1).within(() =>{
      cy.get('td').each(($el) =>{
        if ($el.text() == '$51.00'){
          cy.log('column sorted')
        }
      })
    })
  })
})