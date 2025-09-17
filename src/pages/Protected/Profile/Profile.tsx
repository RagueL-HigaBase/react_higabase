import { Grid } from "@mantine/core";
import { UserCard } from "../../../components/UserCard/UserCard";
export function ProfilePage() {
    return (
        <Grid>
            <Grid.Col span={3}><UserCard/></Grid.Col>
        </Grid>
    )
}