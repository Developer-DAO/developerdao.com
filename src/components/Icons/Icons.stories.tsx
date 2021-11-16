import * as React from 'react';
import { VStack, Text, Grid } from '@chakra-ui/react';
import * as AllIcons from '.';
import { IconProps } from '@chakra-ui/icons';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Icons',
} as Meta;

const Icons = () => (
  <Grid gap="8" gridTemplateColumns={`repeat(auto-fill, minmax(8rem, 1fr))`}>
    {Object.entries(AllIcons).map(([key, value]) => {
      const IconComponent = value as React.FC<IconProps>;
      return (
        <React.Fragment key={key}>
          <VStack spacing="3">
            <IconComponent boxSize="40px" />
            <Text>{key}</Text>
          </VStack>
        </React.Fragment>
      );
    })}
  </Grid>
);

const Template: Story = (args) => <Icons {...args} />;

export const IconGrid = Template.bind({});
