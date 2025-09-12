import { Select } from "@mantine/core";
import { IconFlag } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { lngProps } from "../../i18n";

export function MantineLanguageSelect() {
    const { t, i18n } = useTranslation();
    return (
        <Select
            leftSection={<IconFlag size={16} stroke={1.4}/>}
            label={t("default.select.language")}
            w={"100%"}
            labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24}}}
            placeholder="English"
            data={lngProps}
            value={i18n.resolvedLanguage}
            onChange={(code) => code && i18n.changeLanguage(code)}
        />
    )
}