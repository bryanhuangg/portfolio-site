import Logo from './logo'
import * as React from 'react';
import {
    Container,
    Box,
    Heading,
    Flex,
} from '@chakra-ui/react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme, useColorMode, useColorModeValue } from '@chakra-ui/react'


const Header = props => {
    const theme = useTheme();
    const isDarkMode = useColorModeValue(false, true);
    const { toggleColorMode } = useColorMode();
  

    return (
        <Box position="fixed"
            as="nav"
            w="100%"
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}>

            <Container display="flex" maxW="container.xxl" p={2.5} wrap="wrap" align="center" justify="space-between">

                <Flex align="center" alignItems="center">
                    <Logo />
                </Flex>


                <Box align="right" alignItems="center" flex={1} >
                    <DarkModeSwitch sunColor={theme.colors.darkbg} moonColor={theme.colors.lightbg} onChange={toggleColorMode} checked={isDarkMode} width={25} height={25} />
                </Box>
            </Container>
        </Box>
    )
}

export default Header
