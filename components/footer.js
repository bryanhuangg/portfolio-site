import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="xs" style={{ marginTop: '40px' }}>
            &copy; {new Date().getFullYear()} Bryan Huang. All Rights Reserved.
        </Box>
    )
}

export default Footer