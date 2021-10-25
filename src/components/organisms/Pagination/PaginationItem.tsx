import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isCurrent?: boolean;
    number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
    return (
        isCurrent ? 
        (
            <Button
            size="sm"
            fontSize="xs"
            w="4"
            colorScheme="pink"
            disabled
            _disabled={{ bg: 'pink.500', cursor: 'default' }}
            >
                {number}
            </Button>
        ) : (
            <Button
            size="sm"
            fontSize="xs"
            w="4"
            bg="gray.700"
            disabled
            _disabled={{ bg: 'gray.500' }}
            >
                {number}
            </Button>
        )
    )
}