import type { Product } from './catalog'

export type CartLine = {
  id: number
  quantity: number
}

export type CartEntry = {
  product: Product
  quantity: number
}

export const MAX_QUANTITY = 99

function clamp(quantity: number): number {
  if (!Number.isFinite(quantity)) {
    return 0
  }
  return Math.min(MAX_QUANTITY, Math.max(0, Math.floor(quantity)))
}

export function removeLine(lines: CartLine[], id: number): CartLine[] {
  return lines.filter((line) => line.id !== id)
}

export function setLineQuantity(
  lines: CartLine[],
  id: number,
  quantity: number,
): CartLine[] {
  const next = clamp(quantity)

  if (next === 0) {
    return removeLine(lines, id)
  }
  if (!lines.some((line) => line.id === id)) {
    return lines
  }

  return lines.map((line) => (line.id === id ? { ...line, quantity: next } : line))
}

export function addLine(
  lines: CartLine[],
  id: number,
  quantity = 1,
): CartLine[] {
  const existing = lines.find((line) => line.id === id)

  if (existing) {
    return setLineQuantity(lines, id, existing.quantity + quantity)
  }

  const next = clamp(quantity)
  return next > 0 ? [...lines, { id, quantity: next }] : lines
}

export function countItems(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.quantity, 0)
}

export function resolveLines(
  lines: CartLine[],
  products: Product[],
): CartEntry[] {
  return lines.reduce<CartEntry[]>((entries, line) => {
    const product = products.find((item) => item.id === line.id)
    return product ? [...entries, { product, quantity: line.quantity }] : entries
  }, [])
}

export function totalPrice(entries: CartEntry[]): number {
  return entries.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0,
  )
}

export function serializeCart(lines: CartLine[]): string {
  return JSON.stringify(lines)
}

export function parseStoredCart(raw: string | null): CartLine[] {
  if (!raw) {
    return []
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return []
  }

  if (!Array.isArray(parsed)) {
    return []
  }

  return parsed.reduce<CartLine[]>((lines, item) => {
    if (
      typeof item !== 'object' ||
      item === null ||
      !Number.isInteger(item.id) ||
      typeof item.quantity !== 'number'
    ) {
      return lines
    }
    return addLine(lines, item.id, item.quantity)
  }, [])
}
