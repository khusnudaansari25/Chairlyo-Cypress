describe('Chairlyo Login Module', () => {

    it('should open Chairlyo login page', () => {

        cy.visit('https://qa02.stage.chairlyo.com/');

        cy.url().should('include', 'chairlyo');

    });


    describe('Chairlyo Login Module', () => {

    it('should login with valid credentials', () => {

        cy.visit('https://qa02.stage.chairlyo.com/');

        cy.get('#email').type('skilladmin@test.com');

        cy.get('input[type="password"]').type('Skill@123');

        cy.get('button[type="submit"]').click();

        cy.url().should('not.include', 'login');

    });


    describe('Chairlyo Login Module', () => {

    it('should not login with invalid password', () => {

        cy.visit('https://qa02.stage.chairlyo.com/');

        cy.get('#email').type('skilladmin@test.com');

        cy.get('input[type="password"]').type('Wrong@123');

        cy.get('button[type="submit"]').click();

        cy.url().should('include', 'login');

    });



    });


    describe('Chairlyo Login Module', () => {

    it('should not login with invalid email', () => {

        cy.visit('https://qa02.stage.chairlyo.com/');

        cy.get('#email').type('wronguser@test.com');

        cy.get('input[type="password"]').type('Skill@123');

        cy.get('button[type="submit"]').click();

        cy.url().should('include', 'login');

    });

    describe('Chairlyo Login Module', () => {

    it('should not login when email is empty', () => {

        cy.visit('https://qa02.stage.chairlyo.com/');

        cy.get('input[type="password"]').type('Skill@123');

        cy.get('button[type="submit"]').click();

        cy.url().should('include', 'login');

    });

    describe('Chairlyo Login Module', () => {

    it('LOGIN-006 - should not login when email and password are empty', () => {

        cy.visit('https://qa02.stage.chairlyo.com/');

        cy.get('button[type="submit"]').click();

        cy.url().should('include', 'login');

    });

});

});

});



    });
});

