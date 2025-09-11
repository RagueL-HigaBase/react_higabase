import { Center, Stack, Image, Title, useComputedColorScheme, Flex, Divider } from "@mantine/core";
import { useEffect } from "react";
import { pageHeaders } from "../../../locales/Seo/Seo";
import { useTranslation } from "react-i18next";
import { HomeActionButton } from "../../../components/Button/Action/Home/Home";


export function Error404() {
    const { t } = useTranslation()
    const colorSchema = useComputedColorScheme('light');
    const isDark = colorSchema === 'dark'
    useEffect(() => {
        pageHeaders(t("error.title.not_exist"))
    }, [t])
    const logoSrc = isDark ? "./System/dark_404.png" : "./System/404.png"
    const illuSrc = isDark ? "./System/dark_404-illustration.png" : "./System/404-illustration.png"
    return (
        <>
        <Center h={"100vh"}>
            <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
            <Title order={5} ta={"center"}>{t("error.title.not_exist")}</Title>
            <Image maw={150} src={logoSrc} alt="404"/>
            <Image h={"auto"} src={illuSrc} alt=" 404-illustration"/>
            <Title order={6} ta={"center"} >{t("error.pages.404")}</Title>
            <Divider w={"100%"} label= {
                <Flex justify={"center"} align={"center"} gap={"xs"}>
                    <HomeActionButton/>
                </Flex> 
            }>
            </Divider>
            </Stack>
        </Center>
        </>
    )
}