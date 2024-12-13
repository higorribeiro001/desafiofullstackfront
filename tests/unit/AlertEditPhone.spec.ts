import { mount } from '@vue/test-utils'
import AlertEditPhone from '../../src/components/components/AlertEditPhone.vue'

describe("AlertEditPhone component", () => {
  test("Render AlertEditPhone", () => {
    const component = mount(AlertEditPhone, {
        props: {
            isOpen: false,
            id: 1,
            userId: 1,
            num: '(99) 99999-9999',
            funcIsOpen: () => {},    
            funcGetUser: () => {}    
        }
    });
    expect(component).toBeDefined();
  });
});