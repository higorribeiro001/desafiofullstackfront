import { mount } from '@vue/test-utils'
import ImageProfile from '../../src/components/components/ImageProfile.vue'

describe("ImageProfile component", () => {
  test("Render ImageProfile", () => {
    const component = mount(ImageProfile);
    expect(component).toBeDefined();
  });
});