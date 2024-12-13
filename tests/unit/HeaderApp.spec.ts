import { mount } from '@vue/test-utils'
import HeaderApp from '../../src/components/components/HeaderApp.vue'

describe("HeaderApp component", () => {
  test("Render HeaderApp", () => {
    const component = mount(HeaderApp, {
        props: {
          title: 'Title',
          description: 'Description',
          funcButtonBack: () => {}, 
          funcEditUser: () => {},
        }
    });
    expect(component).toBeDefined();
  });
});