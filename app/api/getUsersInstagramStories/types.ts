export interface UserStories {
    id: string;
    user: User;
    media: Media[];
}

interface Media {
    id: string;
    mediaUrl: string;
    mediaType: string;
    duration: number;
}

interface User {
    id: string;
    name: string;
    avatarUrl: string;
}