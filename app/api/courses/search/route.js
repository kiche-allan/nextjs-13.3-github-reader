import {NextResponse} from "next/server";
import courses from "../data/json";

export async function GET(request) {
    const {searchParams} = new URL(request.nextUrl);
    const query = searchParams.get('query');
    const filteredCourses = courses.filter((courses) => {
        return course.title.toLowerCase().includes(query.toLowerCase());

    });
}