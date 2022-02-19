import { MenuItem } from '@mui/material'

export const fontFamilies = [
  { name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
  { name: 'Arial Black', value: '"Arial Black", Gadget' },
  { name: 'Comic Sans', value: '"Comic Sans MS", cursive' },
  { name: 'Courier New', value: '"Courier New", monospace' },
  { name: 'Georgia', value: 'Georgia, serif' },
  { name: 'Impact', value: 'Impact, Charcoal' },
  { name: 'Lucida Console', value: '"Lucida Console", Monaco' },
  { name: 'Lucida Sans Unicode', value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' },
  { name: 'Palatino Linotype', value: '"Palatino Linotype", "Book Antiqua", Palatino, serif' },
  { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
  { name: 'Times New Roman', value: '"Times New Roman", Times, serif' },
  { name: 'Trebuchet', value: '"Trebuchet MS", sans-serif' },
  { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
  { noRead: true, name: 'Symbol', value: 'Symbol' },
  { noRead: true, name: 'Webdings', value: 'Webdings' },
  { noRead: true, name: 'Wingdings', value: 'Wingdings' },
  { name: 'MS Sans Serif', value: '"MS Sans Serif", Geneva, sans-serif' },
  { name: 'MS Serif', value: '"MS Serif", "New York", serif' },
]

export const fontSizes = [
  '6pt',
  '7pt',
  '8pt',
  '9pt',
  '10pt',
  '11pt',
  '12pt',
  '14pt',
  '16pt',
  '18pt',
  '20pt',
  '24pt',
]

export const fontOptions = fontFamilies.map((font, index) => {
  return(
    <MenuItem
      style={{ fontFamily: font.noRead ? fontFamilies[0].value : font.value }}
      key={'font-' + font.name}
      value={index}
    >
      {font.name}
    </MenuItem>
  )
})

export const sizeOptions = fontSizes.map((size, index) => {
  return(
    <MenuItem
      key={'size-' + size}
      value={index}
    >
      {size}
    </MenuItem>
  )
})
