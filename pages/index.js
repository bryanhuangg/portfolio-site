import {Container, Box, Heading, Text, useColorModeValue} from '@chakra-ui/react'
import Link from "next/link";
import styled from "@emotion/styled";

const Subtitle = styled.span`
  font-family: "Press Start 2P";
  
  font-size: 10px;
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
        </Container>
    )
}
export default Page