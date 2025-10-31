import {
  AppShell,
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import mantineCss from '@mantine/core/styles.css?url';
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { Navbar } from '@/components';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Rolder UI Kit Showcase',
      },
      {
        name: 'description',
        content: 'Rolder UI Kit Showcase',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: mantineCss,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <AppShell
        layout="alt"
        header={{ height: 64 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
        }}
        padding="xl"
      >
        <Navbar />
        <Outlet />
      </AppShell>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <HeadContent />
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          {children}
          <Scripts />
        </MantineProvider>
      </body>
    </html>
  );
}
