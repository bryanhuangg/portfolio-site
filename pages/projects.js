import {Box, Container, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../components/section-transition";

const PressStart = styled.span`
  font-family: "Press Start 2P";
  justify-content: center;
  font-size: 10px;
  font-weight: lighter;
`
const Projects =()=> {
    return(
        <Container>
            <Text>
                <SectionTransition delay={0}>
                    <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')}
                         p={2} align = "center" mb={5}>
                        <PressStart>
                            <Text color = "#212A3E">
                                Projects I have worked on:
                            </Text>
                        </PressStart>
                    </Box>
                </SectionTransition>

                <PressStart>
                    <Text>
                        Sorry, this part of the site is still WIP! [Projects]
                    </Text>
                </PressStart>
            </Text>
        </Container>
    )
}

export default Projects