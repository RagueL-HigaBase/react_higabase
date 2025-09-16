import { AppShell, Avatar, Flex, Image, Text, UnstyledButton } from '@mantine/core';
import { Outlet } from 'react-router';
import { NavbarMinimal } from '../Navigation/Navigation';

export function AppLayout() {
    // const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
        padding="md"
        header={{ height: 60 }}
        navbar={{
            width: 80,
            breakpoint: "xl",
        }}
        >
        <AppShell.Header>
            <Flex justify={"space-between"} align={"center"} h={"100%"} p={25}>
                <Image w={32} src="./logo2.png" alt="Logo" draggable={false} />
                <Flex gap={"md"} align={"center"}>
                    <UnstyledButton>
                        <Avatar color='blue' radius={"md"} size={32} ></Avatar>
                    </UnstyledButton>
                </Flex>
            </Flex>
        </AppShell.Header>

        <AppShell.Navbar>
            <NavbarMinimal/>
        </AppShell.Navbar>

        <AppShell.Main>
                <Outlet/>
        </AppShell.Main>
        <AppShell.Footer>
            <Text> Hello from fuuter</Text>
        </AppShell.Footer>
        </AppShell>
  );
}