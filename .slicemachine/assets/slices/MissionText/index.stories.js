import MyComponent from '../../../../slices/MissionText';

export default {
  title: 'slices/MissionText',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'mission_text',
      items: [
        { goals: 'synergize e-business deliverables' },
        { goals: 'evolve enterprise vortals' },
        { goals: 'incentivize dynamic systems' },
      ],
      primary: {
        title: [
          { type: 'heading1', text: 'Morph collaborative metrics', spans: [] },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Exercitation occaecat laborum veniam laboris ad qui occaecat nisi eiusmod excepteur qui fugiat ad. Anim fugiat duis cillum amet pariatur labore dolor ex officia aliqua.',
            spans: [],
          },
        ],
        subHeading: 'morph sexy e-commerce',
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
