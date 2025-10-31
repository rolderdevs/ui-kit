import { AppShell, ScrollArea, Stack, Title } from '@mantine/core';
import {
  IconAi,
  IconNotes,
  IconRocket,
  IconStatusChange,
} from '@tabler/icons-react';
import { useLocation } from '@tanstack/react-router';
import { NavbarLink, type NavbarLinkProps } from './NavbarLink';

const menu: NavbarLinkProps[] = [
  { label: 'О проекте', icon: IconNotes, pathname: '/' },
  { label: 'Быстрый старт', icon: IconRocket, pathname: '/quick-start' },
  {
    label: 'История изменений',
    icon: IconStatusChange,
    pathname: '/changelog',
  },
  {
    label: 'AI',
    icon: IconAi,
    childLinks: [
      { label: 'Обзор', pathname: '/ai' },
      { label: 'Streamdown', pathname: '/ai/streamdown' },
    ],
  },
];

export const Navbar = () => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  const links = menu.map((i) => (
    <NavbarLink
      {...i}
      defaultOpened={i.childLinks?.some((l) => l.pathname === pathname)}
      key={i.label}
    />
  ));

  return (
    <AppShell.Navbar>
      <AppShell.Section
        h={64}
        p="md"
        ta="center"
        pos="absolute"
        top={0}
        left={0}
        right={0}
        style={{
          zIndex: 1,
          borderBottom: '1px solid var(--app-shell-border-color)',
          backgroundColor:
            'color-mix(in srgb,var(--mantine-color-body),transparent 85%)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Title order={3}>Rolder UI Kit v3</Title>
      </AppShell.Section>

      <AppShell.Section grow component={ScrollArea} type="never">
        <Stack pt={88} pb="xl" gap={0}>
          {links}
        </Stack>
      </AppShell.Section>
    </AppShell.Navbar>
  );
};
