import { Button, Center, Divider, Flex, Stack, TextInput, Title } from "@mantine/core";
import { HigabaseLogo } from "../../../components/Logo/Logo";
import { MantineLanguageSelect } from "../../../locales/Topography/Topography";
import { ToggleScheme } from "../../../components/Styles/ToggleScheme/ToggleScheme";
import { useTranslation } from "react-i18next";
import { IconArrowRight, IconMail } from "@tabler/icons-react";
import { HomeActionButton } from "../../../components/Button/Action/Home/Home";
import { RegisterActionButton } from "../../../components/Button/Action/Register/Register";
import { LoginActionButton } from "../../../components/Button/Action/Login/Login";
import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { validateResend } from "../../../validators/Resend/Resend.validat";
import { useEffect, useState } from "react";
import { pageHeaders } from "../../../locales/Seo/Seo";
// import { useDisclosure } from "@mantine/hooks";

export function ResendPage() {
    const { t } = useTranslation()
    const [email, setEmail] = useState('');
    // const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            hbEmail: ""
        },
        validate: zod4Resolver(validateResend),
        validateInputOnBlur: true,
        validateInputOnChange: true,
        clearInputErrorOnChange: true
    });
    useEffect(() => {
        const { hbEmail } = form.errors
        pageHeaders(t("auth.title.resend"));
        setEmail(typeof hbEmail === "string" ? t(hbEmail) : "");
    }, [t, form.errors])
    return (
        <>
        <Center h={"100vh"}>
        <form style={{ width: "100%"}}>
        <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
            <HigabaseLogo/>
            <Title order={5}>{t("auth.title.resend")}</Title>
            <Divider w={"100%"} label={<ToggleScheme/> }/>
            <MantineLanguageSelect/>
            <TextInput 
                leftSection={<IconMail size={16} stroke={1.4}/>}
                w={"100%"}
                label={t("auth.label.email")}
                labelProps={{ style: { textTransform: "uppercase", fontSize: 10.24}}}
                placeholder={t("auth.placeholder.email")}
                type="email"
                autoComplete="email"
                key={form.key('hbEmail')} 
                {...form.getInputProps('hbEmail')}
                error={email}
                
            ></TextInput>
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
                    <LoginActionButton/>
                </Flex> }
            ></Divider>
            {/* <Modal opened={opened} onClose={close}>
                <Alert variant="light" color="blue" title="Alert title" icon={<Icon123/>}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
                </Alert>
            </Modal> */}
        </Stack>
        </form>
        </Center>
        </>
    )
}