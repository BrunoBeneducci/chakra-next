import { Box, Text, Stack } from "@chakra-ui/react";
import { ReactNode } from "toasted-notes/node_modules/@types/react";

interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
    return (
        <Box>
            <Text
                fontWeight="bold"
                color="gray.400"
                fontSize="small"
                textTransform="uppercase"
            >
                
                {title}

                <Stack spacing="4" align="stretch" mt="8" textTransform="initial" color="gray.50">
                    {children}
                </Stack>

            </Text>
        </Box>
    )
}