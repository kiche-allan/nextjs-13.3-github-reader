import React from 'react'
import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa"


async function fetchRepo(name) {
    const res = await fetch(`https://api.github.com/repos/kiche-allan/${name}`);
        const repo = await res.json();
        return repo;
}
const Repo = async( {name}) => {
    const repo = await fetchRepo(name);
    

  return (
    <>
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <div className="card-stats">
        <div className="card-stat">
            <FaStar/>
            <span></span>
        </div>
    </div>
    </>
  )
}

export default Repo