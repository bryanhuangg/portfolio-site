import { Box, Button, Container, Heading, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react'

import SectionTransition from "../components/section-transition";
import styled from "@emotion/styled";

const Title = styled.span`
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