import { mount } from '@vue/test-utils'
import AlertRegisterPhone from '../../src/components/components/AlertRegisterPhone.vue'

describe("AlertRegisterPhone component", () => {
  test("Render AlertRegisterPhone", () => {
    const component = mount(AlertRegisterPhone, {
        props: {
            isOpen: false,
            userId: 1,
            funcIsOpen: () => {},    
            funcGetUser: () => {}    
        }
    });
    expect(component).toBeDefined();
  });
});