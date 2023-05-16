import {Image, Box, Button, Center, Container, Heading, List, ListItem, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../../components/section-transition";
import Link from "next/link";
import {IoLogoGithub} from "react-icons/io5";
import {Icon} from "@chakra-ui/icons";
import {BsStack} from "react-icons/bs";

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
  color: ${props => useColorModeValue("#212A3E", "#F4EEE0")};
`;

const Title = styled.span`
  font-family: "Press Start 2P";
  font-size: 13px;
  font-weight: normal;
`

const Platodoro=()=> {
    return(
        <Container>
            <SectionTransition delay={0}>
                <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')} p={2} align = "center" mb={5}>
                    <PressStart>
                        <Text color = "#212A3E">
                            Personal Project: Platodoro
                        </Text>
                    </PressStart>
                </Box>
            </SectionTransition>

            <SectionTransition delay={0.25}>
                <Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/bhuang-dev/platodoro" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="gray"
                                    leftIcon={<IoLogoGithub />}
                                    fontSize="lg"
                                    fontWeight="lighter"
                                >
                                    Project Repository
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>



            <SectionTransition delay={0.2}>
                <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                    Description
                </Title>
                <br/>
                <Body>
                    A simple pomodoro timer with a spinning platypus, for those who want to study with a friend. Uses
                    MagicaVoxel, much like this site, as well as Unity.
                </Body>
            </SectionTransition>


            <SectionTransition delay={0.25}>
                <Body>
                    <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                        Preview
                    </Title>
                    <Center mt={4}>
                        <Image src="/images/platodoro.gif" alt="Preview GIF" maxWidth="100%" />
                    </Center>
                </Body>
            </SectionTransition>

            <SectionTransition delay={0.3}>
                <Body>
                    <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                        Made with
                    </Title>
                    <List borderLeftWidth={2} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                        <ListItem>
                            Unity
                        </ListItem>
                        <ListItem>
                            C# (for scripts)
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>
        </Container>
    )
}

export default Platodoro