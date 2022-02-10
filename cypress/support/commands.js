Cypress.Commands.add('getCPF', cpf => {
    cy.request({
        method:     'GET',
        url:        `http://localhost:8888/api/v1/restricoes/${cpf}`
    }).its('token').should(not.be.empty)
        .then(token => {
            return token
        })
})