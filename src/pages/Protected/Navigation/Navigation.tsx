import { useState } from 'react';
import { IconDeviceDesktopAnalytics, IconGauge, IconHome2, IconLogout, IconSwitchHorizontal} from '@tabler/icons-react';
import { Divider, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './NavbarMinimal.module.css';
import { useNavigate } from 'react-router-dom';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    to?: string;
    onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, to,  onClick }: NavbarLinkProps) {
    const navigate = useNavigate()
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={() => (to ? navigate(to, {replace: true}) :  onClick)} className={classes.link} data-active={active || undefined}>
            <Icon size={18} stroke={1.5} />
        </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    { icon: IconGauge, label: 'Dashboard', navigate: "/dashboard" },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', navigate: "/dashboard" }
];

export function NavbarMinimal() {
    const [active, setActive] = useState(2);

    const links = mockdata.map((link, index) => (
        <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
        to={link.navigate}
        onClick={() => setActive(index)}
        />
    ));

    return (
        <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
            <Stack justify="center" gap={0}>
            {links}
            </Stack>
        </div>
        <Divider w={"100%"} mt={15} mb={15}/>
        <Stack justify="center" gap={0}>
            <NavbarLink icon={IconSwitchHorizontal} label="Profile" to="/dashboard"/>
            <NavbarLink icon={IconLogout} label="Logout" to="/dashboard"/>
        </Stack>
        </nav>
    );
}