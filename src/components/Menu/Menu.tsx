import { Avatar, Menu, UnstyledButton } from "@mantine/core";
import { IconLock, IconLogout, IconSettings, IconUserCircle } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


export function MenuUser() {
    const { t } = useTranslation();
    const navigate = useNavigate()
    return (
        <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={500}>
            <Menu.Target>
                <UnstyledButton>
                    <Avatar color='blue' radius={"md"} size={32} ></Avatar>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>Profile</Menu.Label>
                <Menu.Item onClick={() => navigate("/profile" , { replace: true })} leftSection={<IconUserCircle stroke={1.3} size={16}/>}>{t("protected.user_menu_title.profile")}</Menu.Item>
                <Menu.Item leftSection={<IconLock stroke={1.3} size={16} />}>{t("protected.user_menu.security")}</Menu.Item>
                <Menu.Divider/>
                <Menu.Label>{t("protected.user_menu_title.system")}</Menu.Label> 
                <Menu.Item leftSection={<IconSettings stroke={1.3} size={16}/>}>{t("protected.user_menu.settings")}</Menu.Item>
                <Menu.Item leftSection={<IconLogout stroke={1.3} size={16}/>}>{t("protected.user_menu.log_out")}</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}