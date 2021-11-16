import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Page } from './Page';

export default {
  title: 'Getting started',
  component: Page,
} as Meta;

const Template: Story = (args) => <Page {...args} />;

export const GettingStarted = Template.bind({});
GettingStarted.args = {
  ...GettingStarted.args,
};
