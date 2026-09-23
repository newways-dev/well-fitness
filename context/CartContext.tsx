import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  CartLine,
  addLine,
  countItems,
  parseStoredCart,
  removeLine,
  serializeCart,
  setLineQuantity,
} from '../lib/cart'

const STORAGE_KEY = 'well-fitness-cart'

interface CartContextValue {
  lines: CartLine[]
  count: number
  hydrated: boolean
  add: (id: number) => void
  setQuantity: (id: number, quantity: number) => void
  remove: (id: number) => void
  clear: () => void
  quantityOf: (id: number) => number
}

const CartContext = createContext<CartContextValue | null>(null)

function readStorage(): CartLine[] {
  try {
    return parseStoredCart(window.localStorage.getItem(STORAGE_KEY))
  } catch {
    return []
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [lines, setLines] = useState<CartLine[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setLines(readStorage())
    setHydrated(true)

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setLines(parseStoredCart(event.newValue))
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  useEffect(() => {
    if (!hydrated) {
      return
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, serializeCart(lines))
    } catch {}
  }, [lines, hydrated])

  const add = useCallback(
    (id: number) => setLines((current) => addLine(current, id)),
    [],
  )
  const setQuantity = useCallback(
    (id: number, quantity: number) =>
      setLines((current) => setLineQuantity(current, id, quantity)),
    [],
  )
  const remove = useCallback(
    (id: number) => setLines((current) => removeLine(current, id)),
    [],
  )
  const clear = useCallback(() => setLines([]), [])

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count: countItems(lines),
      hydrated,
      add,
      setQuantity,
      remove,
      clear,
      quantityOf: (id) =>
        lines.find((line) => line.id === id)?.quantity ?? 0,
    }),
    [lines, hydrated, add, setQuantity, remove, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
