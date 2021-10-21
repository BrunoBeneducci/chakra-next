import { Stack, Button, Box } from "@chakra-ui/react";

export function Pagination() {
    return (
        <Stack
            direction="row"
            mt="8"
            justifyContent="space-between"
            alignContent="center"
            spacing="6"
        >
            <Box>
                <strong>0-10</strong> de <strong>100</strong>
            </Box>

            <Stack direction="row" spacing="2">
                <Button
                    size="sm"
                    fontSize="xs"
                    w="4"
                    colorScheme="pink"
                    disabled
                    _disabled={{ bg: 'pink.500', cursor: 'default' }}
                >
                    1
                </Button>

                <Button
                    size="sm"
                    fontSize="xs"
                    w="4"
                    bg="gray.700"
                    disabled
                    _disabled={{ bg: 'gray.500' }}
                >
                    2
                </Button>

                <Button
                    size="sm"
                    fontSize="xs"
                    w="4"
                    bg="gray.700"
                    disabled
                    _disabled={{ bg: 'gray.500' }}
                >
                    3
                </Button>
            </Stack>
        </Stack>
    )
}