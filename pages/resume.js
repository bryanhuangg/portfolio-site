import {Box, Button, Container, List, ListItem, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../components/section-transition";
import Link from "next/link";
import {IoDocument} from "react-icons/io5";

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

const Title = styled.span`
  font-family: "Press Start 2P";
  font-size: 13px;
  font-weight: normal;
`
const Resume =()=> {
    return(
        <Container>
            <SectionTransition delay={0}>
                <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')}
                     p={2} align = "center" mb={5}>
                    <PressStart>
                        <Text color = "#212A3E">
                            Download my official resume for a more detailed ver.
                        </Text>
                    </PressStart>
                </Box>
                <Body style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link href="resume2.pdf" download type="application/pdf">
                        <Button
                            variant="ghost"
                            colorScheme= "gray"
                            leftIcon={<IoDocument />}
                            fontSize="xl"
                            fontWeight="lighter"
                        >
                            Official Resume Download
                        </Button>
                    </Link>
                </Body>
            </SectionTransition>




            <SectionTransition delay={0.2}>
                <Title>
                    <Text color = {useColorModeValue('#394867', '#f2f2f0')}>
                        Work History
                    </Text>
                </Title>

                <Body>
                    <List color={useColorModeValue('#212A3E', '#F4EEE0')}>
                        <ListItem borderLeftWidth={3} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                            <Text fontFamily="Press Start 2P" fontSize={21} color = {useColorModeValue('#394867', '#f2f2f0')}>
                                CPSC 110 Teaching Assistant
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                UBC Department of Computer Science
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                September 2022 - Present
                            </Text>
                        </ListItem>

                        <ListItem borderLeftWidth={3} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                            <Text fontFamily="Press Start 2P" fontSize={21} color = {useColorModeValue('#394867', '#f2f2f0')}>
                                Private Tutor
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                Hillhouse Education
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                September 2022 - Present
                            </Text>
                        </ListItem>

                        <ListItem borderLeftWidth={3} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                            <Text fontFamily="Press Start 2P" fontSize={21} color = {useColorModeValue('#394867', '#f2f2f0')}>
                                Coding Instructor
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                Code Ninjas
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                June 2021 - September 2022
                            </Text>
                        </ListItem>

                        <ListItem borderLeftWidth={3} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                            <Text fontFamily="Press Start 2P" fontSize={21} color = {useColorModeValue('#394867', '#f2f2f0')}>
                                Notetaker
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                Centre for Accessibility at UBC
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                January 2022 - August 2022
                            </Text>
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>

            <SectionTransition delay={0.25}>
                <Title>
                    <Text color = {useColorModeValue('#394867', '#f2f2f0')}>
                        Education
                    </Text>
                </Title>

                <Body>
                    <List color={useColorModeValue('#212A3E', '#F4EEE0')}>
                        <ListItem borderLeftWidth={0} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                            <Text fontFamily="Press Start 2P" fontSize={21} color = {useColorModeValue('#394867', '#f2f2f0')}>
                                The University of British Columbia
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                Major in Computer Science and Economics
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                September 2021 - Present
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                4.33 major GPA / 4.2 cumulative GPA
                            </Text>
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>

            <SectionTransition delay={0.3}>
                <Title>
                    <Text color = {useColorModeValue('#394867', '#f2f2f0')}>
                        Awards
                    </Text>
                </Title>

                <Body>
                    <List color={useColorModeValue('#212A3E', '#F4EEE0')}>
                        <ListItem pl={3}>
                            <Text fontFamily="Press Start 2P" fontSize={21} color = {useColorModeValue('#394867', '#f2f2f0')}>
                                Chung Family Scholarship in Arts
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                               March 2023
                            </Text>
                        </ListItem>

                        <ListItem pl={3}>
                            <Text fontFamily="Press Start 2P" fontSize={21} color = {useColorModeValue('#394867', '#f2f2f0')}>
                                Dean’s List
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                May 2022
                            </Text>
                        </ListItem>

                        <ListItem pl={3}>
                            <Text fontFamily="Press Start 2P" fontSize={21} color = {useColorModeValue('#394867', '#f2f2f0')}>
                                BC Achievement Scholarship
                            </Text>
                            <Text style={{ marginTop: '-0.7rem' }}>
                                June 2021
                            </Text>
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>
        </Container>
    )
}

export default Resume