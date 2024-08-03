import { UserStories } from '@/types/types'
import React, { useState } from 'react'
import StoryThumbnail from '../StoryThumbnail/StoryThumbnail'
import Popup from '../UserStoryPopup/UserStoryPopup'

type StoriesThumbnailListProps = {
    stories: UserStories[]
}

export default function StoriesThumbnailList({ stories }: StoriesThumbnailListProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentUserIndex, setCurrentUserIndex] = useState(0);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const onClose = () => {
        setIsOpen(false);
    }

    const handleClick = (index: number, storyIndex: number) => {
        setIsOpen(true);
        setCurrentUserIndex(index);
        setCurrentStoryIndex(storyIndex);
    }

    return (
        <div className='flex gap-3 items-center overflow-scroll no-scrollbar'>
            { stories.map((story, index) => <StoryThumbnail onClick={handleClick} index={index} key={index} user={story.user} media={story.media} />) }
            { isOpen &&
                <Popup initialUserIndex={currentUserIndex} stories={stories} onClose={onClose} initialStoryIndex={currentStoryIndex} isOpen={isOpen} />
            }
        </div>
    )
}
