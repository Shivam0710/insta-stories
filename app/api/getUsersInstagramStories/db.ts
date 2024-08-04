import { UserStories } from "@/types/types";

const usersStories: UserStories[] = [
    {
        id: "1",
        user: {
            id: "1",
            name: "John Doe",
            avatarUrl: "https://ucarecdn.com/09ae79ce-96f5-422d-9f96-86d73f888ad8/-/preview/632x1000/",
            userName: "__johndoe__",
        },
        media: [
            {
                id: "1",
                mediaUrl: "https://ucarecdn.com/ce10aafd-c21b-4597-819c-df6e07e14fa8/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '2 h',
                duration: 5000,
            },
            {
                id: "2",
                mediaUrl: "https://ucarecdn.com/920e28ce-de13-485c-a1e5-a3736052a277/-/preview/800x1000/",
                mediaType: "image",
                postedHoursAgo: '4 h',
                duration: 5000,
            }
        ],
    },
    {
        id: "2",
        user: {
            id: "2",
            name: "Jane Smith",
            avatarUrl: "https://ucarecdn.com/8f3cb345-c937-470b-8503-954c70247693/-/preview/666x1000/",
            userName: "__janendoe112",
        },
        media: [
            {
                id: "3",
                mediaUrl: "https://ucarecdn.com/da0913de-eaa2-44ce-a6a0-0fb6473d634d/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '3 h',
                duration: 5000,
            },
            {
                id: "21",
                mediaUrl: "https://ucarecdn.com/1fa3db01-dbd0-4890-9938-1bd4bc8e468e/",
                mediaType: "video",
                postedHoursAgo: '1 h',
                duration: 15000
            },
            {
                id: "4",
                mediaUrl: "https://ucarecdn.com/7e299e53-6f3e-4f3e-a04a-e0f270c5dde1/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '5 h',
                duration: 5000,
            },
        ],
    },
    // Additional entries
    {
        id: "3",
        user: {
            id: "3",
            name: "Alice Johnson",
            avatarUrl: "https://ucarecdn.com/a9a00b1d-e0ff-45ca-a8b0-069ee200646f/-/preview/666x1000/",
            userName: "alicejohnson",
        },
        media: [
            {
                id: "5",
                mediaUrl: "https://ucarecdn.com/6bfb928c-4b3c-4844-955b-7cae4d180ebf/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '8 h',
                duration: 5000,
            },
            {
                id: "6",
                mediaUrl: "https://ucarecdn.com/753ffd57-788c-417e-9f7d-e17b50688371/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '3 h',
                duration: 5000,
            },
        ],
    },
    {
        id: "4",
        user: {
            id: "4",
            name: "Bob Brown",
            avatarUrl: "https://ucarecdn.com/a9a5b617-c5af-4c86-bbb6-b375235de8c3/-/preview/725x1000/",
            userName: "bobbrown",
        },
        media: [
            {
                id: "7",
                mediaUrl: "https://ucarecdn.com/be477cc3-773d-48db-a3a6-f478c88125e1/-/preview/669x1000/",
                mediaType: "image",
                postedHoursAgo: '1 h',
                duration: 5000,
            },
            {
                id: "8",
                mediaUrl: "https://ucarecdn.com/f4125636-4db8-47d4-ae8f-ff7511749fdc/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '3 h',
                duration: 5000,
            },
        ],
    },
    {
        id: "5",
        user: {
            id: "5",
            name: "Charlie Davis",
            avatarUrl: "https://ucarecdn.com/809dfd38-3d98-439c-9a76-c3a750d5b6ea/-/preview/666x1000/",
            userName: "charliedavis",
        },
        media: [
            {
                id: "9",
                mediaUrl: "https://ucarecdn.com/a5eda0ad-812f-4bf8-adaa-7fc580b24a67/-/preview/667x1000/",
                mediaType: "image",
                postedHoursAgo: '9 h',
                duration: 5000,
            },
            {
                id: "10",
                mediaUrl: "https://ucarecdn.com/fbae9657-bae0-40cd-9f5c-6bc7f004625a/-/preview/683x1000/",
                mediaType: "image",
                postedHoursAgo: '12 h',
                duration: 5000,
            },
        ],
    },
    {
        id: "6",
        user: {
            id: "6",
            name: "Diana Evans",
            avatarUrl: "https://ucarecdn.com/9d0312a0-86dc-4192-b68c-af21c5601246/-/preview/666x1000/",
            userName: "dianaevans",
        },
        media: [
            {
                id: "11",
                mediaUrl: "https://ucarecdn.com/d5b377ac-0c8f-4e65-a036-b01ca3cfbf13/-/preview/750x1000/",
                mediaType: "image",
                postedHoursAgo: '10 h',
                duration: 5000,
            },
            {
                id: "12",
                mediaUrl: "https://ucarecdn.com/54c107f4-3c88-4a42-83f8-daee3690e624/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '20 h',
                duration: 5000,
            },
        ],
    },
    {
        id: "7",
        user: {
            id: "7",
            name: "Ethan Foster",
            avatarUrl: "https://ucarecdn.com/829674f1-54f0-473b-89fa-1a419b6073c5/-/preview/1000x667/",
            userName: "ethanfoster",
        },
        media: [
            {
                id: "13",
                mediaUrl: "https://ucarecdn.com/048e1410-67cf-4475-9be8-e96d9f378c24/-/preview/562x999/",
                mediaType: "image",
                postedHoursAgo: '17 h',
                duration: 5000,
            },
            {
                id: "14",
                mediaUrl: "https://ucarecdn.com/cfb5f658-8e78-4c9b-857d-34fc3dc73aa3/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '19 h',
                duration: 5000,
            },
        ],
    },
    {
        id: "8",
        user: {
            id: "8",
            name: "Fiona Green",
            avatarUrl: "https://ucarecdn.com/ef3854b7-dbf8-4d9f-9906-eee4ac2b8d7d/girl.webp",
            userName: "fionagreen",
        },
        media: [
            {
                id: "15",
                mediaUrl: "https://ucarecdn.com/95e5a4c0-fdd1-4642-b754-3e4f5179bb94/-/preview/750x1000/",
                mediaType: "image",
                postedHoursAgo: '22 h',
                duration: 5000,
            },
            {
                id: "16",
                mediaUrl: "https://ucarecdn.com/6a129b1d-c36e-4d46-a4af-7c07f01b6c9f/-/preview/749x1000/",
                mediaType: "image",
                postedHoursAgo: '2 h',
                duration: 5000,
            },
        ],
    },
    {
        id: "9",
        user: {
            id: "9",
            name: "George Harris",
            avatarUrl: "https://ucarecdn.com/7db902c2-8899-42be-a8cd-c936cba1702b/-/preview/750x999/",
            userName: "georgeharris",
        },
        media: [
            {
                id: "17",
                mediaUrl: "https://ucarecdn.com/8f1fb705-20e0-43f9-8ce5-dbdb4408ce32/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '5 h',
                duration: 5000,
            },
            {
                id: "18",
                mediaUrl: "https://ucarecdn.com/32ef697f-0128-4c3e-833b-fb83cc2db4e1/-/preview/666x1000/",
                mediaType: "image",
                postedHoursAgo: '6 h',
                duration: 5000,
            },
        ],
    },
    {
        id: "10",
        user: {
            id: "10",
            name: "Hannah Ingram",
            avatarUrl: "https://ucarecdn.com/da617a1f-ed0a-4dcd-8afb-40706e7b9ceb/-/preview/1000x666/",
            userName: "hannahingram",
        },
        media: [
            {
                id: "19",
                mediaUrl: "https://ucarecdn.com/30e2ed87-5a59-4349-974c-196b3cc0aac8/-/preview/741x1000/",
                mediaType: "image",
                postedHoursAgo: '8 h',
                duration: 5000,
            },
            {
                id: "20",
                mediaUrl: "https://ucarecdn.com/4ad6686f-860f-492a-9f03-51271c4c20ca/-/preview/750x1000/",
                mediaType: "image",
                postedHoursAgo: '10 h',
                duration: 5000,
            },
        ],
    },
];

export default usersStories;