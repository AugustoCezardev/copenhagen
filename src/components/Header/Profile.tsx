import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export default function Profile() {
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Augusto Cezar</Text>
                <Text color='gray.300' fontSize='small'>
                    augustocezaa@gmail.com
                </Text>
            </Box>
            <Avatar size='md' name='Augusto Cezar' src="https://avatars.githubusercontent.com/u/90658551?v=4"/>
        </Flex>
    );
}