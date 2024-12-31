import { Button, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body:{
            bg: mode('#F1F6F9', '#404258')(props)
        }
    })
}

const components = {
    Text: {
        baseStyle: props => ({
            color: mode(colors.customLight, colors.customDark)(props),
        }),
    },
}

const fonts = {
    heading: "'Raleway Variable', sans-serif",
    body: "'Raleway Variable', sans-serif",
}

const colors = {
    bgLight: '#F1F6F9',
    bgDark: '#404258',
    customLight: '#394867',
    customDark: '#f2f2f0',
}

const textStyles = {
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        as: 'h2',
    },
    subtitle: {
        fontSize: '15px',
        fontWeight: '500',
    },
    text: {
        fontSize: '14px',
        fontWeight: '400',
    },

};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}


const theme = extendTheme({ config, styles, components, fonts, colors, textStyles })
export default theme
