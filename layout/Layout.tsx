import { FC } from 'react'
import { LayoutProps } from './Layout.props'
import { Header } from './Header/Header'
import styles from './Layout.module.scss'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
