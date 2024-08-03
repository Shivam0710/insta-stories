"use client"
import getUsersStoriesFromApi from '@/helpers/getUsersStoriesFromApi';
import { UserStories } from '@/types/types';
import React, { useEffect } from 'react'
import Loader from '../Loader/Loader';
import StoriesList from '../StoriesList/StoriesList';

export default function StoriesContainer() {
    const [loading, setLoading] = React.useState(true);
    const [stories, setStories] = React.useState<UserStories[]|[]>([]);

    const getStories = async () => {
        const stories = await getUsersStoriesFromApi();
        setStories(stories);
        setLoading(false);
    }

    useEffect(() => {
        getStories();
    }, [])

    return (
        <div className='bg-[#121212] overflow-hidden'>
            {loading ? <Loader /> : <StoriesList stories={stories} />}
        </div>
    )
}
