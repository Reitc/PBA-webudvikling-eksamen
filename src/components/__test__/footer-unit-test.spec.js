import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Footer from '../Footer.vue';

describe('Footer.vue', () => {
  it('renders copyright text', () => {
    const wrapper = mount(Footer);

    // Find the *correct* p element containing the copyright
    // Using a more specific selector is crucial here!
    const copyrightText = wrapper.find('.bg-dark-brown p'); // Or any other unique selector

    expect(copyrightText.exists()).toBe(true);
    expect(copyrightText.text()).toContain('© 2021 CELLA TEST'); // Use &copy;
  });

  it('renders social media icons', () => {
    // ... (Your existing social media test)
  });

  it('renders address', () => {
    const wrapper = mount(Footer);
    const addressText = wrapper.find('#right-section li:first-child p');

    expect(addressText.exists()).toBe(true);
    expect(addressText.text()).toContain('Kølstrupvej 45, 5330 Munkebo');
  });
});