import { ActionIcon, Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUser } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export function RegisterActionButton() {
    const { t } = useTranslation();
    const [opened, { close, open }] = useDisclosure(false);

    return (
        <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
            <Popover.Target>
                <ActionIcon 
                onMouseEnter={open} 
                onMouseLeave={close} 
                component={Link} to={"/register"}
                variant="default"
                style={{ fontSize: 12.8, fontWeight: 700}}
                >
                    <IconUser size={16} stroke={1.4} />
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown style={{ pointerEvents: 'none', alignContent: "center"}}>
                <Text ta={"center"} style={{ fontSize: 12.4, fontWeight: 400}}>
                {t("button.popover.register_action")}     
                </Text> 
            </Popover.Dropdown>
        </Popover>
    )
}