import React, { FC } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CardPerson from '../UserList/CardPerson';

describe('Form Component', () => {
    it('Should render value in input', () => {
        render(<CardPerson />)
        const inputElement = screen.getByPlaceholderText("search ...");
        fireEvent.change(inputElement, { target: { value: 'emma' } });
        // expect(inputElement.value).not.toEqual('bb');
        // expect(inputElement.value).toEqual('emma');
    })
})