import { useRouter } from 'next/router'
import { Button, Heading, Htag } from '../../components'
import styles from './StubPage.module.scss'

export interface StubPageProps {
  title: string
}

export const StubPage = ({ title }: StubPageProps) => {
  const router = useRouter()

  return (
    <div className="container">
      <Heading title={title} location={title} />
      <div className={styles.stub}>
        <Htag tag="h2" className={styles.message}>
          Section under construction
        </Htag>
        <p className={styles.description}>
          The “{title}” page is coming soon. For now you can go back to the home page and
          keep browsing equipment.
        </p>
        <Button variant="primary" onClick={() => router.push('/')}>
          Back to home
        </Button>
      </div>
    </div>
  )
}
