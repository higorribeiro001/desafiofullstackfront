import { mount } from '@vue/test-utils'
import AlertDeletePhone from '../../src/components/components/AlertDeletePhone.vue'

describe("AlertDeletePhone component", () => {
  test("Render AlertDeletePhone", () => {
    const component = mount(AlertDeletePhone, {
        props: {
            isOpen: false,
            funcIsOpen: () => {},    
            funcDelete: () => {}    
        }
    });
    expect(component).toBeDefined();
  });
});