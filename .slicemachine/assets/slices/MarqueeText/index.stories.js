import MyComponent from '../../../../slices/MarqueeText';

export default {
  title: 'slices/MarqueeText',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'marquee_text',
      items: [
        { marqueeItem: 'engineer leading-edge communities' },
        { marqueeItem: 'visualize back-end convergence' },
        { marqueeItem: 'integrate bleeding-edge content' },
        { marqueeItem: 'generate bricks-and-clicks architectures' },
        { marqueeItem: 'drive customized markets' },
      ],
      primary: {
        title: [
          { type: 'heading1', text: 'Synergize one-to-one niches', spans: [] },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Reprehenderit ea deserunt laborum officia ad adipisicing ullamco eiusmod exercitation ullamco.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
