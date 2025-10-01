import { Button, Markdown } from '@rolder/ui-kit-react';
import { createFileRoute } from '@tanstack/react-router';
import { Page } from '@/components';

export const Route = createFileRoute('/buttons/button')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Page title="Button">
      <Markdown># Markdown This is a markdown example.</Markdown>
      <Button>я кнопка</Button>
    </Page>
  );
}
