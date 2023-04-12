import React from 'react'
import Link from "next/link"

//this will be a server component so use async

async function fetchCourses() {
    const response = await fetch("http://localhost:3000/api/courses");
    const courses = await response.json();
    return courses;
}
const Courses = async () => {
    const courses = await fetchCourses();

  return (
    <div className="courses">
        {courses.map((course) => (
            <div key={course.id} className="card">
            <h2>{course.title}</h2>
            <small>Level: {course.level}</small>
            <p>{courses.description}</p>
            <Link href = {course.link}> Go To Course</Link>
        </div>
        ))}
    </div>
  )
}

export default Courses