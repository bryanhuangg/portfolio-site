import {Container, Box, Heading, Text, useColorModeValue} from '@chakra-ui/react'
import Link from "next/link";
import styled from "@emotion/styled";
import SectionTransition from "../components/section-transition";

const Subtitle = styled.span`
  font-family: "Press Start 2P";
  font-size: 10px;
  font-weight: lighter;
`

const Title = styled.span`
  font-family: "Press Start 2P";
  font-size: 13px;
  font-weight: normal;
`

const Body = styled.span`
  font-family: "VT323";
  font-size: 18px;
  font-weight: lighter;
`

const Name = styled.span`
  font-family: "Press Start 2P";
  font-size: 25px;
  font-weight: bold;
  as: h2
`
const Page =()=> {
    return (
        <Container>
            <SectionTransition delay={0}>
            <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')}
            p={2} align = "center" mb={5}>
                <Subtitle>
                    <Text color = "#212A3E">
                        Hello, welcome to my portfolio website!
                    </Text>
                </Subtitle>
            </Box>

                <Box display ={{ md:'flex'}}>
                    <Box flexGrow={1}>
                        <Name>
                            <Text color = {useColorModeValue('#394867', '#f2f2f0')}>
                            Bryan Huang
                            </Text>
                        </Name>
                        <Subtitle>
                            <Text color = {useColorModeValue('#212A3E', '#F4EEE0')}>
                                Computer Science Student at UBC
                            </Text>
                        </Subtitle>
                    </Box>
                </Box>
            </SectionTransition>

            <SectionTransition delay={0.2}>
                <Heading as="h3" marginTop={10} textDecoration="underline" textDecorationThickness={2}>
                    <Title>
                        <Text color = {useColorModeValue('#394867', '#f2f2f0')}>
                         About Me
                        </Text>
                    </Title>
                </Heading>
                <Box  marginTop={3} >
                    <Body>
                        <Text color = {useColorModeValue('#212A3E', '#F4EEE0')}>
                            Hello there, I'm Bryan! Currently I am a university student at the University of British Columbia studying
                            Computer Science as well as Economics. My passion for technology  started at a young age,
                            and I've been fascinated by how the power of software is able change the world ever since.
                            If you're looking for a driven, motivated software developer/engineer to join your team, I'd love to
                            connect and see how I can help!
                        </Text>
                    </Body>
                </Box>
            </SectionTransition>

            <SectionTransition delay={0.3}>
                <Heading as="h3" marginTop={10} textDecoration="underline" textDecorationThickness={2}>
                    <Title>
                        <Text  color = {useColorModeValue('#394867', '#f2f2f0')}>
                            I Enjoy...
                        </Text>
                    </Title>
                </Heading>

                <Box  marginTop={3} >
                    <Body>
                        <Text color = {useColorModeValue('#212A3E', '#F4EEE0')}>
                            playing video games - camping - eating - breathing
                        </Text>
                        <Text fontSize={15} color = {useColorModeValue('#212A3E', '#F4EEE0')}>
                            (at least I'm aware that I'm boring)
                        </Text>
                    </Body>
                </Box>
            </SectionTransition>

            <SectionTransition delay={0.4}>
                <Heading as="h3" marginTop={10} textDecoration="underline" textDecorationThickness={2}>
                    <Title>
                        <Text color = {useColorModeValue('#394867', '#f2f2f0')}>
                            Connect With Me:
                        </Text>
                    </Title>
                </Heading>
                <Box  marginTop={3} >
                    <Body>
                        <Text color = {useColorModeValue('#212A3E', '#F4EEE0')}>
                            [...]
                        </Text>
                    </Body>
                </Box>
            </SectionTransition>
        </Container>
    )
}
export default Page