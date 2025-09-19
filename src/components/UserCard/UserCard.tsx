import { Avatar, Button, Card, Group, Skeleton, Text } from '@mantine/core';
import classes from './UserCardImage.module.css';
import { useEffect, useState } from 'react';
import { buildApiProtocol } from '../../store/comunication/api';
import { ApiCallRegulations } from '../../store/regulation/endpoint.regulation';
import type { IdentityRegulation } from './UserRegulation';

const stats = [
  { value: '34K', label: 'Followers' },
  { value: '187', label: 'Follows' },
  { value: '1.6K', label: 'Posts' },
];

export function UserCard() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        ( async() => {
            const res = await buildApiProtocol<IdentityRegulation>(ApiCallRegulations.IDENTITY);
            if(res.ok) {
                setLoading(false);
                console.log(res.data.hbFirstName);
            }
        })();
    }, []);

    const items = stats.map((stat) => (
        <div key={stat.label}>
        <Text ta="center" fz="lg" fw={500}>
            {stat.value}
        </Text>
        <Text ta="center" fz="sm" c="dimmed" lh={1}>
            {stat.label}
        </Text>
        </div>
  ));

  return (
        <Card withBorder padding="xl" radius="md" className={classes.card}>
        <Card.Section
            h={140}
            style={{
            backgroundImage: "url(/Card/user_card.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        />
        <Skeleton visible={loading} circle height={80} width={80}  mx="auto">
            <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                size={80}
                radius={80}
                mx="auto"
                mt={-30}
                className={classes.avatar}
            />
        </Skeleton>
        <Text ta="center" fz="lg" fw={500} mt="sm">
            Bill Headbanger
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
            {}
        </Text>
        <Group mt="md" justify="center" gap={30}>
            {items}
        </Group>
        <Button fullWidth radius="md" mt="xl" size="sm" variant="default">
            Follow
        </Button>
        </Card>
    );
}