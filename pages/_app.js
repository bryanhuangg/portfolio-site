import { ChakraProvider} from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import "@fontsource/press-start-2p"
import theme from '../lib/theme'
import styled from "@emotion/styled";


const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {... pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}
export default Website