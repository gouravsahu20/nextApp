import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Blogs.module.css'
import Link from 'next/link'
import * as fs from 'fs';

const Blogs = (props) => {
  
  const [blogs, setBlogs] = useState(props.allBlogs)
  
  return (
    <div>
      <Head>
        <title>Blogs|Starlink</title>
        <meta name="description" content="A blog for coders by a coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2 className={styles.heading}>All blogs</h2>
      </div>
      <div className={styles.blogsparent}>
        {blogs && blogs.map((blogitem)=>{
          return <ul key={blogitem.slug} className={styles.blogitem}>
            <li>
              <Link href={`/blogpost/${blogitem.slug}`}>
                  <div className={styles.blogtitle}>{blogitem.title}</div>
              </Link>
              <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
            </li>
          </ul>
        })}
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogposts");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item)
      myfile = await fs.promises.readFile(('blogposts/' + item), 'utf-8')
      allBlogs.push(JSON.parse(myfile))
  }

  return {
      props: { allBlogs }, // will be passed to the page component as props
  }
}

// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/listblogs");
//   let allBlogs = await data.json()

//   return {
//       props: { allBlogs }, // will be passed to the page component as props
//   }
// }

export default Blogs
