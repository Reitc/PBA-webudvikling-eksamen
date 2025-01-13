describe('cellatest e2e test', () => {
    beforeEach(() => {
        // Go to site
        cy.visit('http://localhost:5173')
    })

    
    it('navigate to and contact info in footer',() => {
        cy.get('footer').should('be.visible').within(() => { 
            // Check contact info in footer
            cy.get('div#right-section').should('be.visible').within(() => {
                cy.contains('h3', 'Kontakt').should('be.visible') 
                cy.contains('p').should('be.visible')
            } )
        })
    })

    it('navigate to and check footer',() => {
        cy.get('footer').should('be.visible').within(() => { 
            // Check Nyttige link in footer
            cy.get('div#left-section').should('be.visible').within(() => {
                cy.contains('h3', 'Nyttige links').should('be.visible') 
                cy.contains('p').should('be.visible')
                cy.get('a[href="https://bemergroup.com/da_DK/home"]').should('be.visible').click()
            } )
        })
    })
       
    it('Check external links in footer',() => {
        cy.get('footer').should('be.visible').within(() => { 
            // Check Nyttige link
            cy.get('div#left-section').should('be.visible').within(() => {
                cy.get('a[href="https://bemergroup.com/da_DK/home"]').should('have.attr', 'href', 'https://bemergroup.com/da_DK/home').then((link) => {
                const url = link.prop('href')
                cy.request(url).its('status').should('eq', 200)
            })

                cy.get('a[href="https://www.instagram.com/stutteri_hindsholm/?hl=da"]').should('be.visible').then((link) => {
                const url = link.prop('href')
                cy.request(url).its('status').should('eq', 200)
                })

                cy.get('a[href="https://www.cell-wellbeing.com/"]').should('be.visible').then((link) => {
                const url = link.prop('href')
                cy.request(url).its('status').should('eq', 200)
                })

                cy.get('a[href="https://www.cellatest.com/gdpr-cookies"]').should('be.visible').then((link) => {
                const url = link.prop('href')
                cy.request(url).its('status').should('eq', 200)
                })
            })
        })
    })
})