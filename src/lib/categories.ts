export type CategoryColors = {
  bg: string
  text: string
}

export const CATEGORY_COLORS: Record<string, CategoryColors> = {
  'Product Design': { bg: '#e2e2e2', text: '#121212' },
  UX: { bg: '#d1d1d1', text: '#121212' },
  Exploration: { bg: '#f0f0f0', text: '#121212' },
}

export const getCategoryColors = (category: string): CategoryColors => {
  return CATEGORY_COLORS[category] ?? { bg: '#e5e5e5', text: '#121212' }
}
