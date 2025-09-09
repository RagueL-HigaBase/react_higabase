import { Center, Image, PasswordInput, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import * as z from "zod";
import { useTranslation } from "react-i18next";
import { IconFlag, IconPasswordUser, IconUser } from "@tabler/icons-react";

export function LoginPage() {
    const { t, i18n } = useTranslation();
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            validate: {
                email: z.object({ email: z.email() }),
                password: z.object({ password: z.string().min(8).max(32)}),
                confirmPassword: z.object({ confirmPassword: z.string().min(8).max(32)})
            }
        }
    })
    return (
        <>
        <Center h={"100vh"}>
        <form style={{ width: "100%"}}>
        <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
            <Image w={"200"} src={"./logo_transparent.png"}/>
            <TextInput
                id="hover-me" 
                leftSection={<IconUser size={16}/>}
                label={t("auth.lb_email")} 
                labelProps={{ style: {textTransform: "uppercase", fontSize: 10.24 } }}
                placeholder={t("auth.ph_email")}
                type="email"
                w="100%" 
                autoComplete="email"
                key={form.key('email')} 
                {...form.getInputProps('email')}
            />
            <PasswordInput
                leftSection={<IconPasswordUser size={"16"}/>}
                label={t("auth.lb_password")}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24 } }}
                placeholder={t("auth.ph_password")}
                type="password"
                w={"100%"}
                autoComplete="new-password"
                key={form.key("password")}
                {...form.getInputProps("password")}
            />
            <PasswordInput 
                leftSection={<IconPasswordUser size={"16"}/>}
                label={t("auth.lb_repeatPassword")}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24} }}
                placeholder={t("auth.ph_repeatPassword")}
                type="password"
                w={"100%"} 
                autoComplete="new-password"
                key={form.key("confirmPassword")}
                {...form.getInputProps("confirmPassword")}
            />
            <Select
                leftSection={<IconFlag size={16}/>}
                label={t("lang")}
                w={"100%"}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24}}}
                placeholder="English"
                data={[
                    { value: "en", label: "English" },
                    { value: "nl", label: "Dutch" }
                ]}
                value={i18n.resolvedLanguage}
                onChange={(code) => code && i18n.changeLanguage(code)}
            />
        </Stack>
        </form>
        </Center>
        </>
    )
}