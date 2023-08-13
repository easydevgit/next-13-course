import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GetPostDocument, GetPostsEdgesDocument } from '@/generates/gql/graphql'
import { client } from '@/lib/requestClient'
import { Metadata } from 'next'
import Image from 'next/image'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const post = await getPost(id)

  return {
    title: post?.title,
  }
}

async function getPost(id: string) {
  const { post } = await client.request(GetPostDocument, { id })
  return post
}

export async function generateStaticParams() {
  const { posts } = await client.request(GetPostsEdgesDocument)
  if (posts?.edges) {
    return posts.edges.map((edge) => ({ id: edge.node.slug }))
  } else {
    return []
  }
}

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const post = await getPost(id)
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post?.title}</CardTitle>
        <CardDescription>
          By {post?.author?.node.name} oт{' '}
          {post?.date
            ? new Date(post.date).toLocaleDateString('ru-RU')
            : 'Дата не определена'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-96">
          {post?.featuredImage?.node.sourceUrl && (
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || 'Image description'}
              fill
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: post?.content ? post.content : '',
          }}
          className="mt-6"
        ></div>
      </CardContent>
    </Card>
  )
}
