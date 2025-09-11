import { Center, Stack, Text } from "@mantine/core";
import { HigabaseLogo } from "../../../components/Logo/Logo";

export function CongratPage() {
    return (
        <>
        <Center h={"100vh"}>
            <Stack w={"100%"}>
                <HigabaseLogo/>
                <Text>

                Hello prom congratulation page
                </Text>
            </Stack>
        </Center>
        </>
    )
}