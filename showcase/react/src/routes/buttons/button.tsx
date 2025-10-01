import { Button, Markdown } from '@rolder/ui-kit-react';
import { createFileRoute } from '@tanstack/react-router';
import { Page } from '@/components';
import description from './description.md';

export const Route = createFileRoute('/buttons/button')({
  component: RouteComponent,
});

console.log(description.replace(/\n+$/, ''));

function RouteComponent() {
  return (
    <Page title="Button">
      <Markdown>{description}</Markdown>
      <Button>я кнопка</Button>
    </Page>
  );
}
