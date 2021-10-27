import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement } from 'react';
import { ReactElement } from 'toasted-notes/node_modules/@types/react';

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
}

export function ActiveLink({ children, ...rest }:ActiveLinkProps) {
    const { asPath } = useRouter();

    let isActive = false;

    if(asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as) )) {
        isActive = true;
        console.log('! shouldMatchExactHref !');
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}