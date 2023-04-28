describe('Practice Test', () => {
/*  it('Visits and validates the dropdown option', () => {
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
  }) */ 
  it('Visits the Sortable Data Tables option', () => {
    cy.visit('http://the-internet.herokuapp.com')
    cy.contains('Sortable Data Tables').click()
    cy.url().should('include', '/tables')
    cy.get('#table2').scrollIntoView()
    cy.contains('.dues', 'Due').click()
    //verify values are sorted Mayor a menor
    cy.contains('.header headerSortUp', 'Due')
    //cy.get('table#table1 tbody td')
  })

})