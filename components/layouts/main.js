import Head from 'next/head';
import Header from '../header';
import Footer from "../footer";
import Banner from '../banner';
import { Box } from '@chakra-ui/react';



const Main = ({children, router}) => {
    return (
        <Box as="main" >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1,"/>
                <link rel="shortcut icon" href = "/images/favicon.png"/>
                <title> Bryan's Igloo - Portfolio Site </title>
            </Head>

            <Header/>

            <Box pt={'40px'} centerContent>
                <Banner/>
                {children}
            </Box>

            <Footer/>
        </Box>
    )
}

export default Main