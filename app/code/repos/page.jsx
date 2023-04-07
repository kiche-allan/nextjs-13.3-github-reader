import React from 'react'

import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';
import Link from 'next/link';


async function fetchRepos() {
      const res = await fetch('https://api.github.com/users/kiche-allan/repos');
      const repos = await res.json();
      return repos;
}
const ReposPage = async() => {

    const repos = await fetchRepos();
    
  return (
    <div className = "repos-container">
        <h2>Repositories</h2>
        <ul className="repo-list">
            {repos.map((repo) => (
                <li href = {`/code/repos/${repo.name}`}>
                    <h3>{repo.name}</h3>
                </li>
            ))}
        </ul>
        {repos[0].name}
    </div>
  )
}

export default ReposPage