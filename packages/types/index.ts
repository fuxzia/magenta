/**
 * Avatar
 */
export enum AvatarSizes {
  Default = 'md',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xlg',
  XXLarge = 'xxlg',
}

export enum AvatarBadgeTypes {
  Red = 'red',
  Green = 'green',
  Gray = 'gray',
}

/**
 * Button
 */
export enum ButtonTypes {
  Default = 'primary',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonSizes {
  Default = 'md',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export enum ButtonShapes {
  Default = 'square',
  Circle = 'circle',
  Rounded = 'rounded',
  Square = 'square',
}

/**
 * Dropdown
 */
export enum DropdownPositions {
  Default = 'bottom-left',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
}

export enum DropdownTriggers {
  Default = 'click',
  Click = 'click',
  Hover = 'hover',
}

/**
 * Grid
 */
export enum GridGutters {
  Default = 'md',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

/**
 * Headings
 */
export enum HeadingSizes {
  Default = 'sm',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

/**
 * Icon
 */
export enum IconLibraries {
  Default = 'feather',
  Feather = 'feather',
}

/**
 * Input
 */
export enum InputSizes {
  Default = 'md',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export enum InputTypes {
  Default = 'text',
  Checkbox = 'checkbox',
  Text = 'text',
  Password = 'password',
}

export enum InputStatus {
  Default = '',
  Error = 'error',
  Success = 'success',
  Warning = 'warning',
}

export enum InputAlignments {
  Default = 'vertical',
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

/**
 * Spacer
 */
export enum SpacerSizes {
  Default = 'md',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xlg',
  XXLarge = 'xxlg',
}

/**
 * Spinner
 */
export enum SpinnerSizes {
  Default = 'md',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

/**
 * Table
 */
export enum TableSortDirections {
  Up = 'asc',
  Down = 'desc',
  Reset = 'reset'
}

export enum TableSizes {
  Default = 'md',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export enum TableAlignments {
  Default ='left',
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export type TableColumn = {
  key: string,
  label: string,
  width?: number
  align?: TableAlignments
  fixed?: boolean
  sortable?: boolean | Function
}

export type TableRow = {
  [key: string]: any
}

export type TableData<T> = Array<T>

/**
 * Text
 */
export enum TextTags {
  Default = 'p',
  Div = 'div',
  Paragraph = 'p',
}

export enum TextSizes {
  Default = 'md',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xlg',
}

