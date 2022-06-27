import MyComponent from '../../../../slices/SliceTest';

export default {
  title: 'slices/SliceTest',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'slice_test',
      items: [],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Syndicate bleeding-edge metrics',
            spans: [],
          },
          { type: 'heading1', text: 'Monetize efficient paradigms', spans: [] },
          { type: 'heading1', text: 'Iterate sticky metrics', spans: [] },
          {
            type: 'heading1',
            text: 'Envisioneer enterprise synergies',
            spans: [],
          },
          {
            type: 'heading1',
            text: 'Matrix plug-and-play channels',
            spans: [],
          },
          { type: 'heading1', text: 'Morph strategic e-tailers', spans: [] },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Eu esse laborum commodo officia enim anim officia eiusmod amet quis ut.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';