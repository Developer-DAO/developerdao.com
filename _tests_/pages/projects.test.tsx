import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '@/pages/projects';
import testCommonLink from '../utils/testCommons';

test('Projects page renders with list of community projects', () => {
  render(<Projects />);

  const ddaoTokenSearch = screen.getByRole('link', {
    name: /ddaoTokenSearch/,
  });
  const ddaoTokenSearchCreator = screen.getByRole('link', {
    name: /Brian Eter/,
  });
  testCommonLink(ddaoTokenSearch, 'https://ddao.ibby.dev/');
  testCommonLink(ddaoTokenSearchCreator, 'https://github.com/Ibby-devv');

  const ddaoUnofficialFrontend = screen.getByRole('link', {
    name: /ddaoUnofficalFrontend/,
  });
  const ddaoUnofficialFrontendCreator = screen.getByRole('link', {
    name: /fmoliveira/,
  });
  testCommonLink(ddaoUnofficialFrontend, 'https://developerdao.vercel.app/');
  testCommonLink(
    ddaoUnofficialFrontendCreator,
    'https://github.com/fmoliveira',
  );
});
