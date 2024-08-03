import { NextResponse } from "next/server";
import usersStories from "./db";
import { UserStories } from "./types";

export async function GET(request: Request) {
    // Do whatever you want
    const data: UserStories[] = usersStories;
    return NextResponse.json(data, { status: 200 });
}