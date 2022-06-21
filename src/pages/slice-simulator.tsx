import { SliceSimulator } from '@prismicio/slice-simulator-react';
import { SliceZone } from '@prismicio/react';

import { components } from '../../slices/index';
import state from '../../.slicemachine/libraries-state.json';

const SliceSimulatorPage = () => (
  <SliceSimulator
    // The "sliceZone" prop should be a function receiving slices and rendering them using your "SliceZone" component.
    sliceZone={(props) => <SliceZone {...props} components={components} />}
    state={state}
  />
);

export default SliceSimulatorPage;

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true };
  } else {
    return { props: {} };
  }
};
