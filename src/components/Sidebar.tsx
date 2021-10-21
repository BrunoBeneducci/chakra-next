import { Flex, Text, Icon, Box, Stack, Link } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiNotificationLine, RiSearch2Line, RiUserAddLine } from 'react-icons/ri';

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text
                        fontWeight="bold"
                        color="gray.400"
                        fontSize="small"
                        textTransform="uppercase"
                    >
                        Geral
                        <Stack spacing="4" align="stretch" mt="8" textTransform="initial" color="gray.50">
                            <Link display="flex" alignItems="center">
                                <Icon as={RiDashboardLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Dashboard</Text>
                            </Link>

                            <Link display="flex" alignItems="center">
                                <Icon as={RiContactsLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Usuários</Text>
                            </Link>
                        </Stack>
                    </Text>
                </Box>

                <Box>
                    <Text
                        fontWeight="bold"
                        color="gray.400"
                        fontSize="small"
                        textTransform="uppercase"
                    >
                        Automação
                        <Stack spacing="4" align="stretch" mt="8" textTransform="initial" color="gray.50">
                            <Link display="flex" alignItems="center">
                                <Icon as={RiInputMethodLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Formulários</Text>
                            </Link>

                            <Link display="flex" alignItems="center">
                                <Icon as={RiGitMergeLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Automação</Text>
                            </Link>
                        </Stack>
                    </Text>
                </Box>
            </Stack>
        </Box>
    )
}