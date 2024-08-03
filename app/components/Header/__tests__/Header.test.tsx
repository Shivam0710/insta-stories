import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

jest.mock('../../Logo/Logo', () => {
    return function DummyLogo() {
        return <div data-testid="logo">Logo</div>;
    };
});

describe('Header', () => {
    test('renders Header component', () => {
        render(<Header />); // Arrange
        const headerElement = screen.getByRole('header-component'); // Act
        expect(headerElement).toBeInTheDocument(); // Assert
    });

    test('renders Logo component', () => {
        render(<Header />); // Arrange
        const logoElement = screen.getByTestId('logo'); // Act
        expect(logoElement).toBeInTheDocument(); // Assert
    });
});
