import { AppShell, type AppShellMainProps, Group, Title } from '@mantine/core';

interface PageProps extends AppShellMainProps {
  title?: string;
}

export const Page = (props: PageProps) => {
  const { title, children, ...rest } = props;

  return (
    <>
      <AppShell.Header
        style={{
          borderBottom: '1px solid var(--app-shell-border-color)',
          backgroundColor:
            'color-mix(in srgb,var(--mantine-color-body),transparent 85%)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Group h="100%" px="xl">
          {/*<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />*/}
          <Title>{title}</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Main {...rest}>{children}</AppShell.Main>
    </>
  );
};
