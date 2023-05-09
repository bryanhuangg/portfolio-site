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

const LinkItem = ({href, path, target, children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
            <Link as = { NextLink }
                  p={2}
                  bg={active ? 'glassTeal' : undefined}
                  color={active ? '#202023' : inactiveColor}
                  href={href}
                  scroll={false}
                  target={target}
                  {...props}>
                  {children}
            </Link>
    )
}

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
    const githubImg = `/images/github${useColorModeValue('', '')}.png`
    return (
        <Box position="fixed"
             as="nav"
             w="100%"
             bg={useColorModeValue('#ffffff40', '#20202380')}
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

                        <LinkItem href="/about" path={path}>
                            About
                        </LinkItem>

                        <LinkItem href="https://github.com/bhuang-dev/portfolio-site">
                            <Inline>
                                <img src={githubImg} width={15} height={15} alt="logo" />
                            </Inline>
                        </LinkItem>
                    </ButtonFont>
                </Stack>
            </Container>
        </Box>
    )
}

export default Navbar
