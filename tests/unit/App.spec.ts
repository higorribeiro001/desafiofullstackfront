import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe("App component", () => {
  test("Render App", () => {
    const component = mount(App);

    expect(component).toBeDefined();
  });
});