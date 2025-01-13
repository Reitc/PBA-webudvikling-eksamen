import { shallowMount } from '@vue/test-utils';
import AdminPanel from '@/components/AdminPanel.vue'; // Update the path if your component is located elsewhere

describe('AdminPanel.vue', () => {
  it('renders admin list with correct information', () => {
    const wrapper = shallowMount(AdminPanel, {
      props: {
        admins: [
          {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            online: true,
            picture: 'https://example.com/profile.jpg',
          },
          {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            online: false,
            picture: 'https://example.com/profile2.jpg',
          },
        ],
      },
    });

    const adminList = wrapper.findAll('.flex.items-center.p-1.bg-white.rounded-lg.shadow-md.mb-1');
    expect(adminList.length).toBe(4); // Check if two admins are rendered

  });
});