import NextLink from 'next/link'
import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay, useColorModeValue} from '@chakra-ui/react'

import { Global } from '@emotion/react'

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox
            as={NextLink}
            href={`/projects/${id}`}
            scroll={false}
            cursor="pointer"
        >
            <div style={{ backgroundColor: useColorModeValue('#e8effa', '#fffdf7') }}>
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    style={{
                        width: '180px',
                        height: '120px',
                        objectFit: 'cover'
                    }}
                    placeholder="blur"
                />
            </div>


            <LinkOverlay as="div" href={`/projects/${id}`}>
                <Text mt={2} fontSize={25} fontFamily="VT323">
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontFamily="VT323" fontSize={15} color = {useColorModeValue('#212A3E', '#F4EEE0')}>{children} </Text>
        </LinkBox>
    </Box>
)

