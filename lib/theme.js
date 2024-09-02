import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { buttonTheme} from "./button-theme";

const styles = {
    global: props => ({
        body:{
            bg: mode('#F1F6F9', '#404258')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#121212', '#F1F6F9')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: 'Press Start 2P'
}

const colors = {
    grassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}


const theme = extendTheme({ config, styles, components, fonts, colors, buttonTheme })
export default theme
