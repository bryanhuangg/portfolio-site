import { ChakraProvider} from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import "@fontsource/press-start-2p"

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <Component {... pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}
export default Website