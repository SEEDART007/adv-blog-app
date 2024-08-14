import React from 'react'
import pic from '../assets/pic.jpeg'

function Post() {
  return (
    <div className=' m-8 p-4'>
        <div className=' flex '>
      <img src={pic} className=' h-60 w-60'/>
      <div>
      <h1 className=' font-bold text-blue-500 text-3xl  m-3 p-2'>This is heading</h1>
      <p className='line-clamp-3 m-3 p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias iure velit aut maiores recusandae ipsam quam ratione animi rem et. Officiis laboriosam impedit amet molestias illo laudantium distinctio animi expedita et maiores consectetur placeat quisquam eligendi possimus eius labore magnam, laborum sed vero, minima saepe. Aliquam, obcaecati, consectetur iusto repellat ullam mollitia amet ipsam nulla quia facere accusamus dicta excepturi illum pariatur asperiores soluta reiciendis voluptatem quam voluptatibus minus molestiae delectus eaque quae maiores. Dolorum et nobis odio laudantium reprehenderit ipsam nulla amet tempore ex cumque?</p>
      </div>

        </div>
    </div>
  )
}

export default Post
