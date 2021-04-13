import { defineAsyncComponent } from 'vue'

// Avatar
const Avatar = defineAsyncComponent(() => import('./src/avatar/Avatar.vue'))
const AvatarStack = defineAsyncComponent(() => import('./src/avatar/AvatarStack.vue'))

// Button
const Button = defineAsyncComponent(() => import('./src/button/Button.vue'))
const ButtonGroup = defineAsyncComponent(() => import('./src/button/ButtonGroup.vue'))

// Dropdown
const Dropdown = defineAsyncComponent(() => import('./src/dropdown/Dropdown.vue'))
const DropdownItem = defineAsyncComponent(() => import('./src/dropdown/DropdownItem.vue'))

// Icon
const Icon = defineAsyncComponent(() => import('./src/icon/Feather.vue'))

// Loader
const Spinner = defineAsyncComponent(() => import('./src/loader/Spinner.vue'))

// Spacer
const Spacer = defineAsyncComponent(() => import('./src/spacer/Spacer.vue'))

// Typography
const Code = defineAsyncComponent(() => import('./src/typography/Code.vue'))
const Heading = defineAsyncComponent(() => import('./src/typography/Heading.vue'))
const Text = defineAsyncComponent(() => import('./src/typography/Text.vue'))

// Components
export {
  Avatar,
  AvatarStack,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  Icon,
  Spinner,
  Spacer,
  Code,
  Heading,
  Text,
}
