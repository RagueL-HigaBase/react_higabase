import { Button, Center, Divider, Flex, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useTranslation } from "react-i18next";
import { IconArrowRight, IconPasswordUser, IconUser } from "@tabler/icons-react";
import { ToggleScheme } from "../../../components/Styles/ToggleScheme/ToggleScheme";
import { validateLogin } from "../../../validators/Login/Login.validate";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { useEffect, useState } from "react";
import { MantineLanguageSelect } from "../../../locales/Topography/Topography";
import { localePageHeader, pageHeaders } from "../../../locales/Seo/Seo";
import { HigabaseLogo } from "../../../components/Logo/Logo";
import { HomeActionButton } from "../../../components/Button/Action/Home/Home";
import { ResendActionButton } from "../../../components/Button/Action/Resend/Resend";
import { RegisterActionButton } from "../../../components/Button/Action/Register/Register";

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const { t } = useTranslation();
    const form = useForm({
        initialValues: {
            hbEmail: "",
            hbPassword: "",
            hbConfirmPassword: "",
        },
        validate: zod4Resolver(validateLogin),
        validateInputOnBlur: true,
        validateInputOnChange: true,
        clearInputErrorOnChange: true

    })
    useEffect(() => {
        pageHeaders(t('auth.title.sing_in'), t('auth.page_desc_register'), localePageHeader());
        const { hbEmail, hbPassword} = form.errors;
        setEmail(typeof hbEmail === 'string' ? t(hbEmail): '')
        setPass(typeof hbPassword === 'string' ? t(hbPassword) : '')
    }, [form.errors, t]);

    return (
        <>
        <Center h={"100vh"}>
        <form style={{ width: "100%"}} onSubmit={form.onSubmit(val => console.log(val))}>
        <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
            <HigabaseLogo/>
            <Title order={5}>{t("auth.title.sing_in")}</Title>
            <Divider w={"100%"} label={<ToggleScheme/>}/>
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
                leftSection={<IconPasswordUser size={"16"}/>}
                label={t("auth.label.password")}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24 } }}
                placeholder={t("auth.placeholder.password")}
                type="password"
                w={"100%"}
                autoComplete="password"
                key={form.key("hbPassword")}
                {...form.getInputProps("hbPassword")}
                error={pass}
            />
            <Button
                m={'md'}
                w={"100%"}
                variant="light"
                rightSection={<IconArrowRight size={16}/>}
            >{t("auth.button.continue_board")}</Button>
            <Divider
                w={"100%"} 
                label={ 
                <Flex justify={"center"} align={"center"} gap={"xs"}>
                    <HomeActionButton/>
                    <RegisterActionButton/>
                    <ResendActionButton/>
                </Flex> }
            ></Divider>
            </Stack>
        </form>
        </Center>
        </>
    )
}