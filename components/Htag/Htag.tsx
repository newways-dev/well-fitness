import { HtagProps } from './Htag.props'

export const Htag = ({ tag, children, className }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={className}>{children}</h1>
    case 'h2':
      return <h2 className={className}>{children}</h2>
    case 'h3':
      return <h3 className={className}>{children}</h3>
    default:
      return <></>
  }
}
