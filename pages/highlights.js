import { Container, Box, Heading, Text, useColorModeValue, List, ListItem, Button } from '@chakra-ui/react'
import styled from "@emotion/styled";
import SectionTransition from "../components/section-transition";


const Title = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const Body = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const Page = () => {
    return (
        <Container>
            <SectionTransition delay={0}>
                <Heading as="h3" marginTop={10} >
                    <Title>
                        <Text color = {useColorModeValue('#394867', '#f2f2f0')}>
                            Highlights
                        </Text>
                    </Title>
                </Heading>
            </SectionTransition>
        </Container >
    )
}
export default Page