describe('cellatest e2e test', () => {
    beforeEach(() => {
        // Go to site
        cy.visit('http://localhost:5173')
    })

    it('navigate to cats and check h2',() => {
        // Go to cat category page
        cy.get('a[href="/category/katte"]').click()
        // Check h2 content
         cy.contains('h2', 'Produkter til Katte').should('be.visible')

         // Check if the first product is visible
            cy.get('div#product-card').first().should('be.visible')

            // Check if first product has read more button
            cy.get('div#product-card').first().within(() => {
            cy.get('a#read-more-btn', { timeout: 10000 }).should('be.visible').click()
        })
            // Verify navigation to the product detail page
        cy.url().should('include', '/product/') // Adjust the URL check as needed
    })

    it('navigate to dogs and check h2',() => {
        // Go to cat category page
        cy.get('a[href="/category/hunde"]').click()
        // Check h2 content
         cy.contains('h2', 'Produkter til Hunde').should('be.visible')

         // Check if the first product is visible
            cy.get('div#product-card').first().should('be.visible')

            // Check if first product has read more button
            cy.get('div#product-card').first().within(() => {
            cy.get('a#read-more-btn', { timeout: 10000 }).should('be.visible').click()
        })
            // Verify navigation to the product detail page
        cy.url().should('include', '/product/') // Adjust the URL check as needed
    })

    it('navigate to horses and check h2',() => {
        // Go to cat category page
        cy.get('a[href="/category/heste"]').click()
        // Check h2 content
         cy.contains('h2', 'Produkter til Heste').should('be.visible')

         // Check if the first product is visible
            cy.get('div#product-card').first().should('be.visible')

            // Check if first product has read more button
            cy.get('div#product-card').first().within(() => {
            cy.get('a#read-more-btn', { timeout: 10000 }).should('be.visible').click()
        })
            // Verify navigation to the product detail page
        cy.url().should('include', '/product/') // Adjust the URL check as needed
    })

    it('navigate to humans and check h2',() => {
        // Go to cat category page
        cy.get('a[href="/category/mennesker"]').click()
        // Check h2 content
         cy.contains('h2', 'Produkter til Mennesker').should('be.visible')

         // Check if the first product is visible
            cy.get('div#product-card').first().should('be.visible')

            // Check if first product has read more button
            cy.get('div#product-card').first().within(() => {
            cy.get('a#read-more-btn', { timeout: 10000 }).should('be.visible').click()
        })
            // Verify navigation to the product detail page
        cy.url().should('include', '/product/') // Adjust the URL check as needed
    })

    it('navigate to CELLATEST main',() => {
        // Go to contact page
        cy.get('a[href="https://www.cellatest.com/"]').click()
    })

    it('navigate to CELLATEST contacts',() => {
        // Go to contact page
        cy.get('a[href="https://www.cellatest.com/kontakt"]').click()
    })
})
