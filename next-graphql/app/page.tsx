import PostsList from '@/components/PostsList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'List of posts',
  description: 'List of posts description',
}

export default async function Home() {
  return <PostsList />
}
