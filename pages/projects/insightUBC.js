import {Box, Button, Container, Heading, List, ListItem, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../../components/section-transition";
import Link from "next/link";
import {IoLogoGithub} from "react-icons/io5";
import {ExternalLinkIcon, Icon} from "@chakra-ui/icons";
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


const InsightUBC =()=> {
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
                            <Link href="https://github.com/bhuang-dev/portfolio-site" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="gray"
                                    leftIcon={<ExternalLinkIcon />}
                                    fontSize="lg"
                                    fontWeight="lighter"
                                >
                                    CPSC 310's Project Overview
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
                    My CPSC 310 term partner project (no public repository available due to course copyright policy).
                    We built a Type-script based query engine from scratch that is capable of searching through over 60,000
                    UBC course sections and 300+ rooms. The project involved us finding GPS coordinates through API calls,
                    parsing HTML (+ traversing its tree) and JSON, building a front-end, and more. See the official project overview for more details.
                </Body>
            </SectionTransition>


            <SectionTransition delay={0.25}>
                <Body>
                    <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                        <Icon as={BsStack} boxSize={4} mr={2} />
                        Stack
                    </Title>
                    <List borderLeftWidth={2} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                        <ListItem>
                            Typescript
                        </ListItem>
                        <ListItem>
                            Next.js for front-end
                        </ListItem>
                        <ListItem>
                            Node.js
                        </ListItem>
                        <ListItem>
                            Mocha.js
                        </ListItem>
                        <ListItem>
                            Chai.js
                        </ListItem>
                        <ListItem>
                            Js-zip and fs-extra for file operations
                        </ListItem>
                        <ListItem>
                            Yarn as package manager
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>
        </Container>
    )
}

export default InsightUBC