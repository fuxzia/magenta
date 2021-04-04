import Feather from '../../../src/components/icons/Feather.vue';

export default {
  title: 'Components/Icons',
  component: Feather,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Feather },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Feather v-bind="args" />',
});

export const FeatherIcon = Template.bind({});
FeatherIcon.args = {
  icon: 'users',
};
