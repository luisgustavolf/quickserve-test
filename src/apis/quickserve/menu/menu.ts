export interface Menu {
  id: number
  name: string
  type: string
  collapse: number
  sections: MenuSection[]
}

export interface MenuSection {
  id: number
  name: string
  description: string | null
  position: number
  visible?: number
  images: Image[]
  items: MenuItem[]
}

export interface Image {
  id: number
  image: string
}

export interface MenuItem {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible?: number
  availabilityType: string
  sku?: string
  images?: Image[]
  available: boolean
  modifiers?: Modifier[]
}

export interface Modifier {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: ItemModifier[]
}

export interface ItemModifier {
  id: number
  name: string
  price: number
  maxChoices: number
  position: number
  visible: number
  availabilityType: string
  available: boolean
  qty?: number
}
