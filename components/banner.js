import VoxelLoader from './voxel/voxel-loader'
import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from 'react';
import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';

import SectionTransition from "../components/section-transition";
import styled from "@emotion/styled";

const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 400;
`
const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  as: h2
`

const LazyVoxel = dynamic(() => import('./voxel/voxel'), {
    ssr: false,
    loading: () => <VoxelLoader />
});

const Banner = () => {
    const lazyVoxelRef = useRef(null);
    const [boxBottom, setBoxBottom] = useState(0);

    useEffect(() => {
        if (lazyVoxelRef.current) {
            const voxelRect = lazyVoxelRef.current.getBoundingClientRect();
            setBoxBottom(voxelRect.bottom + 50); // Adjust the offset as needed
        }
    }, []);

    return (
        <Container maxW='3xl'>
            <div ref={lazyVoxelRef}>
                <LazyVoxel />
            </div>

            <Container>
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
                            <Name>
                                <Text color={useColorModeValue('#394867', '#f2f2f0')}>
                                    Bryan Huang
                                </Text>
                            </Name>
                            <Subtitle>
                                <Text color={useColorModeValue('#212A3E', '#F4EEE0')}>
                                    Computer Science and Economics Student at UBC
                                </Text>
                                <Text color={useColorModeValue('#212A3E', '#F4EEE0')}>
                                    Software Engineer at MDA Space
                                </Text>
                            </Subtitle>
                        </Box>
                    </Box>
                </SectionTransition>
            </Container>
        </Container >
    );
};

export default Banner;