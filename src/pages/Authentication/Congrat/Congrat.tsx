import { Center, Divider, Flex, Image, Stack, Title, useComputedColorScheme } from "@mantine/core";
import { HigabaseLogo } from "../../../components/Logo/Logo";
import { ToggleScheme } from "../../../components/Styles/ToggleScheme/ToggleScheme";
import { HomeActionButton } from "../../../components/Button/Action/Home/Home";
import { LoginActionButton } from "../../../components/Button/Action/Login/Login";
import { ResendActionButton } from "../../../components/Button/Action/Resend/Resend";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { localePageHeader, pageHeaders } from "../../../locales/Seo/Seo";
import { useLocation } from "react-router";

type LocationState = { hbEmail: string };

export function CongratPage() {
    const { t } = useTranslation();
    const location = useLocation();
    const state = location.state as LocationState | null;
    let email: string = ''
    if (state !== null) {
        email = state.hbEmail;
    } else {
        email = ''
    }

    const colorSchema = useComputedColorScheme('light');
    const isDark = colorSchema === 'dark';
    useEffect(() => {
        pageHeaders(t('auth.title.congrat'), t('auth.description.confirm'), localePageHeader());
    });
    const illuSrc = isDark ? "./System/dark_16.png" : "./System/16.png";

    return (
        <>
        <Center h={"100vh"}>
            <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx={"auto"} align="center">
                <HigabaseLogo/>
                <Title order={5}>{t("auth.title.congrat") }</Title>
                <Divider w={"100%"} label={<ToggleScheme/>}></Divider>
                <Image h={"auto"} src={illuSrc} alt=" 404-illustration"/>
                <Title ta={"center"} order={5} c={"blue.6"}>{email}</Title>
                <Title ta={"center"} order={6}>{t("auth.description.confirm")}</Title>
                <Divider 
                w={"100%"}
                label={ 
                <Flex align={"center"} justify={"center"} gap={"xs"}>
                    <HomeActionButton/>
                    <LoginActionButton/>
                    <ResendActionButton/>
                </Flex>
                }>
                </Divider>
            </Stack>
        </Center>
        </>
    )
}