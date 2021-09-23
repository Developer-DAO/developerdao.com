import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../../src/components/Nav/index';
import testCommonLink from '../utils/testCommons';

describe('Nav', () => {
  it('Renders the github link', () => {
    render(<Nav />);

    const github = screen.getByTitle('Developer DAO GitHub repository');

    testCommonLink(github, 'https://github.com/Developer-DAO/developer-dao');
  });

  it('Renders the developer_dao link to homepage', () => {
    render(<Nav />);

    const developerDao = screen.getByRole('link', {
      name: 'title',
    });

    testCommonLink(developerDao, '/');
  });
});
