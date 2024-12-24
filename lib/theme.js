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

}

const fonts = {
    heading: "'Raleway Variable', sans-serif",
    body: "'Raleway Variable', sans-serif",
}

const colors = {
    lightbg: '#F1F6F9',
    darkbg: '#404258',
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}


const theme = extendTheme({ config, styles, components, fonts, colors, buttonTheme })
export default theme
