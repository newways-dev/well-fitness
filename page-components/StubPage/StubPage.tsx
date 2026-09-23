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
          Раздел в разработке
        </Htag>
        <p className={styles.description}>
          Страница «{title}» скоро появится. Пока можно вернуться на главную и
          продолжить выбор оборудования.
        </p>
        <Button variant="primary" onClick={() => router.push('/')}>
          На главную
        </Button>
      </div>
    </div>
  )
}
