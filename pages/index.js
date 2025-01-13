import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Container,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure,
    useTheme,
    useToast
} from '@chakra-ui/react'

import { FaFile } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import SectionTransition from "../components/section-transition";
import { TbPinnedFilled } from "react-icons/tb";
import UserProfile from "../components/user-profile";

const Page = () => {
    const toast = useToast()
    const theme = useTheme();
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container>
            <SectionTransition delay={0}>
                <Card>
                    <CardBody>
                        <Flex align="center" mb={3}>
                            <UserProfile time={'2 days ago'} />
                            <Flex ml="auto" alignSelf="flex-start" alignItems="center">
                                <TbPinnedFilled size={15} color={useColorModeValue(theme.colors.customLight, theme.colors.customDark)} />
                                <Text textStyle={'title'} ml={1} fontSize={10} fontWeight={400}>
                                    Pinned
                                </Text>
                            </Flex>
                        </Flex>

                        <Text textStyle={'subtitle'}>
                            About Me
                        </Text>

                        <Text textStyle={'text'} mt={1}>
                            Hi, I’m Bryan! I’m a 4th-year Computer Science and Economics student at the University of British Columbia 
                            with a passion for software development. I thrive on opportunities to learn, grow, and take on new challenges. 
                            Over the years, I’ve worked on a wide range of projects—from web development to software solutions for space 
                            technologies—sharpening my skills and fueling my love for innovation and problem-solving. Always excited for what’s next!
                        </Text>

                    </CardBody>
                </Card>
            </SectionTransition>

            <SectionTransition delay={0.1}>
                <Card>
                    <CardBody>
                        <UserProfile time={'10 hours ago'} />
                        <Text textStyle={'subtitle'} mt={3}>
                            Resume
                        </Text>
                        <Text textStyle={'text'} mt={1}>
                            View or download my resume to learn more about my work experience, education, and skills.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button
                                variant='solid'
                                size={'sm'}
                                onClick={onOpen}
                            >
                                View
                            </Button>
                            <Button
                                as="a"
                                href="/Resume.pdf"
                                download
                                variant='ghost'
                                size={'sm'}
                                onClick={() => {
                                    toast({
                                        description: 'Resume downloaded',
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                        position: 'bottom-right',
                                        variant: 'subtle',
                                        colorScheme: 'blue',
                                    })
                                }}
                            >
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
                        <Text textStyle={'subtitle'} mt={3}>
                            Website Source Code
                        </Text>
                        <Text textStyle={'text'} mt={1}>
                            See how I built this website by checking out the source code in my GitHub repository. (All the art was made by me too!)
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button
                            leftIcon={<FaGithub size={'16px'} />}
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


            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent bg={useColorModeValue(theme.colors.bgLight, theme.colors.bgDark)}>
                    <ModalHeader>
                        <Box display="flex" alignItems="center">
                            <FaFile color={useColorModeValue(theme.colors.customLight, theme.colors.customDark)} />
                            <Text textStyle={'title'} ml={2}>
                                Resume
                            </Text>
                        </Box>
                        <Text textStyle={'subtitle'}>
                            View my full experience in the CV timeline section
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <iframe
                            src="/Resume.pdf"
                            style={{ width: '100%', height: '75vh', borderRadius: '0.375rem' }}
                        />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    )
}
export default Page