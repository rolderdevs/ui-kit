import { Text } from '@rolder/ui-kit-react';
import './App.css';

const App = () => {
  return (
    <div>
      <Text.H1 p={2} link href="https://example.com">
        H1
      </Text.H1>
      <Text.H2 p={2}>H2</Text.H2>
      <Text.H3 p={2}>H3</Text.H3>

      <Text.P2 muted p={2}>
        P2
      </Text.P2>
      <Text medium p={2}>
        DEFAULT
      </Text>
      <Text.P3 muted p={2}>
        P3
      </Text.P3>
      <Text.P4 muted p={2}>
        P4
      </Text.P4>
      <Text.P5 muted p={2}>
        P5
      </Text.P5>
    </div>
  );
};

export default App;
