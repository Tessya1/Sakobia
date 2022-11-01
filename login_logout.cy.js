describe('Login Test Suite', () => {
  it('Verify user cannot login with invalid credetials', () => {
    cy.visit('http://192.168.1.24:8000/session/signin',{timeout:200000})

    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('eyitemi.gbiaye')

    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('chageme')

    cy.get('.MuiButton-label').click({timeout:5000})

    // Assertion
    cy.xpath("//div[@class='font-bold m-1']").contains('Invalid Credentials!')

  }),

  it('Verify user can login with valid credetials', () => {
    cy.visit('http://192.168.1.24:8000/session/signin',{timeout:200000})

    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('eyitemi.gbiaye')

    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('changeme')

    cy.get('.MuiButton-label').click({timeout:10000})
    cy.get('.MuiIconButton-label > .material-icons').click()

    // Assertion
    cy.xpath("//span[@class='font-semibold text-28']").contains('Welcome Eyitemi')
  })
})