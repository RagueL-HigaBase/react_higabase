import { ActionIcon, Anchor, Box, Flex, Image, rem, useComputedColorScheme, useSafeMantineTheme } from "@mantine/core";
import { localePageHeader, pageHeaders } from "../../locales/Seo/Seo";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ToggleScheme } from "../../components/Styles/ToggleScheme/ToggleScheme";
import { IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function HomePage() {
    const theme = useSafeMantineTheme();
    const isDark = useComputedColorScheme("light") === "dark";
    const { t } = useTranslation();

    useEffect(() => { 
        pageHeaders(t('auth.title.get_started'), t('auth.page_desc_register'), localePageHeader())

    }, [t]);
    return (
        <Box style={{ 
            borderBottomStyle: "solid", 
            borderBottomWidth: rem(1), 
            borderBottomColor: isDark ? theme.colors.dark[4] : theme.colors.gray[3]
            }}>
        <Flex justify={"space-between"} align={"center"} w={"100%"} pl={30} pr={30} pt={10} pb={10}>
            <Anchor component={Link} to="/" aria-label="Home" style={{ display: "inline-flex" }}>
                <Image w={33} src="./logo2.png" alt="Logo" draggable={false} />
            </Anchor>
            <Flex justify={"space-between"} align={"center"} w={"auto"} gap={"sm"}>
                <ToggleScheme/>
                <ActionIcon 
                    color="indigo"
                    variant="filled"
                    size="md"
                    aria-label="Toggle color scheme"
                    component={Link} to={'/login'}
                >
                    <IconUser style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
            </Flex>
        </Flex>
        </Box>
    )
}