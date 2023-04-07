import React from 'react'

async function fetchRepos() {
      const res = await fetch('https://api.github.com/users/kiche-allan/repos');
      const repos = await res.json();
      return repos;
}
const ReposPage = async() => {

    const repos = await fetchRepos();
    console.log(repos);
  return (
    <div>
        {repos[0].name}
    </div>
  )
}

export default ReposPage