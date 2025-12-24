import { Box, Button, Card, CardBody, Container, Flex, Heading, Image, Link, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'

import { FaGithub } from "react-icons/fa";
import SectionTransition from "../components/section-transition";
import WorkPopup from '../components/works/work-popup';
import styled from "@emotion/styled";

const Page = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                        <CardBody maxH={'200px'} overflow={'hidden'} ml={4}>
                            <Flex direction={'column'} h={'100%'} justify={'space-between'}>
                                <Box>
                                    <Link href={'https://chromewebstore.google.com/detail/hue-more-colors-for-googl/gglmljnnfgfkajefpbgjaeobelpokhbn'} target='_blank'>
                                        <Text textStyle={'subtitle'} noOfLines={1}>
                                            Hue: More Colors for Google Calendar
                                        </Text>
                                    </Link>

                                    <Text textStyle={'text'} noOfLines={4}>
                                        A Chrome extension designed to enhance and personalize your Google Calendar experience,
                                        currently with over 5000 active users.
                                    </Text>
                                </Box>

                                <Flex direction={'row'} mt={4}>
                                    <Button variant='solid' size={'sm'} onClick={onOpen}>
                                        See More
                                    </Button>
                                    <Button leftIcon={<FaGithub size={'16px'} />} variant='ghost' size={'sm'} ml={2} onClick={() => window.open('https://github.com/bryanhuangg/gcal-hue', '_blank')}>
                                        Source
                                    </Button>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Flex>
                </Card>
            </SectionTransition>

            <WorkPopup
                isOpen={isOpen}
                onClose={onClose}
                title={"Hue: More Colors for Google Calendar"}
                description={"A Chrome extension designed to enhance and personalize your Google Calendar experience by giving users full control over customizability options. " +
                    "Currently featured by the Chrome web store with over 5000 monthly active users."}
                techStack={["JavaScript", "React", "Node.js", "Webpack"]}
                images={['/images/works/hue-1.png', '/images/works/hue-2.png', '/images/works/hue-3.png']}
                videoUrl="https://www.youtube.com/watch?v=IeK7jb134XQ"
                githubUrl="https://github.com/bryanhuangg/gcal-hue"
                productUrl="https://chromewebstore.google.com/detail/hue-more-colors-for-googl/gglmljnnfgfkajefpbgjaeobelpokhbn"
            />
        </Container >
    )
}
export default Page