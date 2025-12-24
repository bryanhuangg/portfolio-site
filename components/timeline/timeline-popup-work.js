import { Badge, Box, Button, Flex, Image, Link, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useTheme } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import { GoDotFill } from "react-icons/go";
import { MdRocketLaunch } from "react-icons/md";
import { useState } from 'react'

const TimelineWorkPopup = ({ isOpen, onClose, title, organization, date, description, images, videoUrl, techStack, organizationUrl, productUrl, contributions }) => {
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    const getEmbedUrl = (url) => {
        if (!url) return null;
        const videoId = url.split('v=')[1]?.split('&')[0];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    };

    const mediaItems = [
        ...(videoUrl ? [getEmbedUrl(videoUrl)] : []),
        ...(Array.isArray(images) ? images : [])
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
            <ModalContent bg={useColorModeValue(theme.colors.bgLight, theme.colors.bgDark)}>
                <ModalHeader>
                    <Text textStyle={'Title'}>{title}</Text>
                    <Text textStyle={'text'}>{organization}</Text>
                    <Text textStyle={'text'}>{date}</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>

                    {/* Gallery */}
                    {mediaItems.length > 0 && (
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
                                        transform={`translateX(calc(-${currentIndex} * (100% + 1rem)))`}
                                        transition="transform 0.3s ease-in-out"
                                        width="100%"
                                        gap={'1rem'}
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
                        </Flex>)}

                    {/* Description */}
                    <Text textStyle={'text'} mt={4}>
                        {description}
                    </Text>

                    {/* Buttons */}
                    {(organizationUrl || productUrl) && (
                        <Box mt={4}>
                            <Stack direction="row" spacing={2} justify={'center'}>
                                {organizationUrl && (
                                    <Button
                                        leftIcon={<FaExternalLinkAlt />}
                                        onClick={() => window.open(organizationUrl, '_blank')}
                                        size="sm"
                                        variant="solid"
                                    >
                                        Company Site
                                    </Button>
                                )}
                                {productUrl && (
                                    <Button 
                                        leftIcon={<MdRocketLaunch />}
                                        onClick={() => window.open(productUrl, '_blank')}
                                        size="sm"
                                        variant="ghost"
                                    >
                                        Product
                                    </Button>
                                )}
                            </Stack>
                        </Box>
                    )}

                    {/* Contributions */}
                    {contributions?.length > 0 && (
                        <Box
                            mt={6}
                            pt={4}
                            borderTop="1px"
                            borderColor={useColorModeValue("gray.200", "gray.600")}
                        >
                            <Text textStyle="subtitle" mb={3}>
                                Key Contributions
                            </Text>

                            <List spacing={2}>
                                {contributions.map((point, idx) => (
                                    <ListItem
                                        key={idx}
                                        display="flex"
                                        alignItems="flex-start"
                                        textStyle="text"
                                        fontSize="xs"
                                    >
                                        <ListIcon
                                            as={GoDotFill}
                                            mt="4px"
                                            flexShrink={0}
                                            color={useColorModeValue(
                                                theme.colors.customLight,
                                                theme.colors.customDark
                                            )}
                                        />
                                        <Text as="span">{point}</Text>
                                    </ListItem>
                                ))}
                            </List>

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

export default TimelineWorkPopup;