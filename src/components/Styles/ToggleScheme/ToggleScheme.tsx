import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';


export function ToggleScheme() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="md"
        aria-label="Toggle color scheme"
        >
        {computedColorScheme === 'light' ? <IconSun stroke={1.5} size={16} /> : <IconMoon stroke={1.5} size={16}/>}
        </ActionIcon>
    );
}