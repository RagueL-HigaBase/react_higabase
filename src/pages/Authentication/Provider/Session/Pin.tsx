import { Button, Center, Divider, Flex, PinInput, Stack, Title } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next"
import { HigabaseLogo } from "../../../../components/Logo/Logo";
import { HomeActionButton } from "../../../../components/Button/Action/Home/Home";
import { IconArrowRight } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { pinValidate } from "../../../../validators/Login/pin.validate";
import { ApiCallRegulations } from "../../../../store/regulation/regulation";
import { buildApiProtocol } from "../../../../store/comunication/api";
import type { SessionRegulation } from "../../../../store/regulation/session.regulation";


export function PinConfirmPage() {
    const { t } = useTranslation();
    const [submitting, setSubmitting] = useState(false);
    
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            hbPin: ""
        }, 
        validate: zod4Resolver(pinValidate),
        validateInputOnBlur: true,
        validateInputOnChange: true,
        clearInputErrorOnChange: true

    });

    const onSubmit = form.onSubmit( async (value) => {
        setSubmitting(true);
        const res = await buildApiProtocol<SessionRegulation>(ApiCallRegulations.LOGIN, {
            hbPin: value.hbPin
        });
        console.log(res.ok);
    }) 

    return (
        <form style={{ width: "100%"}} onSubmit={onSubmit}> 
            <Center h={"100vh"}>
                <Stack w={"100%"} maw={500} px={"xl"} gap={"xs"} mx="auto" align="center">
                <HigabaseLogo/>
                <Title order={5} ta={"center"}>{t("auth.title.pin_confirm")}</Title>
                <Divider w={"100%"} label= {
                    <Flex justify={"center"} align={"center"} gap={"xs"}>
                        <HomeActionButton/>
                    </Flex> 
                }>
                </Divider>
                <PinInput 
                    type={/^[0-9]*$/} 
                    inputType="tel" 
                    inputMode="numeric"
                    key={form.key("hbPin")}
                    {...form.getInputProps("hbPin")}
                />
                <Title order={6} ta={"center"} >{t("auth.description.confirm_pin")}</Title>

                <Button
                    disabled={!form.isValid() || submitting}
                    type="submit"
                    m={'md'}
                    w={"100%"}
                    variant="light"
                    rightSection={<IconArrowRight size={16}/>}
                >{t("auth.button.continue_board")}</Button>
            
                </Stack>
            </Center>
        </form>
    )
}