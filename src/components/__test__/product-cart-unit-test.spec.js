import { describe, it, expect } from 'vitest'; 
import { mount } from '@vue/test-utils'; 
import ProductCard from '../ProductCard.vue'; 

describe('ProductCard.vue', () => { 
  it('renders product name correctly', () => { 
    const product = { name: 'Test Product', image: 'image.jpg', description: 'Produkt beskrivelse', price: '199,-' }; 
    const wrapper = mount(ProductCard, { props: { product } }); 
    // Find the element displaying the product name using a specific selector 
    const productNameElement = wrapper.find('.text-base.font-semibold.text-center.text-dark-brown');  // Adjust selector as needed 
    expect(productNameElement.exists()).toBe(true); 
    expect(productNameElement.text()).toBe(product.name); 
  }); 
    
    it('renders product image with correct src and alt attributes', () => { 
      const product = { name: 'Test Product', image: 'image.jpg', description: 'Produkt beskrivelse', price: '199,-' }; 
      const wrapper = mount(ProductCard, { props: { product } }); 
      
      const productImage = wrapper.find('img'); 
      expect(productImage.exists()).toBe(true); 
      expect(productImage.attributes('src')).toBe(product.image); 
      expect(productImage.attributes('alt')).toBe(product.name); }); 
      });
