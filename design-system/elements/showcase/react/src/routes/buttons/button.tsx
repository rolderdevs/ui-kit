import { Button } from '@rolder/ui-kit-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/buttons/button')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Button m={10}>я кнопка</Button>;
}
