import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { global } from './global'

const breakpoints = {
  sm: '48em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
export const theme = extendTheme({
  ...global,
  colors: colors,
  breakpoints,
})
