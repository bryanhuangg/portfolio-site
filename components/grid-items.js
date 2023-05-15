import NextLink from 'next/link'
import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay, useColorModeValue, Button} from '@chakra-ui/react'

import { Global } from '@emotion/react'
import {IoCodeSlashOutline} from "react-icons/io5";

export const WorkGridItem = ({ children, id, title}) => (
    <Box w="100%" textAlign="center">
        <LinkBox
            as={NextLink}
            href={`/projects/${id}`}
            scroll={false}
            cursor="pointer"
        >

            <LinkOverlay as="div" href={`/projects/${id}`}>
                <Text mt={2} fontFamily="VT323">
                    <Button
                        variant="ghost"
                        colorScheme= "gray"
                        leftIcon={<IoCodeSlashOutline />}
                        fontWeight="lighter"
                        fontSize={25}
                    >
                        {title}
                    </Button>
                </Text>
            </LinkOverlay>
            <Text fontFamily="VT323" fontSize={15} color = {useColorModeValue('#212A3E', '#F4EEE0')}>{children} </Text>
        </LinkBox>
    </Box>
)

