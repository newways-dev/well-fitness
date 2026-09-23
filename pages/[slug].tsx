import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { withLayout } from '../layout/Layout'
import { StubPage, StubPageProps } from '../page-components'
import { findStubPage, stubPages } from '../helpers/stubs'

const Stub: NextPage<StubPageProps> = ({ title }) => {
  return <StubPage title={title} />
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: stubPages.map((page) => ({ params: { slug: page.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<StubPageProps> = async ({
  params,
}) => {
  const page = findStubPage(String(params?.slug))

  if (!page) {
    return { notFound: true }
  }

  return { props: { title: page.title } }
}

export default withLayout(Stub)
