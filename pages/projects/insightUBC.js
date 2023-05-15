import {Box, Button, Container, Heading, List, ListItem, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../../components/section-transition";

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

const InsightUBC =()=> {
    return(
        <Container>
            <SectionTransition delay={0}>
                <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')}
                     p={2} align = "center" mb={5}>
                    <PressStart>
                        <Text color = "#212A3E">
                            InsightUBC
                        </Text>
                    </PressStart>
                </Box>
            </SectionTransition>
        </Container>
    )
}

export default InsightUBC