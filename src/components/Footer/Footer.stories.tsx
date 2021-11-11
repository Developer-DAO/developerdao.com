import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from './index';

export default {
  title: 'Developer DAO/00-components/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
