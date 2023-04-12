import React from 'react'
import Link from 'next/link';
async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`https://api.github.com/repos/kiche-allan/${name}/contents`,
    {
      next: {
      revalidate: 50,
  }
},
    );
    const contents = await res.json();
    return contents;
}
const RepoDir  = async ({ name }) => {

    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content) => content.type === 'dir');
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href = {`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
        </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDir