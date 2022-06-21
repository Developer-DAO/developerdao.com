import MyComponent from '../../../../slices/NavBar';

export default {
  title: 'slices/NavBar',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'nav_bar',
      items: [
        { links: { link_type: 'Web', url: 'http://twitter.com' } },
        { links: { link_type: 'Web', url: 'http://google.com' } },
        { links: { link_type: 'Web', url: 'http://google.com' } },
        { links: { link_type: 'Web', url: 'https://prismic.io' } },
        { links: { link_type: 'Web', url: 'https://prismic.io' } },
        { links: { link_type: 'Web', url: 'https://prismic.io' } },
        { links: { link_type: 'Web', url: 'http://twitter.com' } },
      ],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Disintermediate visionary applications',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Officia cupidatat esse in fugiat esse est aute enim nisi tempor qui est amet enim eu. Do anim do excepteur amet non enim.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
