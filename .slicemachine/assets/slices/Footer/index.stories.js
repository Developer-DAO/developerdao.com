import MyComponent from '../../../../slices/Footer';

export default {
  title: 'slices/Footer',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'footer',
      items: [
        {
          linkHeadings: 'strategize customized e-markets',
          links: { link_type: 'Web', url: 'https://prismic.io' },
          icons: 'optimize cross-platform infrastructures',
        },
        {
          linkHeadings: 'streamline sticky action-items',
          links: { link_type: 'Web', url: 'https://slicemachine.dev' },
          icons: 'monetize user-centric infomediaries',
        },
        {
          linkHeadings: 'scale strategic experiences',
          links: { link_type: 'Web', url: 'https://prismic.io' },
          icons: 'facilitate dot-com experiences',
        },
      ],
      primary: {
        title: [
          { type: 'heading1', text: 'Whiteboard sexy niches', spans: [] },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Mollit nulla ad dolore do ullamco sit occaecat id minim. Reprehenderit esse fugiat nulla incididunt mollit officia. Sunt adipisicing id quis irure.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
