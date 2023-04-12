import React from 'react'

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000)
    const res = await fetch(`https://api.github.com/repos/kiche-allan/${name}/contents`);
        const contents = await res.json();
        return contents;
}
const RepoDir  = async ({ name }) => {

    const contents = await fetchRepoContents(name);
  return (
    <div>RepoDir</div>
  )
}

export default RepoDir