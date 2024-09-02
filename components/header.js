import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Text,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import styled from "@emotion/styled";
import { HamburgerIcon } from '@chakra-ui/icons'
import {forwardRef} from "react";
import ThemeToggle from "./theme-toggle";
import {IoLogoGithub} from "react-icons/io5";

const LinkItem = ({href, path, target, children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('#394867', '#f2f2f0')
    return (
        <Link
            as={NextLink}
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? useColorModeValue('#212A3E', '#F4EEE0') : inactiveColor}
            href={href}
            scroll={false}
            target={target}
            {...props}
            style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',

            }}
        >
            {children}
        </Link>
    )
}

const MenuForwardLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props}/>
))

const ButtonFont = styled.span`
  font-family: "Press Start 2P";
  font-size: 10px;
  font-weight: lighter;
`


const Navbar = props => {
    return (
        <Box position="fixed"
             as="nav"
             w="100%"
             style={{backdropFilter: 'blur(10px)'}}
             zIndex={1}
             {...props}>

            <Container display="flex" maxW="container.xxl" p={2.5} wrap="wrap" align="center" justify="space-between">

                <Flex align="center">
                    <Heading as = "h1" size = "lg" letterSpacing = {'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>


                <Box flex={1} align="right">
                    <ThemeToggle/>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
