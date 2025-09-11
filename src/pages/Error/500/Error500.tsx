import { Center, Divider, Flex, Image, Stack, Title, useComputedColorScheme } from "@mantine/core";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { pageHeaders } from "../../../locales/Seo/Seo";
import { HomeActionButton } from "../../../components/Button/Action/Home/Home";

export function Error500() {
    const { t } = useTranslation()
    const colorSchema = useComputedColorScheme('light');
    const isDark = colorSchema === 'dark'
    useEffect(() => {
        pageHeaders(t("error.title.unknown"))
    }, [t])
    const logoSrc = isDark ? "./System/dark_500.png" : "./System/500.png"
    const illuSrc = isDark ? "./System/dark_500-illustration.png" : "./System/500-illustration.png"
    return (
        <>
        <Center h={"100vh"}>
            <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
            <Title order={5} ta={"center"}>{t("error.title.unknown")}</Title>
            <Image maw={150} src={logoSrc} alt="500"/>
            <Image h={"auto"} src={illuSrc} alt=" 500-illustration"/>
            <Title order={6} ta={"center"} >{t("error.pages.500")}</Title>
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