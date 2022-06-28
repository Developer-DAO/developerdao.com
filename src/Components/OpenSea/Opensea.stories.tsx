import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconOpenSea as Opensea } from './index';

export default {
  title: 'D_D/Opensea',
  component: Opensea,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Opensea>;

const Template: ComponentStory<typeof Opensea> = () => <Opensea />;

export const Primary = Template.bind({});
