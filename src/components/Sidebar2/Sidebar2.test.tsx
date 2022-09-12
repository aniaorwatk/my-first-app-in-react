import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar2 from './Sidebar2';
import { act } from "react-dom/test-utils";
import { MemoryRouter } from 'react-router-dom';

describe('Sidebar2', () => {
    afterAll(() => {
        jest.resetAllMocks();
    })

    it('Should render image after button click', async () => {
        const fakeImage = {
            data: [
                {
                    url: "https://cdn.shibe.online/shibes/8dd3f5a2188b8b33f5ac1af99b02bc59cdc0bf58.jpg",
                }
            ],
        };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeImage),
                status: 200,
            } as Response)
        );

        await act(async () => {
            render(
                <MemoryRouter>
                    <Sidebar2 />
                </MemoryRouter>
            )
        })
        await act(async () => {
            fireEvent.click(screen.getByText(/Get new shiba image/i))
        })

        expect(global.fetch).toHaveBeenCalledTimes(2);
    })
})