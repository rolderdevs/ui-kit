import { HStack } from '@rolder/ss-react/jsx';
import { Button, IconButton, Text } from '@rolder/ui-kit-react';
import { IconChevronDown, IconTrash } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <HStack m={10}>
      <Text.H1 span>
        H1
        <Text span link>
          SPAN
        </Text>
      </Text.H1>

      <IconButton size="sm">
        <IconTrash />
      </IconButton>
      <Button size="lg">
        <IconChevronDown />
        История изменений
      </Button>
    </HStack>
  );
}
