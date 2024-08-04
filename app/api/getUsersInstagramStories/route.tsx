import { NextResponse } from "next/server";
import usersStories from "./db";
import { UserStories } from "@/types/types";

export async function GET(request: Request) {
    const data: UserStories[] = usersStories;
    return NextResponse.json(data, { status: 200 });
}