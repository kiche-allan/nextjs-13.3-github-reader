'use client';

import React from 'react'
import {useState, useEffect} from 'react';
import LoadingPage from './loading'
import Courses from './components/Courses';

const HomePage = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect (() => {
    const fetchCourses = async() => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);

    }

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />
  }


  return (
    <div>
     <h1>Welcome to my Github Projects List</h1>
     <Courses />
     
    </div>
  )
};

export default HomePage
