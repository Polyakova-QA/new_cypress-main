describe('Покупка аватара', function () {

    it('Авторизация', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.wait(2000)
        cy.get('button[type="submit"]').click({ force: true });  
        cy.wait(2000)
        cy.get('.header__container > .header__id').click({ force: true });
        cy.wait(1000)
        cy.get('[href="/shop"]').click({ force: true });
        cy.wait(1000)
        cy.get(':nth-child(12) > .shop__button').click({ force: true });
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4734868958733862');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12.24');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Надежда Полякова');
        cy.get('.pay-btn').click({ force: true });
        cy.get('.payment__span-defolt').should('have.css', 'color', 'rgb(85, 137, 241)');
        cy.wait(46000)
        cy.get('.payment__span-defolt').contains('Отправить код повторно'); 
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click({ force: true });
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно')
        
    });
})