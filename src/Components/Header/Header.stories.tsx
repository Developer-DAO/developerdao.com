import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './index';

export default {
  title: 'D_D/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Primary = Template.bind({});
