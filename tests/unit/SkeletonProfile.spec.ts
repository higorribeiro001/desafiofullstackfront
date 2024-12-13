import { mount } from '@vue/test-utils'
import SkeletonProfile from '../../src/components/components/SkeletonProfile.vue'

describe("SkeletonProfile component", () => {
  test("Render SkeletonProfile", () => {
    const component = mount(SkeletonProfile);
    expect(component).toBeDefined();
  });
});