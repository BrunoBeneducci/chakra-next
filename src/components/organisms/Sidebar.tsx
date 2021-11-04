import { Box, Drawer, useBreakpointValue, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerBody, DrawerHeader, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { NavLink } from "../atoms/NavLink";
import { NavSection } from "../molecules/NavSection";

export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if(isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>
                            Navegação
                        </DrawerHeader>
                        
                        <DrawerBody>
                            
                            <Stack spacing="12" align="flex-start">
                                {/* NavSection - MOLECULA */}
                                <NavSection title="Geral">

                                    {/* NavLink - ATOMO */}
                                    <NavLink icon={RiDashboardLine} href="/dashboard">
                                        Dashboard
                                    </NavLink>

                                    {/* NavLink - ATOMO */}
                                    <NavLink icon={RiContactsLine} href="/users">
                                        Usuários
                                    </NavLink>
                                </NavSection>

                                <NavSection title="Automação">
                                    <NavLink icon={RiInputMethodLine} href="/forms">
                                        Formulários
                                    </NavLink>

                                    <NavLink icon={RiGitMergeLine} href="/automation">
                                        Automação
                                    </NavLink>
                                </NavSection>
                            </Stack>

                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="Geral">
                    <NavLink icon={RiDashboardLine} href="/dashboard">
                        Dashboard
                    </NavLink>

                    <NavLink icon={RiContactsLine} href="/users">
                        Usuários
                    </NavLink>
                </NavSection>

                <NavSection title="Automação">
                    <NavLink icon={RiInputMethodLine} href="/forms">
                        Formulários
                    </NavLink>

                    <NavLink icon={RiGitMergeLine} href="/automation">
                        Automação
                    </NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}