import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GetPostsEdgesQuery } from '@/generates/gql/graphql'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  edge: NonNullable<GetPostsEdgesQuery['posts']>['edges'][number]
}

export default function CardItem({ edge }: Props) {
  return (
    <Card>
      <CardHeader>
        {edge.node.slug && (
          <CardTitle>
            <Link href={`post/${edge.node.slug}`}>{edge?.node?.title}</Link>
          </CardTitle>
        )}
        <CardDescription>By {edge?.node?.author?.node.name}</CardDescription>
      </CardHeader>
      <CardContent className="relative h-96">
        {edge.node.featuredImage?.node.sourceUrl && (
          <Image
            src={edge.node.featuredImage.node.sourceUrl}
            alt={edge.node.featuredImage.node.altText || 'Image description'}
            fill
          />
        )}
      </CardContent>
      <CardFooter className="mt-6">
        От{' '}
        {edge.node.date
          ? new Date(edge.node.date).toLocaleDateString('ru-RU')
          : 'Дата не определена'}
      </CardFooter>
    </Card>
  )
}
