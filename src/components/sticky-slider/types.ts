export interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  video: string
  textColor: string
  buttonText: string
  progress: string
}

export interface SubCategory {
  id: number
  name: string
  slideId: number
}

export interface TabData {
  id: number
  name: string
  slides: SlideData[]
  subCategories: SubCategory[]
}

export interface StickySliderState {
  activeTab: number
  currentSlide: number
  isInView: boolean
  scrollDirection: 'up' | 'down'
  manualTabSwitch: boolean
  loadedVideos: Set<string>
}

export interface VideoCache {
  [key: string]: HTMLVideoElement
}
