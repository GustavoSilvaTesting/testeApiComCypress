/// <reference types="cypress" />

import GoRestrict from '../pages/GoRestrict'

describe('Teste Consultar Restrições', () => {

    var restrict = new GoRestrict()

    it('Teste CPFs com restrição', () => {
        var cpfs = {
            cpf1:    '97093236014',
            cpf2:    '60094146012',
            cpf3:    '84809766080',
            cpf4:    '62648716050',
            cpf5:    '26276298085'
        }
        // var restrict = new GoRestrict()

        restrict.comRestricao(cpfs.cpf1)
        restrict.comRestricao(cpfs.cpf2)
        restrict.comRestricao(cpfs.cpf3)
        restrict.comRestricao(cpfs.cpf4)
        restrict.comRestricao(cpfs.cpf5)      
    })

    it('Teste CPF sem restrição', () => {
        var cpfs = {
            cpf1:    '97093236015',
            cpf2:    '60094146013',
            cpf3:    '84809766081',
            cpf4:    '62648716056',
            cpf5:    '26276298089'
        }
        // var restrict = new GoRestrict()

        restrict.semRestricao(cpfs.cpf1)
        restrict.semRestricao(cpfs.cpf2)
        restrict.semRestricao(cpfs.cpf3)
        restrict.semRestricao(cpfs.cpf4)
        restrict.semRestricao(cpfs.cpf5)        
    })

    it('Teste sem CPF', () => {
        // var restrict = new GoRestrict()

        var cpfs = {
            cpf1:    ''
        }
        restrict.restricaoSemCPF(cpfs.cpf1)
              
    })

})