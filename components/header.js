import Logo from './logo'
import * as React from 'react';
import {
    Container,
    Box,
    Heading,
    Flex,
} from '@chakra-ui/react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useColorMode, useColorModeValue } from '@chakra-ui/react'


const Header = props => {
    const { toggleColorMode } = useColorMode();
    const isDarkMode = useColorModeValue(false, true); 

    return (
        <Box position="fixed"
            as="nav"
            w="100%"
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}>

            <Container display="flex" maxW="container.xxl" p={2.5} wrap="wrap" align="center" justify="space-between">

                <Flex align="center">
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>


                <Box flex={1} align="right">
                    <DarkModeSwitch onChange={toggleColorMode} checked={isDarkMode} />
                </Box>
            </Container>
        </Box>
    )
}

export default Header
