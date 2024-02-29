export interface HomeProjectProps {
  slug: string
  index: number
  title: string
  status: string
  manageModal: (active: boolean, index: number, x: number, y: number) => void
}
