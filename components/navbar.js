import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
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
import ModeButton from "./mode-button";

const LinkItem = ({href, path, target, children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('#394867', '#f2f2f0')
    return (
            <Link as = { NextLink }
                  p={2}
                  bg={active ? 'glassTeal' : undefined}
                  color={active ?  useColorModeValue('#212A3E', '#F4EEE0') : inactiveColor}
                  href={href}
                  scroll={false}
                  target={target}
                  {...props}>
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

const Inline = styled.span`
  display: inline-flex;
  align-items: center;
`

const Navbar = props => {
    const {path} = props
    const githubImg = `/images/github${useColorModeValue('-dark', '-light3')}.png`
    return (
        <Box position="fixed"
             as="nav"
             w="100%"
             bg={useColorModeValue('#e8effa', '#393646')}
             style={{backdropFilter: 'blur(10px'}}
             zIndex={1}
             {...props}
        >
            <Container display = "flex" p={1}
                       maxW = "container.md"
                       wrap = "wrap"
                       align = "center"
                       justify = "space-between">

                <Flex align="center" mr={8}>
                    <Heading as = "h1" size = "lg" letterSpacing = {'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{base:'column', md:'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems = "center"
                    flexGrow={1}
                    mt={{ base: -1}}
                >
                    <ButtonFont>
                        <LinkItem href="/projects" path={path}>
                            Projects
                        </LinkItem>

                        <LinkItem href="/resume" path={path}>
                            Resume
                        </LinkItem>

                        <LinkItem href="/contact" path={path}>
                            Contact
                        </LinkItem>

                        <LinkItem href="https://github.com/bhuang-dev/portfolio-site">
                            <Inline>
                                <img src={githubImg} width={15} height={15} alt="logo" />
                            </Inline>
                        </LinkItem>
                    </ButtonFont>
                </Stack>

                <Box flex={1} align="right">
                    <ModeButton/>
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>}
                                variant = "none"
                                aria-label = "Options"/>
                            <MenuList>
                                <ButtonFont>
                                    <MenuItem as={MenuForwardLink} href = "/">
                                        Home
                                    </MenuItem>
                                    <MenuItem as={MenuForwardLink} href = "/projects">
                                        Projects
                                    </MenuItem>
                                    <MenuItem as={MenuForwardLink} href = "/resume">
                                        Resume
                                    </MenuItem>
                                    <MenuItem as={MenuForwardLink} href = "/contact">
                                        Contact
                                    </MenuItem>
                                    <MenuItem as={MenuForwardLink} href = "https://github.com/bhuang-dev/portfolio-site">
                                        <img src={githubImg} width={18} height={18} alt="logo" />
                                    </MenuItem>
                                </ButtonFont>
                            </MenuList>
                        </Menu>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
