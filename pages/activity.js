import { Box, Button, Card, CardBody, Center, Container, Heading, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react'

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
                <Card>
                    <CardBody>
                        <Text textStyle={'subtitle'}>
                            Activity
                        </Text>
                        <Text textStyle={'text'}>
                            See what I've been up to recently!
                        </Text>
                    </CardBody>
                </Card>
            </SectionTransition>

            <SectionTransition delay={0.1}>
                <Center>
                    <Text textStyle={'text'} mt={10} mb={10}>
                        Nothing so far...
                    </Text>
                </Center>
            </SectionTransition>
        </Container >
    )
}
export default Page