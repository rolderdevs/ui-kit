import { Box } from '@rolder/ss-react/jsx';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return <Box m={10}>История изменений</Box>;
}
