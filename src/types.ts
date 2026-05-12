import type { ComponentType } from 'react'

export interface SlideConfig {
  id: number
  title: string
  component: ComponentType
  chapterIndex: number
}

export interface Chapter {
  label: string
  shortLabel: string
  slideIndices: number[]
}
