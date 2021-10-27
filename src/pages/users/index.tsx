import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue, IconButton } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/organisms/Header";
import { Pagination } from "../../components/organisms/Pagination/";
import { Sidebar } from "../../components/organisms/Sidebar";
import Link from 'next/link';

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justifyContent="space-between" alignContent="center">
                        <Heading as="h2" size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" cursor="pointer" leftIcon={<Icon as={RiAddLine} fontSize="20" />}> 
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={['4', '4', '6']} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                { isWideVersion && <Th>Data de Cadastro</Th> }
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Bruno Beneducci</Text>
                                        <Text fontSize="sm" color="gray.300">beneducci@gmail.com</Text>
                                    </Box>
                                </Td>
                                {
                                    isWideVersion && (
                                        <Td>
                                            04 de Abril, 2021
                                        </Td>
                                    )
                                }
                                <Td>
                                    { isWideVersion ? (
                                        <Button
                                            as="a"
                                            ml="auto"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="purple"
                                            cursor="pointer"
                                            leftIcon={<Icon as={RiPencilLine} />}
                                        > 
                                            Editar
                                        </Button>
                                    ) : (
                                        <IconButton
                                            colorScheme="purple"
                                            aria-label="User edit"
                                            icon={<Icon as={RiPencilLine}/>}
                                            fontSize="24"
                                            variant="solid"
                                        >
                                        </IconButton>
                                    )}
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Bruno Beneducci</Text>
                                        <Text fontSize="sm" color="gray.300">beneducci@gmail.com</Text>
                                    </Box>
                                </Td>
                                {
                                    isWideVersion && (
                                        <Td>
                                            04 de Abril, 2021
                                        </Td>
                                    )
                                }
                                <Td>
                                    { isWideVersion ? (
                                        <Button
                                            as="a"
                                            ml="auto"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="purple"
                                            cursor="pointer"
                                            leftIcon={<Icon as={RiPencilLine} />}
                                        > 
                                            Editar
                                        </Button>
                                    ) : (
                                        <IconButton
                                            colorScheme="purple"
                                            aria-label="User edit"
                                            icon={<Icon as={RiPencilLine}/>}
                                            fontSize="24"
                                            variant="solid"
                                        >
                                        </IconButton>
                                    )}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}