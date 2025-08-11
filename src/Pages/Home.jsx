import React from 'react'
import PostCard from '../Components/PostCard'

export default function Home({postList}) {
  // {postList.map((i, k) => {
  //   <PostCard postList={i} index = k/>
  // })}
  return (
    <div className='md:grid grid-cols-4 gap-4 md:px-4 py-4'>
      {postList.map((i, k) => 
        <PostCard key={k} postList={i}/>
      )}
    </div>
  )
}
