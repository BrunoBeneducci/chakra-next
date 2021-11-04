import { Stack, Box } from "@chakra-ui/react";
import { PaginationButton } from "../atoms/PaginationButton";

export function Pagination() {
    return (
        <Stack
            direction={['column', 'row']}
            mt="8"
            justifyContent="space-between"
            alignContent="center"
            spacing="6"
        >
            <Box>
                <strong>0-10</strong> de <strong>100</strong>
            </Box>

            <Stack direction="row" spacing="2">
                <PaginationButton number={1} isCurrent/>
                <PaginationButton number={2}/>
                <PaginationButton number={3}/>
                <PaginationButton number={4}/>
                <PaginationButton number={5}/>
            </Stack>
        </Stack>
    )
}