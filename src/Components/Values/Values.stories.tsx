import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Values from './index';

export default {
  title: 'D_D/Values',
  component: Values,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Values>;

const Template: ComponentStory<typeof Values> = () => <Values />;

export const Primary = Template.bind({});
