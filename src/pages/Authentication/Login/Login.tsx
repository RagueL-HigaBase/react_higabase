import { Center, Grid, Input } from "@mantine/core";
import { useForm } from '@mantine/form';
import * as z from "zod";

export function LoginPage() {
    const form = useForm({
        initialValues: {
            email: "",
            validate: {
                email: z.object({ email: z.email() })
            }
        }
    })
    return (
        <>
        <Center style={{ height: '100vh' }}>
            <Grid justify="center" style={{ width: '90%'}}>
                <Grid.Col span={{ base: 12, md: 3 }} >
                    <Input.Wrapper label="Email adress" style={{ textTransform: "uppercase" }} size="xs">
                        <Input placeholder="exemple@example.com" key={form.key('email')} {...form.getInputProps('email')}/>
                    </Input.Wrapper>
                </Grid.Col>
            </Grid>
        </Center>
        </>
    )
}