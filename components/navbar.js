import React from 'react'
import { useRouter } from 'next/router';
import { Box, Button, Grid, Text } from "@chakra-ui/react"


const Navbar = () => {
    const router = useRouter();
    return (
        <Box borderBottom="1px" borderColor="gray.200" mt={4} p={1}>
            <Grid templateColumns="repeat(4, 1fr)" gap="6">

                <Button variant="ghost" onClick={() => router.push('/')}>
                    <Text textStyle={'subtitle'}>
                        Home
                    </Text>
                </Button>

                <Button variant="ghost" onClick={() => router.push('/timeline')}>
                    <Text textStyle={'subtitle'}>
                        CV Timeline
                    </Text>
                </Button>

                <Button variant="ghost" onClick={() => router.push('/works')}>
                    <Text textStyle={'subtitle'}>
                        Work
                    </Text>
                </Button>

                <Button variant="ghost" onClick={() => router.push('/posts')}>
                    <Text textStyle={'subtitle'}>
                        Posts
                    </Text>
                </Button>
            </Grid>
        </Box>
    )
}

export default Navbar