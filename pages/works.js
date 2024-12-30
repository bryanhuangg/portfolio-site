import { Container, Card, CardBody, Box, Heading, Text, useColorModeValue, List, ListItem, Button } from '@chakra-ui/react'
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
                <Card>
                    <CardBody>
                        <Text textStyle={'subtitle'}>
                            Works
                        </Text>
                        <Text textStyle={'text'}>
                            See my projects and products that I have worked on. These are a mix of personal projects, hackathons, and professional work.
                        </Text>
                    </CardBody>
                </Card>
            </SectionTransition>
        </Container >
    )
}
export default Page