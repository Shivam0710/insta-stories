import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StoriesList from '../../StoriesList/StoriesList';
import StoriesThumbnailList from '../../StoriesThumbnailList/StoriesThumbnailList';
import { UserStories } from '@/types/types';

// Mock the StoriesThumbnailList component
jest.mock('../../StoriesThumbnailList/StoriesThumbnailList', () => {
  return ({ stories }: { stories: UserStories[] }) => (
    <div>
      {stories.map(story => (
        <div key={story.id} data-testid="story-thumbnail">
          {story.user.userName}
        </div>
      ))}
    </div>
  );
});

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

describe('StoriesList', () => {
  test('renders StoriesThumbnailList with correct props', () => {
    render(<StoriesList stories={mockStories} />);
    
    // Assert that StoriesThumbnailList is rendered with the correct stories
    const thumbnails = screen.getAllByTestId('story-thumbnail');
    expect(thumbnails).toHaveLength(mockStories.length);
    expect(thumbnails[0]).toHaveTextContent('__johndoe__');
    expect(thumbnails[1]).toHaveTextContent('__janedoe__');
  });

  test('renders no story if stories prop is empty', () => {
    render(<StoriesList stories={[]} />);
    
    // Assert that no story thumbnails are rendered
    const thumbnails = screen.queryAllByTestId('story-thumbnail');
    expect(thumbnails).toHaveLength(0);
  });
});
