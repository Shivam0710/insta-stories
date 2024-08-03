import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StoryThumbnail from '../../StoryThumbnail/StoryThumbnail';
import { getCurrentStoryHistory } from '@/helpers/helper';
import { Media, User } from '@/types/types';

jest.mock('@/helpers/helper', () => ({
  getCurrentStoryHistory: jest.fn(),
}));

const mockUser: User = {
  id: '1',
  name: 'User 1',
  avatarUrl: 'https://example.com/avatar1.jpg',
  userName: 'user1',
};

const mockMedia: Media[] = [
  { id: '1', mediaUrl: 'https://example.com/story1.jpg', mediaType: 'image', duration: 5000 },
  { id: '2', mediaUrl: 'https://example.com/story2.jpg', mediaType: 'image', duration: 5000 },
];

describe('StoryThumbnail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('applies correct border color based on visited stories', () => {
    // Scenario 1: All stories visited
    (getCurrentStoryHistory as jest.Mock).mockReturnValueOnce(['1', '2']);
    const onClickMock = jest.fn();
    const { rerender } = render(<StoryThumbnail user={mockUser} index={0} media={mockMedia} onClick={onClickMock} />);
    expect(screen.getByRole('button')).toHaveClass('bg-gray-600');
    
    // Scenario 2: Not all stories visited
    (getCurrentStoryHistory as jest.Mock).mockReturnValueOnce(['1']);
    rerender(<StoryThumbnail user={mockUser} index={0} media={mockMedia} onClick={onClickMock} />);
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-to-r from-[#fb3c44] to-[#0866ff]');
  });

  test('calls onClick with correct arguments', () => {
    (getCurrentStoryHistory as jest.Mock).mockReturnValue(['1']);
    const onClickMock = jest.fn();
    render(<StoryThumbnail user={mockUser} index={0} media={mockMedia} onClick={onClickMock} />);
    
    fireEvent.click(screen.getByRole('button'));
    
    // The leftStoryIndex should be 1 since the first story (id '1') is visited.
    expect(onClickMock).toHaveBeenCalledWith(0, 1);
  });
});
