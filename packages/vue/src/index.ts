import { defineAsyncComponent } from 'vue'

// Avatar
const Avatar = defineAsyncComponent(() => import('./avatar/Avatar.vue'))
const AvatarGroup = defineAsyncComponent(() => import('./avatar-group/AvatarGroup.vue'))

// Button
const Button = defineAsyncComponent(() => import('./button/Button.vue'))
const ButtonGroup = defineAsyncComponent(() => import('./button-group/ButtonGroup.vue'))

// Checkbox
const Checkbox = defineAsyncComponent(() => import('./checkbox/Checkbox.vue'))

// Dropdown
const Dropdown = defineAsyncComponent(() => import('./dropdown/Dropdown.vue'))
const DropdownMenu = defineAsyncComponent(() => import('./dropdown-menu/DropdownMenu.vue'))
const DropdownMenuItem = defineAsyncComponent(() => import('./dropdown-menu-item/DropdownMenuItem.vue'))

// Grid
const Grid = defineAsyncComponent(() => import('./grid/Grid.vue'))

// Icon
const Icon = defineAsyncComponent(() => import('./icon/Feather.vue'))

// Input
import Input from './Input/Input.vue'
import InputPassword from './input-password/InputPassword.vue'

// Link
const Link = defineAsyncComponent(() => import('./link/Link.vue'))

// Loader
const Spinner = defineAsyncComponent(() => import('./spinner/Spinner.vue'))

// Spacer
const Spacer = defineAsyncComponent(() => import('./spacer/Spacer.vue'))

// Table
const Table = defineAsyncComponent(() => import('./table/Table.vue'))

// Typography
const Code = defineAsyncComponent(() => import('./typography/Code.vue'))
const Heading = defineAsyncComponent(() => import('./typography/Heading.vue'))
const Text = defineAsyncComponent(() => import('./typography/Text.vue'))

// Components
export {
  Avatar,
  AvatarGroup,
  Button,
  ButtonGroup,
  Checkbox,
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
  Table,
  Code,
  Heading,
  Text,
}
