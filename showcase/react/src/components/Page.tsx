import { VStack, type VstackProps } from '@rolder/ss-react/jsx';
import { Text } from '@rolder/ui-kit-react';

interface PageProps extends VstackProps {
  title?: string;
}

export const Page = (props: PageProps) => {
  return (
    <VStack p={4} {...props}>
      <Text level="h1" medium compact>
        {props.title}
      </Text>
    </VStack>
  );
};
