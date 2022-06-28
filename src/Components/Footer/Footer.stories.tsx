import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from './index';

export default {
  title: 'D_D/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});
