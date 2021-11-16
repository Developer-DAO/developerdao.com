import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Nav from './index';

export default {
  title: 'Nav',
  component: Nav,
} as Meta;

const Template: Story = (args) => <Nav {...args} />;

export const NavigationLinks = Template.bind({});
NavigationLinks.args = {
  parameters: {
    nextRouter: {
      path: '/projects',
      asPath: '/projects',
      query: {
        id: 'projects',
      },
    },
  },
};
