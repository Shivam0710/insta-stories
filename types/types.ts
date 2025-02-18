export interface UserStories {
    id: string;
    user: User;
    media: Media[];
}

export interface Media {
    id: string;
    mediaUrl: string;
    mediaType: string;
    duration: number;
    postedHoursAgo?: string;
}

export interface User {
    id: string;
    name: string;
    userName: string
    avatarUrl: string;
}