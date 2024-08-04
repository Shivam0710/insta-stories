import { UserStories } from '@/types/types'
import React from 'react'
import StoriesThumbnailList from '../StoriesThumbnailList/StoriesThumbnailList'

type StoryListProps = {
    stories: UserStories[]
}

export default function StoriesList({ stories }: StoryListProps) {
    return (
        <div className='flex items-center h-full py-4 dark:border dark:border-[#363636] border-l-0 border-r-0'>
            <StoriesThumbnailList stories={stories} />
        </div>
    )
}
