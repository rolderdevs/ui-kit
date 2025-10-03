import { createListCollection, Listbox } from '@rolder/ui-kit-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const collection = createListCollection({
    items: ['React', 'Solid', 'Vue', 'Svelte'],
  });

  return (
    <Listbox collection={collection}>
      <Listbox.Label>Select your Framework</Listbox.Label>
      <Listbox.Content>
        {collection.items.map((item) => (
          <Listbox.Item key={item} item={item}>
            <Listbox.ItemText>{item}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox>
  );
}
