import { Avatar, Box, Button, Container, Link, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useTheme } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoPersonAddSharp } from "react-icons/io5";
import React, { useEffect, useRef, useState } from 'react';

import Navbar from "./navbar";
import VoxelLoader from './voxel/voxel-loader';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';

const LazyVoxel = dynamic(() => import('./voxel/voxel'), {
    ssr: false,
    loading: () => <VoxelLoader />
});

const Banner = () => {
    const theme = useTheme();
    const router = useRouter();

    const lazyVoxelRef = useRef(null);
    const [avatarTop, setAvatarTop] = useState(0);
    const [isAvatarVisible, setIsAvatarVisible] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const updateAvatarPosition = () => {
            if (lazyVoxelRef.current) {
                const rect = lazyVoxelRef.current.getBoundingClientRect();
                const scrollY = window.scrollY || window.pageYOffset;
                const absoluteBottom = rect.bottom + scrollY;
                setAvatarTop(absoluteBottom - 75);
                setIsAvatarVisible(true);
            }
        };
    
        updateAvatarPosition();
        window.addEventListener('scroll', updateAvatarPosition);
        router.events.on('routeChangeComplete', updateAvatarPosition);
    
        return () => {
            window.removeEventListener('scroll', updateAvatarPosition);
            router.events.off('routeChangeComplete', updateAvatarPosition);
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
                    top={`${avatarTop}px`}
                    src="/images/pfp.jpg"
                    objectFit="cover"
                    borderRadius="full"
                    boxShadow={`0 0 0 4px ${useColorModeValue(theme.colors.bgLight, theme.colors.bgDark)}`}
                    opacity={isAvatarVisible ? 1 : 0}
                    transition="opacity 0.2s ease-in-out"
                />

                <Box display={{ md: 'flex' }} style={{ marginTop: `50px` }}>
                    <Box flexGrow={1}>

                        <Text textStyle={'title'}>
                            Bryan Huang
                        </Text>

                        <Text textStyle={'subtitle'}>
                            Computer Science and Economics Student at UBC
                            <br />
                            ex-Software Engineer at MDA Space
                        </Text>
                    </Box>


                    <Button leftIcon={<IoPersonAddSharp />} color={'white'} bg={'blue.300'} borderRadius={'13px'} onClick={onOpen} mt={2}>
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