import { createRouter, createWebHashHistory } from 'vue-router'

import TreasureView from "@/views/TreasureView";
import RecordView from "@/views/RecordView";
import NoveltyView from "@/views/NoveltyView";
import ShortcutView from "@/views/ShortcutView";
import GalleryView from "@/views/GalleryView";
import ProfileCardView from "@/views/ProfileCardView";
import ArticleDetailsView from "@/views/ArticleDetailsView";
import ColorClipboardView from "@/views/ColorClipboardView";
import PracticalTableView from "@/views/PracticalTableView";


const routes = [
  {
    path: '/',
    name:'index',
    redirect:'treasure',
    children:[
      {
        path:'treasure',
        name:'treasure',
        component: TreasureView,
      },
      {
        path:'record',
        name:'record',
        component: RecordView
      },
      {
        path:'novelty',
        name:'novelty',
        component: NoveltyView
      },
      {
        path:'shortcut',
        name:'shortcut',
        component: ShortcutView
      },


      {
        path:'gallery',
        name:'gallery',
        component: GalleryView,
      },
      {
        path: 'profileCard',
        name: 'profileCard',
        component: ProfileCardView,
      },
      {
        path: 'articleDetails',
        name: 'articleDetails',
        component: ArticleDetailsView,
      },
      {
        path: 'colorClipboard',
        name: 'colorClipboard',
        component: ColorClipboardView,
      },
      {
        path: 'practicalTable',
        name: 'practicalTable',
        component: PracticalTableView,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
