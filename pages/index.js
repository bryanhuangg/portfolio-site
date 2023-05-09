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
            <Box borderRadius = "lg" bg = "red" p={3} align = "center" mb={6}>
                Hello, welcome to my portfolio!
            </Box>

                <Box display ={{ md:'flex'}}>
                    <Box flexGrow={1}>
                        <Name>
                            Bryan Huang
                        </Name>
                        <Subtitle>
                            <p>Computer Science Student at UBC </p>
                        </Subtitle>
                    </Box>
                </Box>
        </Container>
    )
}
export default Page