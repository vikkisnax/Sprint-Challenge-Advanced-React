import React from "react";
import {render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import NavBar from "./NavBar";

describe('NavBar', () => { 
test('renders without errors', () => {
    render(<NavBar/>);
});

test('renders button without errors', () => {
    render(<NavBar/>);

    const toggleButton = screen.getByRole('button');
    userEvent.click(toggleButton);

});
});
