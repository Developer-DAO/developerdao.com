import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Partners from './index';

export default {
  title: 'D_D/Partners',
  component: Partners,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Partners>;

const Template: ComponentStory<typeof Partners> = () => <Partners />;

export const Primary = Template.bind({});
