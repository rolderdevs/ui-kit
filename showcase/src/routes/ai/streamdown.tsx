import { Streamdown } from '@rolder/streamdown';
import { createFileRoute } from '@tanstack/react-router';
import { Page } from '@/components';

export const Route = createFileRoute('/ai/streamdown')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Page title="Streamdown">
      <Streamdown>Streamdown</Streamdown>
    </Page>
  );
}
