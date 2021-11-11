import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconGitHub } from './index';

export default {
  title: 'Developer DAO/00-components/Icons',
  component: IconGitHub,
} as Meta;

const Template: Story = (args) => <IconGitHub {...args} />;

export const IconGithub = Template.bind({});
