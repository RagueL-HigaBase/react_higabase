import { Button, Center, Divider, Flex, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useTranslation } from "react-i18next";
import { IconPasswordUser, IconUser, IconUserCheck } from "@tabler/icons-react";
import { ToggleScheme } from "../../../components/Styles/ToggleScheme/ToggleScheme";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { validateRegister } from "../../../validators/Register/Register.validate";
import { useEffect, useState } from "react";
import { MantineLanguageSelect } from "../../../locales/Topography/Topography";
import { localePageHeader, pageHeaders } from "../../../locales/Seo/Seo";
import { HigabaseLogo } from "../../../components/Logo/Logo";
import { HomeActionButton } from "../../../components/Button/Action/Home/Home";
import { LoginActionButton } from "../../../components/Button/Action/Login/Login";
import { ResendActionButton } from "../../../components/Button/Action/Resend/Resend";

export function RegisterPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
 
    const { t } = useTranslation();
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            hbEmail: "",
            hbPassword: "",
            hbConfirm: "",
        },
        validate:  zod4Resolver(validateRegister),
        validateInputOnBlur: true,
        validateInputOnChange: true,
        clearInputErrorOnChange: true,
    })
    
    useEffect(() => {
        pageHeaders(t('auth.title.get_started'), t('auth.page_desc_register'), localePageHeader());
        const { hbEmail, hbPassword, hbConfirm} = form.errors;
        setEmail(typeof hbEmail === 'string' ? t(hbEmail) : '');
        setPass(typeof hbPassword === 'string' ? t(hbPassword) : '');
        setConfirm(typeof hbConfirm === 'string' ? t(hbConfirm) : '')
    } , [form.errors, t])

    return (
        <>
        <Center h={"100vh"}>
        <form style={{ width: "100%"}} onSubmit={form.onSubmit((val) => console.log(val))}>
        <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
            <HigabaseLogo/>
            <Title order={5}>{t("auth.title.get_started")}</Title>
            <Divider w={"100%"} label={<ToggleScheme/> }/>
            <MantineLanguageSelect/>
            <TextInput
                leftSection={<IconUser size={16}/>}
                label={t("auth.label.email")} 
                labelProps={{ style: {textTransform: "uppercase", fontSize: 10.24 } }}
                placeholder={t("auth.placeholder.email")}
                type="email"
                w="100%" 
                autoComplete="email"
                key={form.key('hbEmail')} 
                {...form.getInputProps('hbEmail')}
                error={email}
            />
            <PasswordInput
                leftSection={<IconPasswordUser size={16}/>}
                label={t("auth.label.password")}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24 } }}
                placeholder={t("auth.placeholder.password")}
                type="password"
                w={"100%"}
                autoComplete="new-password"
                key={form.key("hbPassword")}
                {...form.getInputProps("hbPassword")}
                error={pass}
            />
            <PasswordInput 
                leftSection={<IconPasswordUser size={16}/>}
                label={t("auth.label.confirm")}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24} }}
                placeholder={t("auth.placeholder.confirm")}
                type="password"
                w={"100%"} 
                autoComplete="new-password"
                key={form.key("hbConfirm")}
                {...form.getInputProps("hbConfirm")}
                error={confirm}
            />
            <Button
                type="submit"
                m={'md'}
                w={"100%"}
                variant="light"
                leftSection={<IconUserCheck size={16}/>}
            >{t("auth.button.set_up")}</Button>
            <Divider
                w={"100%"} 
                label={ 
                <Flex justify={"center"} align={"center"} gap={"xs"}>
                    <HomeActionButton/>
                    <LoginActionButton/>
                    <ResendActionButton/>
                </Flex> }
            ></Divider>
        </Stack>
        </form>
        </Center>
        </>
    )
}