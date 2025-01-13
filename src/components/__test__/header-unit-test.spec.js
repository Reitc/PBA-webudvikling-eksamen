import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Header from '../Header.vue';

describe('Header.vue', () => {
  it('renders logo image', () => {
    const wrapper = mount(Header);
    const logoImage = wrapper.find('img');

    expect(logoImage.exists()).toBe(true);
    expect(logoImage.attributes('src')).toContain('/img/Horse-Lines-LogoIcons.png'); // Check if src includes logo path
  });
});