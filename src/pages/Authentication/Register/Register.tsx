import { Anchor, Button, Center, Divider, Image, PasswordInput, Select, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useTranslation } from "react-i18next";
import { IconFlag, IconPasswordUser, IconUser, IconUserCheck } from "@tabler/icons-react";
import { ToggleScheme } from "../../../components/Styles/ToggleScheme/ToggleScheme";
import { Link } from 'react-router-dom';
import { zod4Resolver } from "mantine-form-zod-resolver";
import { validateRegister } from "../../../validators/Register/Register.validate";
import { useEffect, useState } from "react";

export function RegisterPage() {
    const [email, setEmail] = useState('');

    const { t, i18n } = useTranslation();
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            hbEmail: "",
            hbPassword: "",
            hbConfirmPassword: "",
        },
        validate:  zod4Resolver(validateRegister),
        validateInputOnBlur: true,
        validateInputOnChange: true,
        clearInputErrorOnChange: true,
    })
    
    useEffect(() => {
        const { hbEmail } = form.errors;
        if (typeof hbEmail === "string") {
            setEmail(t(hbEmail.toString()))
        }
        // if (hbPassword) {
        //     setEmail(t(hbPassword))
        // }
        // if (hbConfirmPassword) {
        //     setEmail(t(hbConfirmPassword))
        // }
    } , [form.errors, t])

    return (
        <>
        <Center h={"100vh"}>
        <form style={{ width: "100%"}} onSubmit={form.onSubmit((val) => console.log(val))}>
        <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
            <Image w={"250"} src={"./logo.png"}/>
            <Title order={6}>{t("auth.tl_create")}</Title>
            <Divider w={"100%"} label={<ToggleScheme/> }/>
            <Select
                leftSection={<IconFlag size={16}/>}
                label={t("lang")}
                w={"100%"}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24}}}
                placeholder="English"
                data={[
                    { value: "en", label: "English" },
                    { value: "nl", label: "Dutch" },
                    { value: "pl", label: "Polish" },
                    { value: "lv", label: "Latvian" },
                    { value: "lt", label: "Lithuanian" },
                ]}
                value={i18n.resolvedLanguage}
                onChange={(code) => code && i18n.changeLanguage(code)}
            />
            <TextInput
                leftSection={<IconUser size={16}/>}
                label={t("auth.lb_email")} 
                labelProps={{ style: {textTransform: "uppercase", fontSize: 10.24 } }}
                placeholder={t("auth.ph_email")}
                type="email"
                w="100%" 
                autoComplete="email"
                key={form.key('hbEmail')} 
                {...form.getInputProps('hbEmail')}
                error={email}
            />
            <PasswordInput
                leftSection={<IconPasswordUser size={16}/>}
                label={t("auth.lb_password")}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24 } }}
                placeholder={t("auth.ph_password")}
                type="password"
                w={"100%"}
                autoComplete="new-password"
                key={form.key("hbPassword")}
                {...form.getInputProps("hbPassword")}
            />
            <PasswordInput 
                leftSection={<IconPasswordUser size={16}/>}
                label={t("auth.lb_repeatPassword")}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24} }}
                placeholder={t("auth.ph_repeatPassword")}
                type="password"
                w={"100%"} 
                autoComplete="new-password"
                key={form.key("hbConfirmPassword")}
                {...form.getInputProps("hbConfirmPassword")}
            />
            <Button
                type="submit"
                m={'md'}
                w={"100%"}
                variant="light"
                leftSection={<IconUserCheck size={16}/>}
            >{t("auth.bt_create")}</Button>
            <Title order={6}>{t("auth.dv_aleary")}</Title>
            <Divider
                w={"100%"} 
                label={ <Anchor component={Link} to={"/login"} underline="never" style={{ fontSize: 12.8, fontWeight: 700}}> {t("auth.lb_login")} </Anchor> }
            ></Divider>
        </Stack>
        </form>
        </Center>
        </>
    )
}