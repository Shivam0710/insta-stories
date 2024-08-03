import { Media, UserStories } from "@/types/types";

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export function addCurrentStoryToHistory(currentStory: Media) {
    const currentStoryHistory = JSON.parse(localStorage.getItem('currentStoryHistory') || '[]');
    const storyExists = currentStoryHistory.some((story: any) => story.id === currentStory.id);
    
    if (!storyExists) {
        currentStoryHistory.push(currentStory);
        localStorage.setItem('currentStoryHistory', JSON.stringify(currentStoryHistory));
    }
}

export function getCurrentStoryHistory() {
    const userVisitedStories: Media[] = JSON.parse(localStorage.getItem('currentStoryHistory') || '[]');
    return userVisitedStories.map((story: Media) => story.id); 
}   