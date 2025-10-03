import { HStack } from '@rolder/ss-react/jsx';
import { Button, IconButton, TextOld, TextP3 } from '@rolder/ui-kit-react';
import { IconChevronDown, IconTrash } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <HStack m={10}>
      {/*<Text.H1 medium>Text H3</Text.H1>*/}
      <TextOld medium>Text OLD</TextOld>
      {/*<Text muted>Text Default</Text>*/}
      <TextP3 medium mt="70px">
        Text P3
      </TextP3>
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
