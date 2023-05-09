import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
    border: '2px dashed', // change the appearance of the border
    borderRadius: 0, // remove the border radius
    fontWeight: 'semibold', // change the font weight
})

const xl = defineStyle({
    fontSize: 'xl',
    px: '6',
    h: '16',
    borderRadius: 'md',
})

export const buttonTheme = defineStyleConfig({
    sizes: {xl}
})