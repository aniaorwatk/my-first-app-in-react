import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CardPerson from './CardPerson';
import { act } from "react-dom/test-utils";
import { MemoryRouter } from 'react-router-dom';

describe('CardPerson', () => {
    it('should render empty list when user not found', async () => {
        const fakeUsers = {
            data: [
                {
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://reqres.in/img/faces/7-image.jpg"
                },
            ],
            page: 2,
            per_page: 6,
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!",
            total: 12,
            total_pages: 2,
        };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeUsers),
                status: 200,
            } as Response)
        );

        await act(async () => {
            render(
                <MemoryRouter>
                    <CardPerson />
                </MemoryRouter>
            )
        })

        const elements = document.querySelectorAll('.listItem--card')
        expect(elements.length).toEqual(1)
        expect(elements[0].className).toEqual('listItem--card')

        const inputElement: HTMLInputElement = screen.getByPlaceholderText("search ...");
        fireEvent.change(inputElement, { target: { value: 'emma' } });

        const emptyElements = document.querySelector('.listItem--card')

        expect(emptyElements).toEqual(null)
    })
})