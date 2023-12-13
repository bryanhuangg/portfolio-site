import {Box, Button, Container, Heading, List, ListItem, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../components/section-transition";
import Link from "next/link";
import {IoLogoGithub, IoLogoLinkedin, IoMail} from "react-icons/io5";

const PressStart = styled.span`
  font-family: "Press Start 2P";
  justify-content: center;
  font-size: 10px;
  font-weight: lighter;
`
  const Body = styled.span` 
  font-family: "VT323";
  font-size: 18px;
  font-weight: lighter;
`

const Contact =()=> {
    return(
        <Container>
            <SectionTransition delay={0}>
                <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')}
                     p={2} align = "center" mb={5}>
                    <PressStart>
                        <Text color = "#212A3E">
                           Connect with me here:
                        </Text>
                    </PressStart>
                </Box>
            </SectionTransition>

            <SectionTransition delay={0.4}>
                <Box  marginTop={3} >
                    <Body>
                        <List>
                            <ListItem>
                                <Link href="https://github.com/bryanhuangg" target="_blank">
                                    <Button
                                        variant="ghost"
                                        colorScheme= "gray"
                                        leftIcon={<IoLogoGithub />}
                                        fontSize="xl"
                                        fontWeight="lighter"
                                    >
                                        /bryanhuangg
                                    </Button>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="https://www.linkedin.com/in/bryanhuangg/" target="_blank">
                                    <Button
                                        variant="ghost"
                                        colorScheme= "gray"
                                        leftIcon={<IoLogoLinkedin />}
                                        fontSize="xl"
                                        fontWeight="lighter"
                                    >
                                        /bryanhuangg
                                    </Button>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="mailto:bryanhuangg@gmail.com" target="_blank">
                                    <Button
                                        variant="ghost"
                                        colorScheme= "gray"
                                        leftIcon={<IoMail />}
                                        fontSize="xl"
                                        fontWeight="lighter"
                                    >
                                        bryanhuangg@gmail.com
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                    </Body>
                </Box>
            </SectionTransition>
        </Container>
    )
}

export default Contact