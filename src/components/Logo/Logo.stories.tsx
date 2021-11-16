import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Logo from './index';

export default {
  title: 'Logo',
  component: Logo,
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const dark = Template.bind({});
