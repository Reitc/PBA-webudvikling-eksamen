import { mount } from '@cypress/vue';
import ProductCard from '/src/components/ProductCard.vue' ; 
import { mount } from '@vue/test-utils';

describe('ProductCard.vue', () => {
  const testCases = [
    {
      name: 'enables the button when no special conditions are met',
      product: {
        id: 1,
        image: 'https://example.com/product.jpg',
        name: 'Normal Product',
        description: 'A regular product.',
        price: '$19.99',
      },
      shouldBeDisabled: false,
    },
    {
      name: 'disables the button when price is "Kontakt for pris"',
      product: {
        id: 2,
        image: 'https://example.com/contact.jpg',
        name: 'Contact for Price Product',
        description: 'Contact us for pricing.',
        price: 'Kontakt for pris',
      },
      shouldBeDisabled: true,
    },
    {
      name: 'disables the button when product ID requires selection',
      product: {
        id: 37,
        image: 'https://example.com/selection.jpg',
        name: 'Selection Required Product',
        description: 'Requires selection before adding to cart.',
        price: '$29.99',
      },
      shouldBeDisabled: true,
    },
  ];

  testCases.forEach(({ name, product, shouldBeDisabled }) => {
    it(name, () => {
      mount(ProductCard, { props: { product } });

      cy.get('#add-to-cart-btn')
        .should('be.visible')
        .should(shouldBeDisabled ? 'be.disabled' : 'not.be.disabled')
        .should(shouldBeDisabled ? 'have.class' : 'not.have.class', 'opacity-50');
    });
  });

  it('renders product information correctly', () => {
    const product = {
      id: 1,
      image: 'https://example.com/product.jpg',
      name: 'Test Product',
      description: 'Test description.',
      price: '$9.99',
    };
    mount(ProductCard, { props: { product } });

    cy.get('img').should('be.visible').and('have.attr', 'src', product.image).and('have.attr', 'alt', product.name);
    cy.get('h3').should('be.visible').and('contain.text', product.name);
    cy.get('p.text-start').should('be.visible').and('contain.text', product.description);
    cy.get('p.text-lg.font-bold').should('be.visible').and('contain.text', product.price);
    cy.get('#read-more-btn').should('be.visible').and('have.attr', 'href', `/product/${product.id}`);
  });
});