import { useState } from 'react';
import { IconDeviceDesktopAnalytics, IconGauge, IconHome2, IconLogout, IconSun, IconSwitchHorizontal} from '@tabler/icons-react';
import { Stack, Tooltip, UnstyledButton, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
            <Icon size={20} stroke={1.5} />
        </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' }
];

export function NavbarMinimal() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const [active, setActive] = useState(2);

    const links = mockdata.map((link, index) => (
        <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
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

        <Stack justify="center" gap={0}>
            <NavbarLink icon={IconSwitchHorizontal} label="Profile" />
            <NavbarLink icon={IconLogout} label="Logout" />
            <NavbarLink icon={IconSun} label="Theme" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}/>
        </Stack>
        </nav>
    );
}