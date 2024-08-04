import { getCurrentStoryHistory } from '@/helpers/helper'
import { Media, User } from '@/types/types'
import Image from 'next/image'
import React from 'react'

type StoryThumbnailProps = {
    user: User,
    onClick: (userIndex: number, storyIndex: number) => void,
    index: number,
    media: Media[]
}

export default function StoryThumbnail({ user, index, media, onClick}: StoryThumbnailProps) {
    const visitedStories = getCurrentStoryHistory();
    const currentUserStoriesId: string[] = media.map((story: Media) => story.id);
    const visitedStoriesSoFar: string[] = visitedStories?.filter((storyId: string) => currentUserStoriesId.includes(storyId))
    const storiesLeftToVisit: string[] = currentUserStoriesId.filter((storyId: string) => !visitedStoriesSoFar?.includes(storyId));
    const isAllStoriesVisited: Boolean = visitedStoriesSoFar?.length === currentUserStoriesId.length;
    const leftStoryIndex = (isAllStoriesVisited || storiesLeftToVisit.length === 0) ? 0 : currentUserStoriesId.indexOf(storiesLeftToVisit[0]);
    
    const borderColorClass = !isAllStoriesVisited ? 'bg-gradient-to-r from-[#fb3c44] to-[#0866ff]' : 'bg-gray-600'
    
    return (
        <div className='flex flex-col first:pl-4 last:pr-4 justify-center items-center w-[80px] text-ellipsis gap-2' onClick={() => onClick(index, leftStoryIndex)}>
            <button className={`${borderColorClass} text-white font-semibold p-[3px] rounded-full`}>
                <Image width={56} height={56} className='h-[56px] w-[56px] rounded-full' src={user.avatarUrl} alt={user.name} />
            </button>
            <p className='w-[70px] text-ellipsis overflow-hidden text-wrap text-sm'> {user.userName} </p> 
        </div>
    )
}
