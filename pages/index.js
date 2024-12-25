import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    Container,
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Text,
    useColorModeValue,
    List,
    ListItem,

} from '@chakra-ui/react'
import styled from "@emotion/styled";
import SectionTransition from "../components/section-transition";
import { TbPinnedFilled } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";

const Page = () => {
    return (
        <Container>
            <SectionTransition delay={0}>

                <Card>
                    <CardBody>
                        <Flex align="center" mb={2}>
                            <TbPinnedFilled size={15} color={useColorModeValue('#394867', '#f2f2f0')} />
                            <Text textStyle={'title'} ml={1} fontSize={10} fontWeight={400}>
                                Pinned
                            </Text>
                        </Flex>

                        <Text textStyle={'subtitle'} color={useColorModeValue('#394867', '#f2f2f0')}>
                            About Me
                        </Text>
                        <Text textStyle={'text'} color={useColorModeValue('#212A3E', '#F4EEE0')} mt={1}>
                            Hello there, I'm Bryan! Currently, I am a student at the University of British Columbia studying
                            Computer Science as well as Economics. My passion for technology  started at a young age,
                            and I've been fascinated by how the power of software is able change the world ever since.
                            If you're looking for a driven, motivated software engineer to join your team, I'd love to
                            connect and see how I can help!
                        </Text>
                    </CardBody>
                </Card>
            </SectionTransition>


            <SectionTransition delay={0.1}>
                <Card>
                    <CardBody>
                        <Text textStyle={'subtitle'} color={useColorModeValue('#394867', '#f2f2f0')}>
                            Resume
                        </Text>
                        <Text textStyle={'text'} color={useColorModeValue('#212A3E', '#F4EEE0')} mt={1}>
                            View or download my resume to learn more about my work experience, education, and skills.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' size={'sm'}>
                                View
                            </Button>
                            <Button variant='ghost' size={'sm'}>
                                Download
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </SectionTransition>


            <SectionTransition delay={0.2}>
                <Card>
                    <CardBody>
                        <Text textStyle={'subtitle'} color={useColorModeValue('#394867', '#f2f2f0')}>
                            Website Source Code
                        </Text>
                        <Text textStyle={'text'} color={useColorModeValue('#212A3E', '#F4EEE0')} mt={1}>
                            See how I built this website by checking out the source code on my GitHub repository.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button
                            leftIcon={<IoLogoGithub size={18} />}
                            variant='solid'
                            size={'sm'}
                            onClick={() => window.open('https://github.com/bryanhuangg/portfolio-site', '_blank')}
                        >
                            Visit
                        </Button>
                    </CardFooter>

                </Card>
            </SectionTransition>
        </Container >
    )
}
export default Page