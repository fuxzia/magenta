import { defineAsyncComponent } from 'vue'

// Avatar
const Avatar = defineAsyncComponent(() => import('./src/avatar/Avatar.vue'))
const AvatarGroup = defineAsyncComponent(() => import('./src/avatar/AvatarGroup.vue'))

// Button
const Button = defineAsyncComponent(() => import('./src/button/Button.vue'))
const ButtonGroup = defineAsyncComponent(() => import('./src/button/ButtonGroup.vue'))

// Dropdown
const Dropdown = defineAsyncComponent(() => import('./src/dropdown/Dropdown.vue'))
const DropdownMenu = defineAsyncComponent(() => import('./src/dropdown/DropdownMenu.vue'))
const DropdownMenuItem = defineAsyncComponent(() => import('./src/dropdown/DropdownMenuItem.vue'))

// Grid
const Grid = defineAsyncComponent(() => import('./src/grid/Grid.vue'))

// Icon
const Icon = defineAsyncComponent(() => import('./src/icon/Feather.vue'))

// Input
const Input = defineAsyncComponent(() => import('./src/input/Input.vue'))
const InputPassword = defineAsyncComponent(() => import('./src/input/InputPassword.vue'))

// Link
const Link = defineAsyncComponent(() => import('./src/link/Link.vue'))

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
  AvatarGroup,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  Grid,
  Icon,
  Input,
  InputPassword,
  Link,
  Spinner,
  Spacer,
  Code,
  Heading,
  Text,
}
