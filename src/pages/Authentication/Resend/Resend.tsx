import { Button, Center, Divider, Flex, Stack, Title } from "@mantine/core";
import { HigabaseLogo } from "../../../components/Logo/Logo";
import { MantineLanguageSelect } from "../../../locales/Topography/Topography";
import { ToggleScheme } from "../../../components/Styles/ToggleScheme/ToggleScheme";
import { useTranslation } from "react-i18next";
import { IconArrowRight } from "@tabler/icons-react";
import { HomeActionButton } from "../../../components/Button/Action/Home/Home";
import { RegisterActionButton } from "../../../components/Button/Action/Register/Register";
import { LoginActionButton } from "../../../components/Button/Action/Login/Login";

export function ResendPage() {
    const { t } = useTranslation()
    return (
        <>
        <Center h={"100vh"}>
            <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
            <HigabaseLogo/>
            <Title order={5}>{t("auth.title.get_started")}</Title>
            <Divider w={"100%"} label={<ToggleScheme/> }/>
            <MantineLanguageSelect/>
            <Button
                m={'md'}
                w={"100%"}
                variant="light"
                rightSection={<IconArrowRight size={16}/>}
            >{t("auth.button.continue_board")}</Button>
            <Divider
                w={"100%"} 
                label={ 
                <Flex justify={"center"} align={"center"} gap={"xs"}>
                    <HomeActionButton/>
                    <RegisterActionButton/>
                    <LoginActionButton/>
                </Flex> }
            ></Divider>
            </Stack>
        </Center>
        </>
    )
}