describe('Home view', () => {

  it('Should display all reservations when first visiting the site', () => {
    cy.visit("http://localhost:3000/")
      .get('h1')
      .contains('Turing Cafe Reservations')
      .get('h2')
      .should('have.length', 9)
      .first()
      .contains('Christie')
  })

  it('Should have a form to input new reservations', () => {
    cy.visit("http://localhost:3000/")
      .get("form")
      .get('button')
      .contains('Make Reservation')
  })

  it('Should be able to add a new reservation', () => {
    cy.visit("http://localhost:3000/")
      .get("form")
      .get("input")
      .first()
      .type("Kai")
      .should("have.value", "Kai")
      .next()
      .type("07/21")
      .should("have.value", "07/21")
      .next()
      .type("07:30")
      .should("have.value", "07:30")
      .next()
      .type("4")
      .should("have.value", 4)
      .get("button")
      .click()
      .get('h2')
      .last()
      .contains('Kai')
  })


})