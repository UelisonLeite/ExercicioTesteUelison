/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
     cy.visit('produtos')

  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      
    let qtd = 4

      produtosPage.buscarProduto("Abominable Hoodie")
      produtosPage.addProdutoCarrinho('XS', 'Green', qtd)
      cy.get('.woocommerce-message').should('contain', qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
      produtosPage.concluirCompra()
      produtosPage.finalizarPedido("Uelison", "Leite", "Rua da Neves", "Joao Pessoa", "58500-000", "83 996224596", "uelisonleite@gmail.com")

  });


})