import { Button, Stack, type StackProps, Text, Title } from '@mantine/core';

interface Props extends StackProps {
  href?: string;
  gotoHomeComponent?: React.ReactNode;
}

export const Default404Page = ({
  href = '/',
  gotoHomeComponent,
  ...p
}: Props) => (
  <Stack align="center" justify="center" gap={0} ta="center" {...p}>
    <Text c="dimmed" fw="bold">
      404
    </Text>
    <Title textWrap="balance" size={65}>
      Страница не найдена
    </Title>
    <Title order={3} ml={4} textWrap="balance" c="dimmed">
      Извините, но здесь нет страницы. Возможно она перемещена.
    </Title>
    {gotoHomeComponent || (
      <Button mt="xl" component="a" size="lg" href={href}>
        На главную
      </Button>
    )}
  </Stack>
);
