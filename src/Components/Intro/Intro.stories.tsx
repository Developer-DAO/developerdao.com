import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Intro from './index';

export default {
  title: 'D_D/Intro',
  component: Intro,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Intro>;

const Template: ComponentStory<typeof Intro> = () => <Intro />;

export const Primary = Template.bind({});
