import { addCurrentStoryToHistory } from '@/helpers/helper';
import useSwipe from '@/hooks/useSwipe';
import { UserStories } from '@/types/types';
import NextImage from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import Loader from '../Loader/Loader';

type PopupProps = {
    isOpen: boolean;
    onClose: () => void;
    initialUserIndex?: number;
    initialStoryIndex?: number;
    stories: UserStories[];
};

const UserStoryPopup = ({
    isOpen,
    onClose,
    initialUserIndex = 0,
    initialStoryIndex = 0,
    stories
}: PopupProps) => {
    const [currentUserIndex, setCurrentUserIndex] = useState(initialUserIndex);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
    const [isPlaying, setIsPlaying] = useState(true)
    const [imageLoading, setImageLoading] = useState(true);
    const [currentAnimation, setCurrentAnimation] = useState('');

    const currentUser = stories[currentUserIndex];
    const currentStory = currentUser.media[currentStoryIndex];

    const handleNextStory = () => {
        setImageLoading(true);
        if (currentStoryIndex < currentUser.media.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
        } else if (currentUserIndex < stories.length - 1) {
            setCurrentUserIndex(currentUserIndex + 1);
            setCurrentStoryIndex(0);
            setCurrentAnimation('slide-right');
            removeAnimationClass()
        } else {
            onClose();
        }
    };

    const handlePrevStory = () => {
        setImageLoading(true);
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1);
        } else if (currentUserIndex > 0) {
            setCurrentUserIndex(currentUserIndex - 1);
            setCurrentStoryIndex(stories[currentUserIndex - 1].media.length - 1);
            setCurrentAnimation('slide-left');
            removeAnimationClass()
        }
    };

    const handleNextUser = () => {
        setImageLoading(true);
        setCurrentAnimation('slide-right');
        removeAnimationClass()
        if (currentUserIndex < stories.length - 1) {
            setCurrentUserIndex(currentUserIndex + 1);
            setCurrentStoryIndex(0);
        } else {
            onClose();
        }
        setIsPlaying(true);
    };

    const handlePrevUser = () => {
        setCurrentAnimation('slide-left');
        removeAnimationClass()
        setImageLoading(true);
        if (currentUserIndex > 0) {
            setCurrentUserIndex(currentUserIndex - 1);
            setCurrentStoryIndex(stories[currentUserIndex - 1].media.length - 1);
        }
        setIsPlaying(true);
    };

    const removeAnimationClass = () => {
        setTimeout(() => {
            setCurrentAnimation('');
        }, 500);
    }

    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => {
                handleNextStory();
            }, currentStory.duration * 1);
            return () => clearTimeout(timer);
        }
    }, [isPlaying, currentStoryIndex, currentUserIndex, currentStory.duration]);

    useSwipe(handleNextUser, handlePrevUser);

    if (!isOpen) return null;
    addCurrentStoryToHistory(currentStory);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center scale-animation">
            <div className='progress-bar-container absolute top-2 w-[98%] mx-auto z-20'>
                <div className="flex justify-between mb-4">
                    {currentUser.media.map((story, index) => (
                        <div
                            key={index}
                            className={`h-1 rounded mx-1 flex-grow ${index < currentStoryIndex ? 'bg-white' : 'bg-gray-200'}`}
                            style={{ marginRight: index !== currentUser.media.length - 1 ? '4px' : '0' }}
                        >
                            {index === currentStoryIndex && (
                                <div
                                    className="bg-white h-1 rounded"
                                    style={{
                                        width: isPlaying ? '100%' : '0',
                                        animation: `progress ${story.duration}ms linear`
                                    }}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex flex-row items-center justify-between pr-2'>
                    <div className='flex flex-row items-center gap-3'>
                        <NextImage width={40} height={40} src={currentUser.user.avatarUrl} alt={currentUser.user.name} className="h-10 w-10 rounded-full object-cover" />
                        <div className='flex gap-2'>
                            <p className='text-sm max-w-[100px] text-ellipsis overflow-hidden text-white'>
                                {currentUser.user.userName}
                            </p>
                            <p className='text-sm text-white'>
                                {currentStory.postedHoursAgo}
                            </p>
                        </div>
                    </div>
                    <IoCloseSharp className='self-start' size={24} onClick={onClose} color='white' />
                </div>
            </div>

            <div className='w-full h-full relative'>
                {imageLoading && <div className='h-full w-full flex items-center'> <Loader /> </div>}
                    <div
                        className={`absolute top-0 left-0 w-full h-full`}
                    >
                        {currentStory.mediaType === "video" ? (
                            <video
                                onCanPlay={() => setImageLoading(false)}
                                className={`w-full h-full ${currentAnimation}`}
                                src={currentStory.mediaUrl}
                                onEnded={handleNextStory}
                                autoPlay
                                muted
                            />
                        ) : (
                            <NextImage
                                key={`current-${currentStoryIndex}`}
                                priority
                                src={currentStory.mediaUrl}
                                alt="story"
                                layout="fill"
                                objectFit="cover"
                                className={`w-full h-full object-cover ${currentAnimation}`}
                                onLoad={() => setImageLoading(false)}
                            />
                        )}
                    </div>
            </div>
            <div className='h-screen w-screen absolute top-0 left-0'>
                <div className='h-screen w-1/2 absolute top-0 left-0' onClick={handlePrevStory}></div>
                <div className='h-screen w-1/2 absolute top-0 right-0' onClick={handleNextStory}></div>
            </div>
        </div>
    );
};

export default UserStoryPopup;