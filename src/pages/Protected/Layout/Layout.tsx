import { AppShell, Flex, Image, Text } from '@mantine/core';
import { Outlet} from 'react-router';
import { NavbarMinimal } from '../Navigation/Navigation';
import { MenuUser } from '../../../components/Menu/Menu';
import "./Layout.css"
import { ToggleScheme } from '../../../components/Styles/ToggleScheme/ToggleScheme';



export function AppLayout() {
    return (
        <AppShell
        padding="xl"
        header={{ height: 60 }}
        navbar={{
            width: 80,
            breakpoint: "xl",
        }}
        >
        <AppShell.Header>
            <Flex justify={"space-between"} align={"center"} h={"100%"} p={25}>
                <Image w={28} src="./logo2.png" alt="Logo" draggable={false} />
                <Flex gap={"md"} align={"center"}>
                    <MenuUser/>
                    <ToggleScheme/>
                </Flex>
            </Flex>
        </AppShell.Header>

        <AppShell.Navbar>
            <NavbarMinimal/>
        </AppShell.Navbar>

        <AppShell.Main className='outlet'>
                <Outlet/>
        </AppShell.Main>
        <AppShell.Footer>
            <Text> Hello from fuuter</Text>
        </AppShell.Footer>
        </AppShell>
  );
}