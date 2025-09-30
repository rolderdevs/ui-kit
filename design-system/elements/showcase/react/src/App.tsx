import { Tabs } from '@rolder/ui-kit-react';
import './App.css';

const App = () => {
  return (
    <Tabs h="screen" orientation="horizontal" size="lg" defaultValue="vue">
      <Tabs.List>
        <Tabs.Trigger value="react">React</Tabs.Trigger>
        <Tabs.Trigger value="vue" disabled>
          Vue
        </Tabs.Trigger>
        <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
        <Tabs.Trigger value="svelte">Svelte</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="react">React Content</Tabs.Content>
      <Tabs.Content value="vue">Vue Content</Tabs.Content>
      <Tabs.Content value="solid">Solid Content</Tabs.Content>
      <Tabs.Content value="svelte">Svelte Content</Tabs.Content>
    </Tabs>
  );
};

export default App;
