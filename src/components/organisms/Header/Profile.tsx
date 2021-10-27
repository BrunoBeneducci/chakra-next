import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfile?: boolean;
}

export function Profile({ showProfile = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfile && (
                <Box mr="4" textAlign="right">
                    <Text>Bruno Beneducci</Text>
                    <Text color="gray.300" fontSize="small">beneducci@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="Bruno Beneducci" bg="pink.500" color="whiteAlpha.800"/>
        </Flex>
    );
}