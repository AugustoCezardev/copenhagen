import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import {ElementType} from "react";

interface INavLinkProps extends LinkProps {
    icon: ElementType;
    children: string;
}

export default function NavLink({icon, children, ...rest}: INavLinkProps) {
    return(
        <Link display='flex' {...rest}>
            <Icon as={icon} fontSize='20'/>
            <Text ml='4' fontWeight='medium'>{children}</Text>
        </Link>
    );
}