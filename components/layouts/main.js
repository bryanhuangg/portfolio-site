import Head from 'next/head'
import Header from '../header'
import { Box, Container} from '@chakra-ui/react'
import VoxelLoader from '../voxel/voxel-loader'
import dynamic from "next/dynamic";
import Footer from "../footer";

const LazyVoxel = dynamic(() => import('../voxel/voxel'), {
    ssr: false,
    loading: () => <VoxelLoader />
})

const Main = ({children, router}) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1,"/>
                <link rel="shortcut icon" href = "/images/favicon.png"/>
                <title> Bryan's Igloo - Portfolio Site </title>
            </Head>

            <Header path={router.asPath} />

            <Container pt={'2.5%'} maxW='2xl' centerContent>
                <LazyVoxel/>
                {children}
            </Container>
            <Footer/>
        </Box>
    )
}

export default Main