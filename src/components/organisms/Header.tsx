import { Text, HStack } from "@chakra-ui/react";
import { Flex, useBreakpointValue, IconButton, Icon, Box, Avatar } from "@chakra-ui/react";
import { RiMenuLine, RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SearchBox } from "../molecules/SearchBox";

export function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
          w="100%"
          maxW={1480}
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center"
        >
            {/* ICON MENU MOBILE */}
            {!isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >
                </IconButton>
            )}

            {/* LOGO */}
            <Text as="a"
                href="/dashboard"
                fontSize={['2xl', '3xl']}
                fontWeight="bold"
                letterSpacing="tight"
                w="64">
                    dashgo
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            {/* BUSCA - MOLECULA */}
            {isWideVersion && <SearchBox/> }

            {/* PERFIL */}
            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                    spacing={['6', '8']}
                    mx={['6', '8']}
                    pr={['6', '8']}
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>

                <Flex align="center">
                    {isWideVersion && (
                        <Box mr="4" textAlign="right">
                            <Text>Bruno Beneducci</Text>
                            <Text color="gray.300" fontSize="small">beneducci@gmail.com</Text>
                        </Box>
                    )}

                    <Avatar size="md" name="Bruno Beneducci" bg="pink.500" color="whiteAlpha.800"/>
                </Flex>

            </Flex>
        </Flex>
    )
}