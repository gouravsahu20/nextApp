import React, { useEffect, useState } from 'react'
// import {useRouter} from 'next/router'
import styles from '../../styles/Blogpost.module.css'
import Head from 'next/head'
import * as fs from 'fs';

const Slug = (props) => {

  const [blog, setBlog] = useState(props.myBlog);
//   console.log(props.myBlog)

  return (
    <div className={styles.container}>
        <Head>
            <title>{blog && blog.title}|Starlink</title>
            <meta name="description" content="A blog for coders by a coder" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <div>
                <p className={styles.blogcontent}>{blog && blog.content}</p>
            </div>
        </main>
    </div>
  );

};

export async function getStaticPaths() {
    let data = await fs.promises.readdir("blogposts");
    let myfile;
    let parsedata;
    let path = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        // console.log(item)
        myfile = await fs.promises.readFile(('blogposts/' + item), 'utf-8')
        parsedata = JSON.parse(myfile)
        path.push({params:{slug: parsedata.slug}})
    }
    // console.log(path);
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogposts/${slug}.json`, 'utf-8')
    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}


// export async function getServerSideProps(context) {
//     let {slug} = context.query
//     let data = await fetch(`http://localhost:3000/api/blogcontent?slug=${slug}`);
//     let myBlog = await data.json()
//     return {
//         props: { myBlog }, // will be passed to the page component as props
//     }
// }

export default Slug;
