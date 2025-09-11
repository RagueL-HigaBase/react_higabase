import { ActionIcon, Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMail } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export function ResendActionButton() {
    const { t } = useTranslation();
    const [opened, { close, open }] = useDisclosure(false);

    return (
        <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
            <Popover.Target>
                <ActionIcon 
                onMouseEnter={open} 
                onMouseLeave={close} 
                component={Link} to={"/resend"}
                variant="default"
                style={{ fontSize: 12.8, fontWeight: 700}}
                >
                    <IconMail size={16} stroke={1.4}/>
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown style={{ pointerEvents: 'none', alignContent: "center"}}>
                <Text ta={"center"} style={{ fontSize: 12.4, fontWeight: 400}}>
                {t("button.popover.resend_action")}     
                </Text> 
            </Popover.Dropdown>
        </Popover>
    )
}