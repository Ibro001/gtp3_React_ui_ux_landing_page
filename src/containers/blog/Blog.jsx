import React from 'react'
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__margin' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, we are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog01} date='March 26, 2023' title='GPT-3 and Open AI is the future. Lets us explore how it is?'/>
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog02} date='March 26, 2023' title='GPT-3 and Open AI is the future. Lets us explore how it is?'/>
          <Article imgUrl={blog03} date='March 26, 2023' title='GPT-3 and Open AI is the future. Lets us explore how it is?'/>
          <Article imgUrl={blog04} date='March 26, 2023' title='GPT-3 and Open AI is the future. Lets us explore how it is?'/>
          <Article imgUrl={blog05} date='March 26, 2023' title='GPT-3 and Open AI is the future. Lets us explore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog