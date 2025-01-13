import { Badge, Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useTheme } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import { useState } from 'react'

const WorkPopup = ({ isOpen, onClose, title, description, images, videoUrl, techStack, productUrl, githubUrl}) => {
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    const getEmbedUrl = (url) => {
        if (!url) return null;
        const videoId = url.split('v=')[1]?.split('&')[0];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    };

    const mediaItems = [
        ...(videoUrl ? [getEmbedUrl(videoUrl)] : []),
        ...images
    ].filter(Boolean);

    const nextSlide = () => {
        setCurrentIndex((prev) => prev === mediaItems.length - 1 ? 0 : prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev === 0 ? mediaItems.length - 1 : prev - 1);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader><Text textStyle={'Title'}>{title}</Text></ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>

                    {/* Gallery */}
                    <Flex align="center" gap={4}>
                        <Button
                            onClick={prevSlide}
                            size="sm"
                            rounded="full"
                            bg={useColorModeValue("gray.200", "gray.600")}
                            opacity={0.8}
                            _hover={{ opacity: 1 }}
                        >
                            <ChevronLeftIcon />
                        </Button>

                        <Box flex="1">
                            <Flex
                                overflow="hidden"
                                position="relative"
                                borderRadius="lg"
                                boxShadow={'lg'}
                            >
                                <Flex
                                    transform={`translateX(-${currentIndex * 102}%)`}
                                    transition="transform 0.3s ease-in-out"
                                    width="100%"
                                    gap={4} 
                                >
                                    {mediaItems.map((item, idx) => (
                                        <Box
                                            key={idx}
                                            minW="100%"
                                            position="relative"
                                            pb="56.25%"
                                            overflow="hidden"
                                            borderRadius="lg"
                                            dropShadow="xl"
                                        >
                                            {item.includes('youtube.com/embed') ? (
                                                <iframe
                                                    src={item}
                                                    title="YouTube Video"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        border: 0,
                                                        borderRadius: '0.5rem'
                                                    }}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <Image
                                                    src={item}
                                                    alt={`Media ${idx + 1}`}
                                                    position="absolute"
                                                    top={0}
                                                    left={0}
                                                    w="100%"
                                                    h="100%"
                                                    objectFit="cover"
                                                    borderRadius="lg"
                                                />
                                            )}
                                        </Box>
                                    ))}
                                </Flex>
                            </Flex>

                            <Flex justify="center" mt={2}>
                                {mediaItems.map((_, idx) => (
                                    <Box
                                        key={idx}
                                        h={2}
                                        w={2}
                                        mx={1}
                                        borderRadius="full"
                                        bg={currentIndex === idx ? "blue.400" : "gray.300"}
                                        cursor="pointer"
                                        onClick={() => setCurrentIndex(idx)}
                                    />
                                ))}
                            </Flex>
                        </Box>

                        <Button
                            onClick={nextSlide}
                            size="sm"
                            rounded="full"
                            bg={useColorModeValue("gray.200", "gray.600")}
                            opacity={0.8}
                            _hover={{ opacity: 1 }}
                        >
                            <ChevronRightIcon />
                        </Button>
                    </Flex>

                    {/* Description */}
                    <Text textStyle={'text'} mt={6}>
                        {description}
                    </Text>

                    {/* Buttons */}
                    {(productUrl || githubUrl) && (
                        <Box mt={4}>
                            <Stack direction="row" spacing={2} justify={'center'}>
                                {productUrl && (
                                    <Button
                                        leftIcon={<FaExternalLinkAlt />}
                                        onClick={() => window.open(productUrl, '_blank')}
                                        size="sm"
                                        variant="solid"
                                    >
                                        View Work
                                    </Button>
                                )}
                                {githubUrl && (
                                    <Button
                                        leftIcon={<FaGithub />}
                                        onClick={() => window.open(githubUrl, '_blank')}
                                        size="sm"
                                        variant="ghost"
                                    >
                                        Source
                                    </Button>
                                )}
                            </Stack>
                        </Box>
                    )}

                    {/* Technologies */}
                    <Box mt={6} pt={4} borderTop="1px" borderColor={useColorModeValue("gray.200", "gray.600")}>
                        <Text textStyle={'subtitle'} mb={3}>Technologies</Text>
                        <Stack direction="row" spacing={2}>
                            {techStack?.map((tech, idx) => (
                                <Box
                                    key={idx}
                                    bg={useColorModeValue("gray.200", "gray.600")}
                                    px={3}
                                    py={1}
                                    borderRadius="md"
                                    fontSize="xs"
                                >
                                    {tech}
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default WorkPopup;