import type { SlideConfig, Chapter } from './types'
import Slide01Cover from './slides/Slide01Cover'
import Slide02Problem1 from './slides/Slide02Problem1'
import Slide03Problem2 from './slides/Slide03Problem2'
import Slide04Market1 from './slides/Slide04Market1'
import Slide05Market2 from './slides/Slide05Market2'
import Slide06Market3 from './slides/Slide06Market3'
import Slide07Market4 from './slides/Slide07Market4'
import Slide08Platform1 from './slides/Slide08Platform1'
import Slide09Platform2 from './slides/Slide09Platform2'
import Slide10Platform3 from './slides/Slide10Platform3'
import Slide11Platform4 from './slides/Slide11Platform4'
import Slide12Where1 from './slides/Slide12Where1'
import Slide13Where2 from './slides/Slide13Where2'
import Slide14End from './slides/Slide14End'

export const chapters: Chapter[] = [
  { label: '01 · SETUP', shortLabel: 'Setup', slideIndices: [0] },
  { label: '02 · THE PROBLEM', shortLabel: 'Problem', slideIndices: [1, 2] },
  { label: '03 · THE MARKET', shortLabel: 'Market', slideIndices: [3, 4, 5, 6] },
  { label: '04 · THE PLATFORM', shortLabel: 'Platform', slideIndices: [7, 8, 9, 10] },
  { label: '05 · WHERE THIS TAKES YOU', shortLabel: 'Future', slideIndices: [11, 12, 13] },
]

export const slides: SlideConfig[] = [
  { id: 1, title: 'Smart Energy. Smarter Homes.', component: Slide01Cover, chapterIndex: 0 },
  { id: 2, title: 'The Energy Crisis at Home', component: Slide02Problem1, chapterIndex: 1 },
  { id: 3, title: 'The EV Revolution Needs Smarter Charging', component: Slide03Problem2, chapterIndex: 1 },
  { id: 4, title: 'A £200B Global Opportunity', component: Slide04Market1, chapterIndex: 2 },
  { id: 5, title: 'EV Adoption is Accelerating', component: Slide05Market2, chapterIndex: 2 },
  { id: 6, title: 'The Installer Advantage', component: Slide06Market3, chapterIndex: 2 },
  { id: 7, title: 'How myenergi Compares', component: Slide07Market4, chapterIndex: 2 },
  { id: 8, title: 'The myenergi Ecosystem', component: Slide08Platform1, chapterIndex: 3 },
  { id: 9, title: 'Meet the Products', component: Slide09Platform2, chapterIndex: 3 },
  { id: 10, title: 'zappi — The Smart EV Charger', component: Slide10Platform3, chapterIndex: 3 },
  { id: 11, title: 'Complete Home Connectivity', component: Slide11Platform4, chapterIndex: 3 },
  { id: 12, title: 'Growth That Speaks for Itself', component: Slide12Where1, chapterIndex: 4 },
  { id: 13, title: 'A Network Built on Trust', component: Slide13Where2, chapterIndex: 4 },
  { id: 14, title: "Let's Power the Future Together", component: Slide14End, chapterIndex: 4 },
]
