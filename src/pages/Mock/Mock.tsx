import { Center, Divider, Flex, Image, Stack, Title, useComputedColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { pageHeaders } from "../../locales/Seo/Seo";
import { HomeActionButton } from "../../components/Button/Action/Home/Home";
import { useLocation } from "react-router-dom";
import { HigabaseLogo } from "../../components/Logo/Logo";
import { LoginActionButton } from "../../components/Button/Action/Login/Login";
import { RegisterActionButton } from "../../components/Button/Action/Register/Register";

export function MockPage() {
    const location = useLocation();
    const  [message, setMessage ] = useState<string>('');
    const { t } = useTranslation()
    const colorSchema = useComputedColorScheme('light');
    const isDark = colorSchema === 'dark'
    useEffect(() => {
        setMessage(location.state.message as string);
        pageHeaders(t(message), t(message))
    }, [t, location, setMessage, message])
    const illuSrc = isDark ? "./System/dark_404-illustration.png" : "./System/404-illustration.png"
    return (
        <>
        <Center h={"100vh"}>
            <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
            <HigabaseLogo/>
            <Image h={"auto"} src={illuSrc} alt=" 500-illustration"/>
            <Title order={6} ta={"center"} >{t(message)}</Title>
            <Divider w={"100%"} label= {
                <Flex justify={"center"} align={"center"} gap={"xs"}>
                    <HomeActionButton/>
                    <LoginActionButton/>
                    <RegisterActionButton/>
                </Flex> 
            }>
            </Divider>
            </Stack>
        </Center>
        </>
    )
}