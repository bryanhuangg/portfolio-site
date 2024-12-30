import { Box, Button, Grid, Text } from "@chakra-ui/react"

import React from 'react'
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    return (
        <Box borderBottom="1px" borderColor="gray.200" mt={3} p={1} mb={3}>
            <Grid templateColumns="repeat(4, 1fr)" gap="6">

                <Button variant="ghost" onClick={() => router.push('/')}>
                    <Text textStyle={'subtitle'}>
                        Posts
                    </Text>
                </Button>

                <Button variant="ghost" onClick={() => router.push('/timeline')}>
                    <Text textStyle={'subtitle'}>
                        CV Timeline
                    </Text>
                </Button>

                <Button variant="ghost" onClick={() => router.push('/works')}>
                    <Text textStyle={'subtitle'}>
                        Works
                    </Text>
                </Button>

                <Button variant="ghost" onClick={() => router.push('/activity')}>
                    <Text textStyle={'subtitle'}>
                        Activity
                    </Text>
                </Button>
            </Grid>
        </Box>
    )
}

export default Navbar