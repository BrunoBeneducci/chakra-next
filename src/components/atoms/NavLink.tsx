import { Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "toasted-notes/node_modules/@types/react";
import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            {/* ActiveLink - ATOMO */}
            <ChakraLink display="flex" alignItems="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}