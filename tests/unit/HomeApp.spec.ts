import { mount } from '@vue/test-utils'
import HomeApp from '../../src/components/pages/HomeApp.vue'

describe("HomeApp component", () => {
  test("Render HomeApp", () => {
    const component = mount(HomeApp);

    expect(component).toBeDefined();
  });
});