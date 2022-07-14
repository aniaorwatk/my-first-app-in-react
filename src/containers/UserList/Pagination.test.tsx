import React from 'react';
import { render, screen } from '@testing-library/react';
import CardPerson from './CardPerson';
import { act } from "react-dom/test-utils";
import { MemoryRouter } from 'react-router-dom';

describe('Pagination', () => {
    it('Should make a request to API', async () => {
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

        render(
            <MemoryRouter>
                <CardPerson />
            </MemoryRouter>
        )
        const button = screen.getByText(/change page/i);

        await act(async () => {
            button.click();
        })

        expect(global.fetch).toHaveBeenCalled();
    })
})