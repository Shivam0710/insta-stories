import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StoriesThumbnailList from '../../StoriesThumbnailList/StoriesThumbnailList';
import { UserStories } from '@/types/types';

// Mock the StoryThumbnail and Popup components
jest.mock('../../StoryThumbnail/StoryThumbnail', () => ({ onClick, index, user, media }: { onClick: (index: number) => void, index: number, user: any, media: any }) => (
    <div data-testid={`thumbnail-${index}`} onClick={() => onClick(index)}>
        {user.userName}
    </div>
));

jest.mock('../../UserStoryPopup/UserStoryPopup', () => ({ initialUserIndex, stories, onClose, isOpen }: { initialUserIndex: number, stories: UserStories[], onClose: () => void, isOpen: boolean }) => (
    isOpen ? <div data-testid="popup">
        <button data-testid="popup-close" onClick={onClose}>Close</button>
        <div>
            Popup for user index {initialUserIndex}
        </div>
    </div> : null
));

const mockStories: UserStories[] = [
    {
        id: "1",
        user: {
            id: "1",
            name: "John Doe",
            avatarUrl: "https://example.com/avatar1.jpg",
            userName: "__johndoe__",
        },
        media: [
            {
                id: "1",
                mediaUrl: "https://example.com/media1.jpg",
                mediaType: "image",
                duration: 10,
            },
        ],
    },
    {
        id: "2",
        user: {
            id: "2",
            name: "Jane Doe",
            avatarUrl: "https://example.com/avatar2.jpg",
            userName: "__janedoe__",
        },
        media: [
            {
                id: "2",
                mediaUrl: "https://example.com/media2.jpg",
                mediaType: "image",
                duration: 15,
            },
        ],
    },
];

describe('StoriesThumbnailList', () => {
    test('renders StoryThumbnail components with correct data', () => {
        render(<StoriesThumbnailList stories={mockStories} />);

        // Assert that StoryThumbnail components are rendered
        expect(screen.getByTestId('thumbnail-0')).toHaveTextContent('__johndoe__');
        expect(screen.getByTestId('thumbnail-1')).toHaveTextContent('__janedoe__');
    });

    test('opens Popup on thumbnail click', () => {
        render(<StoriesThumbnailList stories={mockStories} />);

        // Click on the first thumbnail
        fireEvent.click(screen.getByTestId('thumbnail-0'));

        // Assert Popup is displayed
        expect(screen.getByTestId('popup')).toHaveTextContent('Popup for user index 0');
    });

    test('closes Popup when onClose is called', () => {
        render(<StoriesThumbnailList stories={mockStories} />);

        // Click on the first thumbnail to open Popup
        fireEvent.click(screen.getByTestId('thumbnail-0'));

        // Close the Popup
        fireEvent.click(screen.getByTestId('popup-close'));

        // Assert Popup is no longer displayed
        expect(screen.queryByTestId('popup')).toBeNull();
    });
});
