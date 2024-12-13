import { mount } from '@vue/test-utils'
import AlertDeleteUser from '../../src/components/components/AlertDeleteUser.vue'

describe("AlertDeleteUser component", () => {
  test("Render AlertDeleteUser", () => {
    const component = mount(AlertDeleteUser, {
        props: {
            isOpen: false,
            funcIsOpen: () => {},    
            funcDelete: () => {}    
        }
    });
    expect(component).toBeDefined();
  });
});