import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StoriesContainer from '../StoriesContainer';
import getUsersStoriesFromApi from '@/helpers/getUsersStoriesFromApi';
import { UserStories } from '@/types/types';

// Mocking the getUsersStoriesFromApi function
jest.mock('@/helpers/getUsersStoriesFromApi');

const mockedGetUsersStoriesFromApi = getUsersStoriesFromApi as jest.MockedFunction<typeof getUsersStoriesFromApi>;

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
      {
        id: "2",
        mediaUrl: "https://example.com/media2.jpg",
        mediaType: "image",
        duration: 20,
      },
    ],
  },
];

describe('StoriesContainer', () => {
  test('renders Loader component while loading', async () => {
    mockedGetUsersStoriesFromApi.mockImplementation(() =>
      new Promise<UserStories[]>((resolve) =>
        setTimeout(() => resolve(mockStories), 1000) // Simulate a 1-second delay
      )
    );

    await act(async () => {
      render(<StoriesContainer />);
    });

    // Assert Loader is displayed
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders StoriesList component with stories after loading', async () => {
    mockedGetUsersStoriesFromApi.mockResolvedValueOnce(mockStories);

    await act(async () => {
      render(<StoriesContainer />);
    });

    // Wait for the stories to be loaded and displayed
    await waitFor(() => {
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      expect(screen.getByText('__johndoe__')).toBeInTheDocument();
    });
  });
});
