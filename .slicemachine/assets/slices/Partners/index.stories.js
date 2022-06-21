import MyComponent from '../../../../slices/Partners';

export default {
  title: 'slices/Partners',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'partners',
      items: [
        {
          partnerImage: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop',
          },
        },
        {
          partnerImage: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop',
          },
        },
        {
          partnerImage: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop',
          },
        },
      ],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Productize open-source e-business',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Laborum do exercitation nulla consectetur tempor mollit deserunt cillum reprehenderit Lorem in consectetur ut eiusmod culpa.',
            spans: [],
          },
        ],
        PartnerButtonText: 'engineer cross-media e-commerce',
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
