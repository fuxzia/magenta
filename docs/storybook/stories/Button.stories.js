import Button from '../../../src/components/buttons/Button.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      }
    },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" />',
});

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  label: 'Button text',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'Button text',
  size: 'md',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Button text',
  size: 'md',
  outline: true
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button text',
  size: 'md',
  danger: true
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button text',
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button text',
  size: 'sm',
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Button text',
  size: 'md',
  rounded: true,
};

export const Circle = Template.bind({});
Circle.args = {
  size: 'md',
  icon: 'download',
  circle: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button text',
  size: 'md',
  icon: 'box'
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  label: 'Button text',
  size: 'md',
  loading: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button text',
  size: 'md',
  disabled: true
};
