import {
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
import SectionTransition from "../components/section-transition";
import UserProfile from "../components/user-profile";

import { TbPinnedFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Page = () => {
    return (
        <Container>
            <SectionTransition delay={0}>
                <Card>
                    <CardBody>
                        <Flex align="center" mb={3}>
                            <UserProfile time={'2 days ago'} />
                            <Flex ml="auto" alignSelf="flex-start" alignItems="center">
                                <TbPinnedFilled size={15} color={useColorModeValue('#394867', '#f2f2f0')} />
                                <Text textStyle={'title'} ml={1} fontSize={10} fontWeight={400}>
                                    Pinned
                                </Text>
                            </Flex>
                        </Flex>

                        <Text textStyle={'subtitle'} color={useColorModeValue('#394867', '#f2f2f0')}>
                            About Me
                        </Text>

                        <Text textStyle={'text'} color={useColorModeValue('#212A3E', '#F4EEE0')} mt={1}>
                            Hello there, I'm Bryan! Currently, I am a student at the University of British Columbia studying
                            Computer Science as well as Economics. My passion for technology started at a young age,
                            and I've been fascinated by how the power of software is able to change the world ever since.
                            If you're looking for a driven, motivated software engineer to join your team, I'd love to
                            connect and see how I can help!
                        </Text>

                    </CardBody>
                </Card>
            </SectionTransition>

            <SectionTransition delay={0.1}>
                <Card>
                    <CardBody>
                        <UserProfile time={'10 hours ago'}/>
                        <Text textStyle={'subtitle'} mt={3} color={useColorModeValue('#394867', '#f2f2f0')}>
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
                        <UserProfile time={'22 hours ago'} />
                        <Text textStyle={'subtitle'} mt={3} color={useColorModeValue('#394867', '#f2f2f0')}>
                            Website Source Code
                        </Text>
                        <Text textStyle={'text'} color={useColorModeValue('#212A3E', '#F4EEE0')} mt={1}>
                            See how I built this website by checking out the source code in my GitHub repository.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button
                            leftIcon={<FaGithub size={'16px'}/>}
                            variant='solid'
                            size={'sm'}
                            alignContent={'center'}
                            onClick={() => window.open('https://github.com/bryanhuangg/portfolio-site', '_blank')}
                        >
                            Visit
                        </Button>
                    </CardFooter>
                </Card>
            </SectionTransition>
        </Container>
    )
}
export default Page