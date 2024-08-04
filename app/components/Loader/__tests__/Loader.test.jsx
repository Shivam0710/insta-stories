import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../Loader';

describe('Loader', () => {
    test('renders Loader component', () => {
        render(<Loader />);
        const loaderElement = screen.getByRole('status');
        expect(loaderElement).toBeInTheDocument();
    });

    test('renders spinner blades', () => {
        render(<Loader />);
        const spinnerBlades = screen.getAllByTestId('spinner-blade');
        expect(spinnerBlades).toHaveLength(12);
    });
});
