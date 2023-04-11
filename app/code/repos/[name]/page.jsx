import React from 'react'
import Repo from '@/app/components/Repo';
import Link from 'next/link';


const RepoPage = ({params: {name}}) => {
  return ( 
    <div className="card">
        <Link href = '/repos'/>
        <Repo name = {name}/>
        
        
    </div>
  )
}

export default RepoPage