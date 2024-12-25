import VoxelLoader from './voxel/voxel-loader'
import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from 'react';
import { Button, Box, Container, Text } from '@chakra-ui/react';
import SectionTransition from "../components/section-transition";

const LazyVoxel = dynamic(() => import('./voxel/voxel'), {
    ssr: false,
    loading: () => <VoxelLoader />
});

const Banner = () => {
    const lazyVoxelRef = useRef(null);
    const [boxBottom, setBoxBottom] = useState(0);

    const handleWindowResize = () => {
        if (lazyVoxelRef.current) {
            const voxelRect = lazyVoxelRef.current.getBoundingClientRect();
            setBoxBottom(voxelRect.bottom + 50);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <Container maxW='3xl'>
            {/* Voxel Banner */}
            <div ref={lazyVoxelRef}>
                <LazyVoxel />
            </div>

            <Container>

                {/* Profile Picture */}
                <Box
                    width="100px"
                    height="100px"
                    borderRadius="50%"
                    backgroundColor="blue.900"
                    position="absolute"
                    top={`${boxBottom - 100}px`}
                    zIndex="1"
                />

                <SectionTransition delay={0}>
                    <Box display={{ md: 'flex' }} style={{ marginTop: `50px` }}>
                        <Box flexGrow={1}>

                            <Text textStyle={'name'}>
                                Bryan Huang
                            </Text>

                            <Text textStyle={'subtitle'}>
                                Computer Science and Economics Student at UBC
                            </Text>

                            <Text textStyle={'subtitle'}>
                                ex-Software Engineer at MDA Space
                            </Text>

                        </Box>


                        <Button bg={'blue.400'} mt={4} borderRadius={'13px'}>
                            <Text textStyle={'subtitle'} color={'white'} fontWeight={'bold'}>
                                Connect
                            </Text>
                        </Button>
                    </Box>
                </SectionTransition>

            </Container>
        </Container >
    );
};

export default Banner;