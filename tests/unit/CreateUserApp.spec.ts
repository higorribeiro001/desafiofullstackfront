import { mount } from '@vue/test-utils'
import CreateUserApp from '../../src/components/pages/CreateUserApp.vue'

describe("CreateUserApp component", () => {
  test("Render CreateUserApp", () => {
    const component = mount(CreateUserApp);

    expect(component).toBeDefined();
  });
});