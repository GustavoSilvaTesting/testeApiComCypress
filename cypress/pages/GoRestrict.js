

class GoRestrict {
    
    comRestricao(cpf) {       
        cy.request({
            method:     'GET',
            url:        `http://localhost:8888/api/v1/restricoes/${cpf}`,              
        }).then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.have.property('mensagem', `O CPF ${cpf} tem problema`)
        })        
    }

    semRestricao(cpf) {       
        cy.request({
            method:     'GET',
            url:        `http://localhost:8888/api/v1/restricoes/${cpf}`,              
        }).then(res => {
            expect(res.status).to.be.equal(204)            
        })       
    }

    restricaoSemCPF(cpf) {       
        cy.request({
            failOnStatusCode: false,
            method:     'GET',
            url:        `http://localhost:8888/api/v1/restricoes/${cpf}`,              
        }).then(res => {
            expect(res.status).to.be.equal(404)
            expect(res.body).to.have.property('status', 404)
            expect(res.body).to.have.property('message', 'No message available')
        })        
    }
}

export default GoRestrict;