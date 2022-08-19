import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/api/listblogs")
      .then((res)=>{
        return res.json()
      })
        .then((data)=>{
          setBlogs(data)
        })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Home|Starlink</title>
        <meta name="description" content="A blog for coders by a coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <h3 className={styles.title}>
          Welcome to Starlink!
        </h3>

        <p className={styles.description}>
          A blog for coders by a coder.
        </p>

        <p className={styles.section}>
          Popular blogs &rarr;
        </p>

        <div className={styles.grid}>
          {blogs.map((blogitem)=>{
            return <Link href={`/blogpost/${blogitem.slug}`} key={blogitem.slug}>
              <span className={styles.card}>
                <h2>{blogitem.title}</h2>
                <p>{blogitem.content.substr(0, 50)}...</p>
              </span>
            </Link>
           
          })}
        </div>
    </div>
  )
}