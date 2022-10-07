import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import styles from './Tabs.module.scss'

export interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  buttons: string[]
}

export const Tabs = ({ buttons, className }: TabsProps) => {
  const [active, setActive] = useState<number>(0)

  return (
    <div className={clsx(styles.tabs, className)}>
      {buttons.map((button, index) => (
        <span
          onClick={() => setActive(index)}
          key={index}
          className={clsx(styles.tab, { [styles.active]: active === index })}
        >
          {button}
        </span>
      ))}
    </div>
  )
}
