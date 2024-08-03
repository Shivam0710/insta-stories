import { UserStories } from "@/types/types";
import axios from "axios";


export default async function getUsersStoriesFromApi() {
    const users: UserStories[] = await axios.get('/api/getUsersInstagramStories').then((res) => res.data);
    return users;
}