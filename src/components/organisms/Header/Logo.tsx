import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text as="a"
            href="/dashboard"
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64">
                dashgo
            <Text as="span" ml="1" color="pink.500">.</Text>
        </Text>
    );
}