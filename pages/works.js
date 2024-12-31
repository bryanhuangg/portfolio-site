import { Box, Button, Card, CardBody, Container, Flex, Heading, Image, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react'

import { FaGithub } from "react-icons/fa";
import SectionTransition from "../components/section-transition";
import styled from "@emotion/styled";

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

            <SectionTransition delay={0.1}>
                <Card p={3}>
                    <Flex direction={'row'}>
                        <Image
                            src='/images/works/hue-banner.png'
                            w={'125px'}
                            h={'200px'}
                            borderRadius={8}
                            boxShadow={'lg'}
                        />
                        <CardBody>
                            <Flex direction={'column'} h={'100%'} justify={'space-between'}>
                                <Box>
                                    <Link href={'https://chromewebstore.google.com/detail/hue-more-colors-for-googl/gglmljnnfgfkajefpbgjaeobelpokhbn'} target='_blank'>
                                        <Text textStyle={'subtitle'}> Hue: More Colors for Google Calendar</Text>
                                    </Link>

                                    <Text textStyle={'text'}>
                                        A Chrome extension designed to enhance and personalize your Google Calendar experience,
                                        currently with over 3000 active users.
                                    </Text>
                                </Box>

                                <Flex direction={'row'} mt={4}>
                                    <Button variant='solid' size={'sm'}>
                                        See More
                                    </Button>
                                    <Button leftIcon={<FaGithub size={'16px'} />} variant='ghost' size={'sm'} onClick={() => window.open('https://github.com/bryanhuangg/gcal-hue', '_blank')}>
                                        Source
                                    </Button>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Flex>

                </Card>
            </SectionTransition>
        </Container >
    )
}
export default Page