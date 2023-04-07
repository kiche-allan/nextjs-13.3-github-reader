'use client';
import { useState } from 'react'
import React from 'react'
import Link from "next/link"


const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link href = "/">Allan Kiche</Link>
          </div>
          <div className="links">
            <Link href = '/about'>About </Link>
            <Link href = '/about/team'>Our Team </Link>
            <Link href = '/code/repos'> Code </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
