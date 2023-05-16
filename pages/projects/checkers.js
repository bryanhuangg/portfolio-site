import {Box, Button, Container, Heading, List, ListItem, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../../components/section-transition";
import Link from "next/link";
import {ExternalLinkIcon, Icon} from "@chakra-ui/icons";
import {BsStack} from "react-icons/bs";
import {IoLogoGithub} from "react-icons/io5";

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


const Checkers =()=> {
    return(
        <Container>
            <SectionTransition delay={0}>
                <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')} p={2} align = "center" mb={5}>
                    <PressStart>
                        <Text color = "#212A3E">
                            School Project: InsightUBC
                        </Text>
                    </PressStart>
                </Box>
            </SectionTransition>

            <SectionTransition delay={0.25}>
                <Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/bhuang-dev/cpsc210-checkers" target="_blank">
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
                   A Java implementation of the traditional Checkers board game built as part of my CPSC 210 term project.
                    I utilized fundamental Object-Oriented Programming (OOP) principles and a matrix data structure to build the game.
                    The graphical user interface (GUI) was designed and implemented using JFrame, and a 100% code coverage was achieved through a comprehensive JUnit test suite.
                </Body>
            </SectionTransition>


            <SectionTransition delay={0.25}>
                <Body>
                    <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                        Made With
                    </Title>
                    <List borderLeftWidth={2} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                        <ListItem>
                            Java
                        </ListItem>
                        <ListItem>
                            JFrame for the GUI
                        </ListItem>
                        <ListItem>
                            JUnit for testing
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>
        </Container>
    )
}

export default Checkers