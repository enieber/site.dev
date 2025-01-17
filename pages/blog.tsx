import Title from '../components/Title.bs'
import PostCards from '../components/PostCards'
import { useState } from 'react'
import Search from '../components/Search.bs'
import { allBlogs } from 'contentlayer/generated'
import { meta } from '../data/Metadata.bs'
import Container from '../components/Container'
import { NextSeo } from 'next-seo'

function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    <Container>
      <NextSeo
        title="Blog"
        description="Artigos que escrevi"
        canonical={`${meta.url}/blog`}
        openGraph={{ url: `${meta.url}/blog` }}
      />

      <Title title="Blog" des={`Artigos que escrevi`}
      />
      <Search changeHandler={e => setSearchValue(e.target.value)} />
      {filteredBlogPosts.map((post, index) => (
        <PostCards post={post} key={index} slug={post.slug} />
      ))}
    </Container>
  )
}

export const getStaticProps = async () => {
  const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  return {
    props: {
      posts,
    },
  }
}

export default Blog
