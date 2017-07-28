var helper = require('../helper.js');

describe('Teste-01: Pesquisar e adicionar produto ao Carrinho de Compras', function () {

    var campoPesquisa = null,
        botaoPesquisar = null,
        qtdeItensEncontrados = null,
        produtoEscolhido = null,
        btnClickItem = null,
        btnClickAddCarrinho = null,
        clicarCarrinhoCompras = null,
        verCarrinho = null

    beforeEach (function () {
        browser.driver.get(helper.path());
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;

        //Inicialização das variaveis
        campoPesquisa = element(by.id('search_input'));
        botaoPesquisar = element(by.css('.ty-icon-search'));
        qtdeItensEncontrados = element(by.id('products_search_total_found_11'));
        produtoEscolhido = element(by.cssContainingText('.product-title', 'Batman: Arkham City (X360)'));
        btnClickItem =  element(by.cssContainingText('.ty-column3:nth-child(1) .product-title', 'Batman: Arkham City (X360)'));
        btnClickAddCarrinho = element(by.buttonText('Adicionar ao carrinho'));
        clicarCarrinhoCompras = element(by.css('.filled'));
        verCarrinho = element(by.css('#dropdown_8 .ty-btn__secondary'));

    });


    it('Procurar produto no campo de busca da loja.', function () {

        campoPesquisa.click();
        campoPesquisa.sendKeys('Batman');
        botaoPesquisar.click();

        //Valida se o retorno é diferente de 0. Logo, foram encontrados produtos com os termos da busca
        //expect(qtdeItensEncontrados.getText()).not.toEqual(0);
        expect(element(by.cssContainingText('.ty-column3:nth-child(1) .product-title', 'Batman: Arkham City (X360)')).isDisplayed()).toBe(true);
    });


    it('Adicionar ao carrinho e validar se o produto .', function () {

        browser.driver.sleep(5000);

        campoPesquisa.click();
        campoPesquisa.sendKeys('Batman');
        botaoPesquisar.click();
        browser.driver.sleep(5000);

        btnClickItem.click();
        browser.driver.sleep(5000);



        btnClickAddCarrinho.click();
        browser.driver.sleep(8000);


        clicarCarrinhoCompras.click();
        browser.driver.sleep(5000);



        verCarrinho.click();
        browser.driver.sleep(5000);


        var validarCarrinho = element(by.css('.ty-mainbox-title'));
        var codigoProduto = element(by.id('product_code_update_1860791280'));


        //produtoEscolhido.click();
        expect(validarCarrinho.getText()).toEqual('Conteúdo do carrinho');

        expect(codigoProduto.getText()).toEqual('A0094VY6U3');
    });


});






