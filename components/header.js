import Logo from './logo'
import {
    Container,
    Box,
    Heading,
    Flex,
} from '@chakra-ui/react'
import ThemeToggle from "./theme-toggle";


const Header = props => {
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

export default Header
