import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const xl = defineStyle({
    fontSize: 'xl',
    px: '6',
    h: '16',
    borderRadius: 'md',
})

export const buttonTheme = defineStyleConfig({
    sizes: {xl}
})