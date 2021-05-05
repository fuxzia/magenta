export enum Sizes {
  Default = 'md',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export enum Aligns {
  Default ='left',
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export type Column = {
  key: string,
  label: string,
  width?: number
  align?: Aligns
  fixed?: boolean
  sortable?: boolean
}

export type Data<T> = Array<T>
