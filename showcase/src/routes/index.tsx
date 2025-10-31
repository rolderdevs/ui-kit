import { Streamdown } from '@rolder/streamdown';
import { createFileRoute } from '@tanstack/react-router';
import { Page } from '@/components';
import md from './index.md';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <Page title="О проекте">
      <Streamdown>{md}</Streamdown>
    </Page>
  );
}
