import { Alert, Button, Center, Divider, Flex, Modal, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
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
import { ApiCallRegulations, type DataBaseProtocol } from "../../../store/regulation/regulation";
import { buildApiProtocol } from "../../../store/comunication/api";
import { useDisclosure } from "@mantine/hooks";
import type { TokenRegulation } from "../../../store/regulation/token.regulation";
import { useNavigate } from "react-router-dom";
import type { TokenAnalizer } from "../../../store/regulation/resent.regulation";

export function LoginPage() {
    const [modalMessage, setModalMessage] = useState('')
    const [opened, { open, close}] = useDisclosure(false);
    const [submitting, setSubmitting] = useState(false)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate()

    const { t } = useTranslation();
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            hbEmail: "",
            hbPassword: "",
        },
        validate: zod4Resolver(validateLogin),
        validateInputOnBlur: true,
        validateInputOnChange: true,
        clearInputErrorOnChange: true

    });
    const onSubmit = form.onSubmit( async (value) => {
        setSubmitting(true);
        const res: DataBaseProtocol<TokenRegulation> = await buildApiProtocol(ApiCallRegulations.LOGIN, {
            hbEmail: value.hbEmail,
            hbPassword: value.hbPassword,
        });
        if (res.ok) {
            navigate('/dashboard')
        } else {
            form.reset();
            setModalMessage(t(res.message));
            open();
            setSubmitting(false);
        };
        console.log(res)
    });
    useEffect(() => {
        let once = false;               
        (async () => {
            if (once) return; 
            once = true;
            const res = await buildApiProtocol<TokenAnalizer>(ApiCallRegulations.GUARD);
            if (res.ok) {
            navigate('/dashboard', { replace: true });
            }
        })();
    }, [navigate]);

    useEffect(() => {
        pageHeaders(t('auth.title.sing_in'), t('auth.description.sing_in'), localePageHeader());
        const { hbEmail, hbPassword} = form.errors;
        setEmail(typeof hbEmail === 'string' ? t(hbEmail): '')
        setPass(typeof hbPassword === 'string' ? t(hbPassword) : '')
    }, [form.errors, t]);
 

    return (
        <>
        <Modal opened={opened} onClose={close} title={`${t("auth.modal.err_not_compleeted")}`} >
            <Alert variant="light" color="red">{modalMessage}</Alert>
        </Modal>
        <Center h={"100vh"}>
        <form style={{ width: "100%"}} onSubmit={onSubmit}>
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
                disabled={!form.isValid() || submitting}
                type="submit"
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