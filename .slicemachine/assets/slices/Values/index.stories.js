import MyComponent from '../../../../slices/Values';

export default {
  title: 'slices/Values',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'values',
      items: [
        {
          title: 'scale compelling e-markets',
          text: 'monetize back-end models',
          description: 'monetize robust technologies',
        },
        {
          title: 'target collaborative methodologies',
          text: 'morph cross-media e-tailers',
          description: 'strategize B2C systems',
        },
        {
          title: 'utilize intuitive supply-chains',
          text: 'streamline e-business platforms',
          description: 'drive leading-edge applications',
        },
      ],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Maximize leading-edge technologies',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Sunt voluptate tempor aliqua ex eiusmod et id officia esse ipsum ipsum veniam occaecat pariatur.',
            spans: [],
          },
        ],
        ValuesText: [
          {
            type: 'paragraph',
            text: 'Culpa aute amet adipisicing esse pariatur. Do do pariatur amet dolor et adipisicing ad. Adipisicing laborum cillum ex nostrud sint velit sint nulla irure fugiat.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
