import { addCurrentStoryToHistory, getRandomInt } from '@/helpers/helper';
import useSwipe from '@/hooks/useSwipe';
import { UserStories } from '@/types/types';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import Loader from '../Loader/Loader';

type PopupProps = {
    isOpen: boolean
    onClose: () => void
    initialUserIndex?: number
    initialStoryIndex?: number,
    stories: UserStories[]
}

const UserStoryPopup = ({ isOpen, onClose, initialUserIndex = 0, initialStoryIndex = 0, stories }: PopupProps) => {
    const [currentUserIndex, setCurrentUserIndex] = useState(initialUserIndex);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
    const [isPlaying, setIsPlaying] = useState(true);
    const [imageLoading, setImageLoading] = useState(true);

    const currentUser = stories[currentUserIndex];
    const currentStory = currentUser.media[currentStoryIndex];

    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => {
                setImageLoading(true)
                if (currentStoryIndex < currentUser.media.length - 1) {
                    setCurrentStoryIndex(currentStoryIndex + 1);
                } else if (currentUserIndex < stories.length - 1) {
                    setCurrentUserIndex(currentUserIndex + 1);
                    setCurrentStoryIndex(0);
                } else {
                    onClose();
                }
            }, currentStory.duration * 1);
            return () => clearTimeout(timer);
            
        }
    }, [isPlaying, currentStoryIndex, currentUserIndex, currentStory.duration, onClose]);

    const handleNextStory = () => {
        setImageLoading(true)
        if (currentStoryIndex < currentUser.media.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
        } else if (currentUserIndex < stories.length - 1) {
            setCurrentUserIndex(currentUserIndex + 1);
            setCurrentStoryIndex(0);
        } else {
            onClose();
        }
    };

    const handlePrevStory = () => {
        setImageLoading(true)
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1);
        } else if (currentUserIndex > 0) {
            setCurrentUserIndex(currentUserIndex - 1);
            setCurrentStoryIndex(stories[currentUserIndex - 1].media.length - 1);
        }
    };

    const handleNextUser = () => {
        setImageLoading(true)
        if (currentUserIndex < stories.length - 1) {
            setCurrentUserIndex(currentUserIndex + 1);
            setCurrentStoryIndex(0);
        } else {
            onClose();
        }
        setIsPlaying(true);
    };

    const handlePrevUser = () => {
        setImageLoading(true)
        if (currentUserIndex > 0) {
            setCurrentUserIndex(currentUserIndex - 1);
            setCurrentStoryIndex(stories[currentUserIndex - 1].media.length - 1);
        }
        setIsPlaying(true);
    };

    useSwipe(handleNextUser, handlePrevUser);
    if (!isOpen) return null;
    addCurrentStoryToHistory(currentStory);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center group">
            <div className='progress-bar-container absolute top-2 w-[98%] mx-auto z-20'>
                <div className="flex justify-between mb-4">
                    {currentUser.media.map((story, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 h-1 rounded mx-1 flex-grow relative"
                            style={{
                                marginRight: index !== currentUser.media.length - 1 ? '4px' : '0',
                            }}
                        >
                            {index === currentStoryIndex && (
                                <div
                                    className="bg-white h-1 rounded"
                                    style={{
                                        width: isPlaying ? '100%' : '0',
                                        animation: `progress ${story.duration}ms linear`,
                                    }}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex flex-row items-center justify-between pr-2'>
                    <div className='flex flex-row items-center gap-3'>
                        <Image width={40} height={40} src={currentUser.user.avatarUrl} alt={currentUser.user.name} className="h-10 w-10 rounded-full" />
                        <div className='flex gap-2'>
                            <p className='text-sm max-w-[100px] text-ellipsis overflow-hidden'>
                                {currentUser.user.userName}
                            </p>
                            <p className='text-sm'>
                                {getRandomInt(24)} h
                            </p>
                        </div>
                    </div>
                    <IoCloseSharp className='self-start' size={24} onClick={onClose} color='white' />
                </div>
            </div>

            <div className='w-full h-full'>
                {imageLoading && <div className='h-full w-full flex items-center'> <Loader /> </div>} 
                <Image priority={true} style={{ visibility: imageLoading ? 'hidden' : 'visible' }} src={currentStory.mediaUrl} alt="story" layout="fill" objectFit="cover" onLoad={() => setImageLoading(false)}  />
            </div>
            <div className='h-screen w-screen absolute top-0 left-0'>
                <div className='h-screen w-1/2 absolute top-0 left-0' onClick={handlePrevStory}>

                </div>
                <div className='h-screen w-1/2 absolute top-0 right-0' onClick={handleNextStory}>

                </div>
            </div>
            {/* <img src={currentStory.mediaUrl} alt="story" className="w-full mb-4" /> */}
            {/* <img src={currentUser.user.avatarUrl} alt={currentUser.user.name} className="mx-auto mb-4 rounded-full" />
            <h2 className="text-xl font-semibold mb-4">{currentUser.user.name}</h2>
            {currentStory.mediaType === 'video' ? (
            <video src={currentStory.mediaUrl} autoPlay className="w-full mb-4" />
            ) : (
            <img src={currentStory.mediaUrl} alt="story" className="w-full mb-4" />
            )}
            <div className="w-full h-1 bg-gray-200 rounded mb-4">
            <div
                className="h-1 bg-blue-500 rounded"
                style={{ width: `${(currentStory.duration / 10) * 100}%` }}
            ></div>
            </div>
        </div>
        <div className="w-4/5 max-w-lg flex justify-between mt-4">
            <button onClick={handlePrevStory} className="bg-gray-500 text-white px-4 py-2 rounded">
            Previous
            </button>
            <button onClick={handleNextStory} className="bg-gray-500 text-white px-4 py-2 rounded">
            Next
            </button>
        </div>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
            Close
        </button> */}
        </div>
    );
};

export default UserStoryPopup;