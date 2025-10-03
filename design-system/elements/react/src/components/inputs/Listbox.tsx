import {
  createListCollection,
  ListboxContent,
  ListboxEmpty,
  ListboxInput,
  ListboxItem,
  ListboxItemGroup,
  ListboxItemGroupLabel,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
  ListboxRoot,
  ListboxRootProvider,
  ListboxValueText,
} from '@ark-ui/react/listbox';
import { styled } from '@rolder/ss-react/jsx';

const Root = styled(ListboxRoot);
const Label = styled(ListboxLabel);
const Content = styled(ListboxContent);
const Item = styled(ListboxItem);
const ItemText = styled(ListboxItemText);
const ItemIndicator = styled(ListboxItemIndicator);
const ItemGroup = styled(ListboxItemGroup);
const ItemGroupLabel = styled(ListboxItemGroupLabel);
const Empty = styled(ListboxEmpty);
const Input = styled(ListboxInput);
const ValueText = styled(ListboxValueText);

export const Listbox = Object.assign(Root, {
  Label,
  Content,
  Item,
  ItemText,
  ItemIndicator,
  ItemGroup,
  ItemGroupLabel,
  Empty,
  Input,
  ValueText,
  Provider: ListboxRootProvider,
});

export { createListCollection };
