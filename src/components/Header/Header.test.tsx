import React, { FC } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it('Should render', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    })
})