import { Card, Container, Box, Heading, Text, useColorModeValue, List, ListItem, Button } from '@chakra-ui/react'
import styled from "@emotion/styled";
import SectionTransition from "../components/section-transition";

const Page = () => {
    return (
        <Container>
            <SectionTransition delay={0}>
                <Box p={'20px'} bg={'red'} borderRadius={10} boxShadow={'lg'} mt={3}>

                    <Text textStyle={'subtitle'} color={useColorModeValue('#394867', '#f2f2f0')}>
                        About Me
                    </Text>


                    <Text textStyle={'text'} color={useColorModeValue('#212A3E', '#F4EEE0')} marginTop={5}>
                        Hello there, I'm Bryan! Currently, I am a student at the University of British Columbia studying
                        Computer Science as well as Economics. My passion for technology  started at a young age,
                        and I've been fascinated by how the power of software is able change the world ever since.
                        If you're looking for a driven, motivated software developer/engineer to join your team, I'd love to
                        connect and see how I can help!
                    </Text>
                </Box>
            </SectionTransition>
        </Container >
    )
}
export default Page