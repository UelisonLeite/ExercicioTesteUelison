class ProdutosPage{

    visitarUrl(){
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
        
    }

    addProdutoCarrinho(tamanho, cor, quantidade){

        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
       
               
    }

   concluirCompra(){

         cy.get('.woocommerce-message > .button').click()
         cy.get('.checkout-button').click()
         
    }
    finalizarPedido(){

         cy.checkout("Uelison", "Leite", "Rua da Neves", "Joao Pessoa", "58500-000", "83 996224596", "uelisonleite@gmail.com")
         cy.get('#terms').click()
         cy.get('#place_order').click()
         cy.get('.woocommerce-notice').should('contain', "Obrigado. Seu pedido foi recebido.")



    }
}

export default new ProdutosPage()