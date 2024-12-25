import VoxelLoader from './voxel/voxel-loader'
import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from 'react';
import { Avatar, Button, Box, Container, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useColorModeValue, useTheme, List, ListItem, Link } from '@chakra-ui/react';
import Navbar from "./navbar";
import { IoPersonAddSharp, IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";


const LazyVoxel = dynamic(() => import('./voxel/voxel'), {
    ssr: false,
    loading: () => <VoxelLoader />
});

const Banner = () => {
    const theme = useTheme();

    const lazyVoxelRef = useRef(null);
    const [boxBottom, setBoxBottom] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Avatar
                    width="120px"
                    height="120px"
                    color="white"
                    position="absolute"
                    top={`${boxBottom - 120}px`}
                    src="/images/pfp.jpg"
                    objectFit="cover"
                    borderRadius="full"
                    boxShadow={`0 0 0 4px ${useColorModeValue(theme.colors.bgLight, theme.colors.bgDark)}`}
                />

                <Box display={{ md: 'flex' }} style={{ marginTop: `50px` }}>
                    <Box flexGrow={1}>

                        <Text textStyle={'title'}>
                            Bryan Huang
                        </Text>

                        <Text textStyle={'subtitle'}>
                            Computer Science and Economics Student at UBC
                        </Text>

                        <Text textStyle={'subtitle'}>
                            ex-Software Engineer at MDA Space
                        </Text>

                    </Box>


                    <Button leftIcon={<IoPersonAddSharp />} color={'white'} bg={'blue.300'} borderRadius={'13px'} onClick={onOpen}>
                        <Text textStyle={'subtitle'} color={'white'} fontWeight={500}>
                            Connect
                        </Text>
                    </Button>
                </Box>


                <Navbar />


            </Container>

            {/* Contact Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={useColorModeValue(theme.colors.bgLight, theme.colors.bgDark)}>
                    <ModalHeader>
                        <Box display="flex" alignItems="center">
                            <IoPersonAddSharp color={useColorModeValue(theme.colors.customLight, theme.colors.customDark)} />
                            <Text textStyle={'title'} ml={2}>
                                Connect
                            </Text>
                        </Box>
                        <Text textStyle={'subtitle'}> Feel free to connect with me through any of my channels </Text>
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>
                        <List>
                            <ListItem>
                                <Link href="https://github.com/bryanhuangg" target="_blank">
                                    <Button
                                        variant="ghost"
                                        color={useColorModeValue(theme.colors.customLight, theme.colors.customDark)}
                                        colorScheme="gray"
                                        leftIcon={<IoLogoGithub />}
                                    >
                                        <Text textStyle={'text'}>  /bryanhuangg </Text>
                                    </Button>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="https://www.linkedin.com/in/bryanhuangg/" target="_blank">
                                    <Button
                                        variant="ghost"
                                        color={useColorModeValue(theme.colors.customLight, theme.colors.customDark)}
                                        colorScheme="gray"
                                        leftIcon={<IoLogoLinkedin />}
                                    >
                                        <Text textStyle={'text'}>  /bryanhuangg </Text>
                                    </Button>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="mailto:bryanhuangg@gmail.com" target="_blank">
                                    <Button
                                        variant="ghost"
                                        color={useColorModeValue(theme.colors.customLight, theme.colors.customDark)}
                                        colorScheme="gray"
                                        leftIcon={<IoMail />}

                                    >
                                        <Text textStyle={'text'}>  bryanhuangg@gmail.com </Text>
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container >
    );
};

export default Banner;