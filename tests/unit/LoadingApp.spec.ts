import { mount } from '@vue/test-utils'
import LoadingApp from '../../src/components/components/LoadingApp.vue'

describe("LoadingApp component", () => {
  test("Render LoadingApp", () => {
    const component = mount(LoadingApp, {
        props: {
            isOpen: false,
            funcIsOpen: () => {} 
        }
    });
    expect(component).toBeDefined();
  });
});