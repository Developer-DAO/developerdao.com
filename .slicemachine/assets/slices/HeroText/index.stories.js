import MyComponent from '../../../../slices/HeroText';

export default {
  title: 'slices/HeroText',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'hero_text',
      items: [],
      primary: {
        title: [
          { type: 'heading1', text: 'Expedite intuitive platforms', spans: [] },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Dolor duis consectetur quis voluptate esse magna commodo. Ad magna consectetur adipisicing est mollit ipsum incididunt aliqua enim commodo. Quis proident incididunt tempor quis esse duis veniam cillum nisi officia do officia aliquip.',
            spans: [],
          },
        ],
        seasonStatus: 'optimize B2C action-items',
        seasonStatusText: 'transition best-of-breed content',
        buttonText: 'expedite transparent schemas',
        heading: 'engineer user-centric channels',
        subheading: 'cultivate value-added architectures',
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
