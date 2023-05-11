import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container} from '@chakra-ui/react'
import DinoVoxelLoader from "../dino-voxel-loader";
import dynamic from "next/dynamic";
import Footer from "../footer";

const LazyVoxel = dynamic(() => import('../dino-voxel'), {
    ssr: false,
    loading: () => <DinoVoxelLoader />
})

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1,"/>
                <link rel="shortcut icon" href = "/images/dino-dark3.png"/>
                <title> Bryan's Portfolio Site </title>
            </Head>

            <Navbar path={router.asPath} />

            <Container pt={14}>
                <LazyVoxel/>
                {children}
            </Container>
            <Footer/>
        </Box>
    )
}

export default Main