import { Avatar, Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';

const UserProfile = ({ time }) => {
    return (
        <Flex align="center">
            <Avatar
                width="30px"
                height="30px"
                src="/images/favicon.png"
                objectFit="cover"
            />
            <Box ml={2}>
                <Text textStyle={'subtitle'} fontSize={12} fontWeight={500}>
                    Bryan Huang
                </Text>
                <Text textStyle={'subtitle'} fontSize={10} fontWeight={400}>
                    @bryanhuangg • {time}
                </Text>
            </Box>
        </Flex>
    );
};

export default UserProfile;