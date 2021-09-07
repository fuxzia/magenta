import { CheckboxCustomIcons, TableRow } from '@magenta-ui/types'

type UseHelpers = {
  [key: string]: any,
}

export const useHelpers = (): UseHelpers => {

  const collapseIcons: CheckboxCustomIcons = {
    default: 'plus-square',
    checked: 'minus-square',
  }
  
  const clearMagentaKeys = (data: Array<TableRow>) => {
    const keys = [
      'MAGENTA_UI_IS_SELECTED',
      'MAGENTA_UI_IS_SELECTOR',
      'MAGENTA_UI_IS_COLLAPSE',
    ]
    return data.map((item) => {
      const newItem = { ...item }
      keys.forEach(key => delete newItem[key])
      return { ...newItem }
    }) as Array<TableRow>
  }

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const tr = entry.target as HTMLTableRowElement
      if (tr) {
        tr.querySelectorAll('td, th').forEach((td) => {
          (td as HTMLElement).style.height = `${tr.scrollHeight}px`
        })
      }
    }
  })

  return {
    collapseIcons,
    clearMagentaKeys,
    resizeObserver,
  }
}