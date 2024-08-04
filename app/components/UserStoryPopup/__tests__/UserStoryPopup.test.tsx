import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserStoryPopup from '../../UserStoryPopup/UserStoryPopup';
import { UserStories } from '@/types/types';
import { act } from 'react';

// Mock dependencies
jest.mock('@/helpers/helper', () => ({
  getCurrentStoryHistory: jest.fn(),
  addCurrentStoryToHistory: jest.fn(),
  getRandomInt: jest.fn(),
}));

const mockStories: UserStories[] = [
  {
    user: { id: '1', name: 'User 1', avatarUrl: 'https://example.com/avatar1.jpg', userName: 'user1' },
    media: [
      { id: '1', mediaUrl: 'https://example.com/story1.jpg', mediaType: 'image', duration: 5000 },
      { id: '2', mediaUrl: 'https://example.com/story2.jpg', mediaType: 'image', duration: 5000 },
    ],
    id: '1'
  },
  {
    user: { id: '2', name: 'User 2', avatarUrl: 'https://example.com/avatar2.jpg', userName: 'user2' },
    media: [
      { id: '3', mediaUrl: 'https://example.com/story3.jpg', mediaType: 'image', duration: 5000 },
    ],
    id: '2'
  },
];

describe('UserStoryPopup', () => {
  test('renders correctly when open', () => {
    render(<UserStoryPopup isOpen={true} onClose={jest.fn()} stories={mockStories} />);

    // Assert popup elements are displayed
    expect(screen.getByAltText('User 1')).toBeInTheDocument();
    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByAltText('story')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<UserStoryPopup isOpen={true} onClose={onClose} stories={mockStories} />);

    // Click the close button
    fireEvent.click(screen.getByTestId('close-button'));

    // Assert onClose is called
    expect(onClose).toHaveBeenCalled();
  });

  test('advances to the next story automatically after duration', async () => {
    jest.useFakeTimers();
    render(<UserStoryPopup isOpen={true} onClose={jest.fn()} stories={mockStories} isTest={true} />);

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(5000); // Adjust time to match duration
    });

    // Assert that the next story is displayed
    await waitFor(() => {
      expect(screen.getByAltText('story')).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fexample.com%2Fstory2.jpg&w=3840&q=75');
    });

    jest.useRealTimers();
  });

  test('navigates to the next and previous stories on button click', async () => {
    render(<UserStoryPopup isOpen={true} onClose={jest.fn()} stories={mockStories} isTest={true} />);

    // Navigate to the next story
    fireEvent.click(screen.getByTestId('next-button'));
    expect(screen.getByAltText('story')).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fexample.com%2Fstory2.jpg&w=3840&q=75');

    // Navigate to the previous story
    fireEvent.click(screen.getByTestId('prev-button'));
    expect(screen.getByAltText('story')).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fexample.com%2Fstory1.jpg&w=3840&q=75');
  });
});
