
describe('cellatest e2e test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173')
        cy.get('a[href="/login"]').click()
        cy.get('input[id="email"]').type('Zentia88@gmail.com') // Insert a admin username here, show the one also given to teacher
        cy.get('input[id="password"]').type('Knotter3') // Insert a admin password here, show the one also given to teacher
        cy.get('button[type="submit"]').click() // Target actual submit button on login page
         // Go to front page
         cy.url().should('not.contain', '/login')
    })

    it('add to cart and purchase',() => {
        cy.visit('http://localhost:5173')

        //Add the product from home page featured catalog to cart
        cy.get('button#add-to-cart-btn').first().click() //Targets the first product on the home page

        // Check the cart
        cy.get('a[href="/cart"]').click()
        cy.get('#cart-items').should('have.length', 1) // Check if the cart has 1 item

    })
})