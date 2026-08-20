'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link2, Sliders, ShieldCheck } from 'lucide-react'

export const renderLogo = (hasLogo: string) => {
  switch (hasLogo) {
    case 'acc':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14 fill-current text-black dark:text-white">
          <path d="M12 2L2 22h4.5l2.5-5.5h6l2.5 5.5H22L12 2zm-2 12.5L12 9l2 5.5H10z" />
        </svg>
      )
    case 'ifc':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05" />
          <path d="M12 22.08V12" />
        </svg>
      )
    case 'powerbi':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" fill="currentColor">
          <rect x="3" y="13" width="4" height="8" rx="1" fill="#E2A100" />
          <rect x="10" y="7" width="4" height="14" rx="1" fill="#F2C811" />
          <rect x="17" y="2" width="4" height="19" rx="1" fill="#FFE787" />
        </svg>
      )
    case 'navisworks':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <rect width="24" height="24" rx="4" fill="#0072C6" />
          <path d="M6 18V6h3.5l5 7.5V6H18v12h-3.5L9.5 10.5V18H6z" fill="white" />
        </svg>
      )
    case 'grasshopper':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 19l4-4h6l4 4" />
          <path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
          <path d="M12 9V3" />
          <path d="M10 5l2-2 2 2" />
        </svg>
      )
    case 'blender':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <circle cx="12" cy="12" r="10" fill="#E87D0D" />
          <circle cx="12" cy="12" r="4" fill="#005B94" />
          <path d="M12 4c2 0 4 1 5 3M12 20c-2 0-4-1-5-3M4 12c0-2 1-4 3-5" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      )
    case 'civil3d':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <rect width="24" height="24" rx="4" fill="#7030A0" />
          <path d="M17 15.5c-1 1-2.5 1.5-4 1.5-3 0-5.5-2.5-5.5-5.5S10 6 13 6c1.5 0 3 .5 4 1.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'autocad':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <rect width="24" height="24" rx="4" fill="#D32F2F" />
          <path d="M6 18L12 6l6 12h-3l-3-6.5L9 18H6z" fill="white" />
        </svg>
      )
    case 'etabs':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <rect width="24" height="24" rx="4" fill="#34495E" />
          <text x="12" y="15" fill="white" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ETABS</text>
        </svg>
      )
    case 'tekla':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" fill="none" stroke="#005A9C" strokeWidth="2">
          <path d="M6 6h12M6 18h12M12 6v12M6 6l12 12M18 6L6 18" />
        </svg>
      )
    case 'vectorworks':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#ccc" strokeWidth="1" />
          <circle cx="12" cy="12" r="9" fill="white" />
          <path d="M8 8l4 8 4-8" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'databricks':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 3.5L7.5 9v6L12 17.5 16.5 15V9L12 6.5z" fill="#FF3622" />
        </svg>
      )
    case 'snowflake':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" fill="none" stroke="#29B6F6" strokeWidth="2">
          <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
          <path d="M12 6l-3 3M12 18l3-3M6 12l3 3M18 12l-3-3" />
        </svg>
      )
    case 'revit':
      return (
        <svg viewBox="37 23 50 50" className="w-14 h-14 text-black dark:text-white">
          <path d="M0 0 C2.5676434 0.06286503 5.13283152 0.08200902 7.70117188 0.09375 C9.3366186 0.11207254 10.97204037 0.13281851 12.60742188 0.15625 C13.75584061 0.16899963 13.75584061 0.16899963 14.92745972 0.18200684 C18.68595049 0.28351146 20.47649545 0.42834072 23.67773438 2.5625 C23.86523438 6.1875 23.86523438 6.1875 23.67773438 9.5625 C24.66773438 9.5625 25.65773437 9.5625 26.67773438 9.5625 C26.67773438 22.7625 26.67773438 35.9625 26.67773438 49.5625 C20.30548545 49.60834352 13.93380571 49.64818922 7.56152344 49.67236328 C5.39255843 49.68243789 3.22360706 49.69609798 1.0546875 49.71337891 C-2.05797688 49.73756323 -5.17046214 49.74896832 -8.28320312 49.7578125 C-9.25720062 49.76813507 -10.23119812 49.77845764 -11.23471069 49.78909302 C-12.13549347 49.78924408 -13.03627625 49.78939514 -13.96435547 49.78955078 C-15.15682388 49.79621262 -15.15682388 49.79621262 -16.37338257 49.80300903 C-18.32226562 49.5625 -18.32226562 49.5625 -20.32226562 47.5625 C-20.32226562 46.2425 -20.32226562 44.9225 -20.32226562 43.5625 C-21.97226562 44.2225 -23.62226562 44.8825 -25.32226562 45.5625 C-25.54538297 40.11843682 -25.70833466 34.67705123 -25.81665039 29.22949219 C-25.86180998 27.37843464 -25.92315702 25.5276964 -26.0012207 23.67773438 C-26.60699114 8.94919815 -26.60699114 8.94919815 -23.94238281 3.99902344 C-17.62783087 -1.26674479 -7.76331626 -0.19213157 0 0 Z " fill="currentColor" transform="translate(63.322265625,23.4375)"/>
          <path d="M0 0 C10.9 0 10.9 0 14 3 C14.4375 6.0625 14.4375 6.0625 14 9 C13.34 9.66 12.68 10.32 12 11 C12.32326553 14.59679066 12.32326553 14.59679066 13 18 C13.66 18 14.32 18 15 18 C15 18.99 15 19.98 15 21 C13.25 20.875 13.25 20.875 11 20 C9.66666667 18 8.33333333 16 7 14 C4.87880872 13.04768403 4.87880872 13.04768403 3 13 C3 15.64 3 18.28 3 21 C2.01 21 1.02 21 0 21 C0 14.07 0 7.14 0 0 Z " fill="#DBDBDB" transform="translate(59,34)"/>
          <path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C4 6.61 4 12.22 4 18 C2.68 18 1.36 18 0 18 C-0.33 15.03 -0.66 12.06 -1 9 C-2.94268841 11.91403262 -4.46395304 14.85808576 -6 18 C-7.65 17.67 -9.3 17.34 -11 17 C-11.99 13.04 -12.98 9.08 -14 5 C-12.35 5 -10.7 5 -9 5 C-8.67 6.32 -8.34 7.64 -8 9 C-7.690625 8.0409375 -7.690625 8.0409375 -7.375 7.0625 C-6 5 -6 5 -2.875 4.25 C-1.92625 4.1675 -0.9775 4.085 0 4 C-0.33 3.34 -0.66 2.68 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="currentColor" transform="translate(140,35)"/>
          <path d="M0 0 C8 0 8 0 10.5625 1.6875 C12 4 12 4 11.8125 6.625 C11 9 11 9 10 11 C10.60578253 13.01927511 11.26919734 15.02253397 12 17 C9.625 16.75 9.625 16.75 7 16 C5.6875 13.9375 5.6875 13.9375 5 12 C4.67 13.65 4.34 15.3 4 17 C2.35 16.67 0.7 16.34 -1 16 C-0.67 10.72 -0.34 5.44 0 0 Z " fill="currentColor" transform="translate(102,36)"/>
          <path d="M0 0 C2.28549511 1.03215908 3.47358888 1.82552444 4.9375 3.875 C5.125 6.5625 5.125 6.5625 4.9375 8.875 C3.6175 9.205 2.2975 9.535 0.9375 9.875 C1.9275 9.875 2.9175 9.875 3.9375 9.875 C3.6075 11.195 3.2775 12.515 2.9375 13.875 C-3.4458448 14.35676187 -3.4458448 14.35676187 -6.0625 12.3125 C-7.50996494 8.78430422 -7.05497239 6.51406544 -6.0625 2.875 C-4.01672418 0.6175922 -3.06645811 -0.18584595 0 0 Z" fill="currentColor" className="text-neutral-800 dark:text-neutral-200" transform="translate(121.0625,39.125)"/>
          <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.99 3 1.98 3 3 C3.99 3.33 4.98 3.66 6 4 C5.67 4.99 5.34 5.98 5 7 C4.34 7 3.68 7 3 7 C3 8.98 3 10.96 3 13 C3.99 13 4.98 13 6 13 C6 13.99 6 14.98 6 16 C4.00045254 16.04254356 1.99958364 16.04080783 0 16 C-1 15 -1 15 -1.09765625 12.93359375 C-1.08025391 11.69802734 -1.08025391 11.69802734 -1.0625 10.4375 C-1.05347656 9.61121094 -1.04445312 8.78492188 -1.03515625 7.93359375 C-1.02355469 7.29550781 -1.01195312 6.65742187 -1 6 C-1.66 6 -2.32 6 -3 6 C-3 5.01 -3 4.02 -3 3 C-2.34 3 -1.68 3 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="currentColor" transform="translate(148,37)"/>
          <path d="M0 0 C2.97 0 5.94 0 9 0 C9.33 0.66 9.66 1.32 10 2 C8.02 2.33 6.04 2.66 4 3 C3.74984127 6.41642759 3.74984127 6.41642759 4 10 C4.99 10.66 5.98 11.32 7 12 C5.68 12 4.36 12 3 12 C3 14.97 3 17.94 3 21 C2.01 21 1.02 21 0 21 C0 14.07 0 7.14 0 0 Z " fill="#F1F1F1" transform="translate(59,34)"/>
          <path d="M0 0 C1.99954746 -0.04254356 4.00041636 -0.04080783 6 0 C7 1 7 1 7.125 3.5 C7 6 7 6 6 7 C4.00041636 7.04080783 1.99954746 7.04254356 0 7 C0 4.69 0 2.38 0 0 Z " fill="#101010" transform="translate(62,37)"/>
          <path d="M0 0 C2.475 0.495 2.475 0.495 5 1 C4.67 2.32 4.34 3.64 4 5 C2.68 5 1.36 5 0 5 C0 3.35 0 1.7 0 0 Z " fill="#BCBCBC" transform="translate(105,39)"/>
          <path d="M0 0 C1.98 0.495 1.98 0.495 4 1 C4 1.99 4 2.98 4 4 C3.01 4.33 2.02 4.66 1 5 C0.34 4.01 -0.32 3.02 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#131313" transform="translate(140,35)"/>
        </svg>
      )
    case 'rhino':
      return (
        <svg viewBox="8 4 84 62" className="w-14 h-14 text-black dark:text-white">
          <path d="M0 0 C2.55324504 2.55324504 2.41486326 3.68766832 2.5625 7.25 C2.49465754 15.23602668 -1.0937369 21.26368914 -5 28 C-3.07260715 27.82062304 -3.07260715 27.82062304 -1 27 C3.97210261 20.4080906 5.47154663 11.92807518 7 4 C11.34264101 4.73158963 12.92393685 6.72258846 15.61328125 10.03515625 C19.51927311 15.56956162 21.19364645 22.41118071 23.1875 28.8125 C24.70404218 32.33637303 24.70404218 32.33637303 28.375 33 C31.46530697 33 34.03156921 32.80957203 37 32 C36.46292236 35.86695903 35.41445371 37.97060499 33 41 C40.60132042 38.59515748 46.36525251 34.75456629 52.53125 29.828125 C55 28 55 28 57 28 C56.62892666 33.42089744 54.55543954 36.24490775 50.875 40 C50.37871094 40.5261792 49.88242188 41.0523584 49.37109375 41.59448242 C46.71992029 44.3683157 44.00560242 46.91962768 41 49.3125 C37.55730443 52.08144608 36.50302501 54.88645788 35 59 C34.34 59.66 33.68 60.32 33 61 C32.01 61 31.02 61 30 61 C30 61.66 30 62.32 30 63 C25.90020974 62.42407708 23.439312 60.21168346 20.25 57.6875 C12.43636178 51.36558772 12.43636178 51.36558772 3 49 C1.45703125 46.98828125 1.45703125 46.98828125 -0.1875 44.3125 C-3.46565872 39.50771436 -6.3171236 35.79849596 -12 34 C-15.48927549 33.73252941 -18.84563232 33.74535915 -22.33984375 33.921875 C-23.21769531 33.94765625 -24.09554688 33.9734375 -25 34 C-26 33 -26 33 -26.1875 29.6875 C-26.01223518 26.24062513 -25.61346865 24.88893794 -24 22 C-22.54176788 21.9729957 -21.08339325 21.95360213 -19.625 21.9375 C-18.81289063 21.92589844 -18.00078125 21.91429688 -17.1640625 21.90234375 C-15 22 -15 22 -13 23 C-12.94581674 20.91695462 -12.90712449 18.83350232 -12.875 16.75 C-12.85179687 15.58984375 -12.82859375 14.4296875 -12.8046875 13.234375 C-12.99374054 10.10365663 -13.50373246 8.66264933 -15 6 C-15 5.01 -15 4.02 -15 3 C-13.44033782 2.491217 -11.87710759 1.99336531 -10.3125 1.5 C-9.44238281 1.2215625 -8.57226562 0.943125 -7.67578125 0.65625 C-4.9623784 -0.0092269 -2.77927669 -0.26514394 0 0 Z M3 33 C2.67 33.66 2.34 34.32 2 35 C2.76721468 37.24416428 2.76721468 37.24416428 3.9375 39.625 C4.31777344 40.44226562 4.69804688 41.25953125 5.08984375 42.1015625 C5.54037109 43.04128906 5.54037109 43.04128906 6 44 C6.33 44 6.66 44 7 44 C7.12469099 38.42169984 7.12469099 38.42169984 6 33 C5.01 33 4.02 33 3 33 Z M10 41 C9.74969023 43.41619823 9.74969023 43.41619823 10 46 C13.22791555 48.1519437 14.28400809 48.20086443 18 48 C18 47.01 18 46.02 18 45 C15.36 43.68 12.72 42.36 10 41 Z M29 54 C29 54.99 29 55.98 29 57 C29.99 57 30.98 57 32 57 C31.67 56.01 31.34 55.02 31 54 C30.34 54 29.68 54 29 54 Z " fill="currentColor" transform="translate(35,5)"/>
          <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C2.804375 4.144375 3.60875 4.28875 4.4375 4.4375 C7 5 7 5 8 6 C8.14115161 8.67058851 8.04247107 11.32432238 8 14 C7.01 14.33 6.02 14.66 5 15 C5 12.36 5 9.72 5 7 C4.01 7 3.02 7 2 7 C2 9.31 2 11.62 2 14 C1.34 14 0.68 14 0 14 C0 9.38 0 4.76 0 0 Z M-7 4 C-7 4.66 -7 5.32 -7 6 C-6.34 6 -5.68 6 -5 6 C-5 5.34 -5 4.68 -5 4 C-5.66 4 -6.32 4 -7 4 Z " fill="currentColor" className="text-neutral-800 dark:text-neutral-200" transform="translate(19,71)"/>
          <path d="M0 0 C2.5625 0.1875 2.5625 0.1875 5.5625 1.1875 C7.9031065 0.90980092 10.23874308 0.58210023 12.5625 0.1875 C12.5625 1.1775 12.5625 2.1675 12.5625 3.1875 C10.9125 3.1875 9.2625 3.1875 7.5625 3.1875 C7.8925 4.5075 8.2225 5.8275 8.5625 7.1875 C9.8825 7.1875 11.2025 7.1875 12.5625 7.1875 C12.2325 8.5075 11.9025 9.8275 11.5625 11.1875 C8.5925 10.6925 8.5925 10.6925 5.5625 10.1875 C5.5625 9.5275 5.5625 8.8675 5.5625 8.1875 C5.005625 8.703125 4.44875 9.21875 3.875 9.75 C1.5625 11.1875 1.5625 11.1875 -1.125 10.9375 C-3.4375 10.1875 -3.4375 10.1875 -4.4375 9.1875 C-4.625 5.75 -4.625 5.75 -4.4375 2.1875 C-2.4375 0.1875 -2.4375 0.1875 0 0 Z M-1.4375 3.1875 C-1.4375 4.8375 -1.4375 6.4875 -1.4375 8.1875 C-0.4475 7.8575 0.5425 7.5275 1.5625 7.1875 C1.5625 5.8675 1.5625 4.5475 1.5625 3.1875 C0.5725 3.1875 -0.4175 3.1875 -1.4375 3.1875 Z " fill="currentColor" className="text-neutral-900 dark:text-neutral-100" transform="translate(46.4375,74.8125)"/>
          <path d="M0 0 C2.33944736 0.28730055 4.6739143 0.61936779 7 1 C7.33 0.67 7.66 0.34 8 0 C9.66617115 -0.04063832 11.33388095 -0.042721 13 0 C12.79375 0.61875 12.5875 1.2375 12.375 1.875 C12.25125 2.57625 12.1275 3.2775 12 4 C12.66 4.66 13.32 5.32 14 6 C13.625 8.125 13.625 8.125 13 10 C10.625 10.625 10.625 10.625 8 11 C7.34 10.34 6.68 9.68 6 9 C5.34 9.66 4.68 10.32 4 11 C1.5 10.8125 1.5 10.8125 -1 10 C-3 7 -3 7 -2.75 4.4375 C-2 2 -2 2 0 0 Z M1 3 C0.67 4.32 0.34 5.64 0 7 C1.32 7 2.64 7 4 7 C3.67 5.68 3.34 4.36 3 3 C2.34 3 1.68 3 1 3 Z M7 5 C7 5.66 7 6.32 7 7 C8.32 7.33 9.64 7.66 11 8 C10.02149805 6.97895449 9.02019573 5.9793879 8 5 C7.67 5 7.34 5 7 5 Z " fill="currentColor" className="text-neutral-900 dark:text-neutral-100" transform="translate(78,75)"/>
          <path d="M0 0 C0.825 0.04125 1.65 0.0825 2.5 0.125 C3.16 0.125 3.82 0.125 4.5 0.125 C6.83333333 0.125 9.16666667 0.125 11.5 0.125 C10.5 3.125 10.5 3.125 8.5 4.125 C8.09270772 6.44656597 7.75561323 8.7818787 7.5 11.125 C6.51 10.795 5.52 10.465 4.5 10.125 C4.5 8.805 4.5 7.485 4.5 6.125 C3.51 6.455 2.52 6.785 1.5 7.125 C2.16 7.125 2.82 7.125 3.5 7.125 C3.5 8.115 3.5 9.105 3.5 10.125 C1.25 10.875 1.25 10.875 -1.5 11.125 C-3.875 9.5 -3.875 9.5 -5.5 7.125 C-5.30595218 3.0499957 -4.49262693 0.22463135 0 0 Z " fill="currentColor" className="text-neutral-800 dark:text-neutral-200" transform="translate(64.5,74.875)"/>
        </svg>
      )
    case 'sketchup':
      return (
        <img src="/logo/sketchup.png" alt="SketchUp" className="h-10 w-auto max-w-[130px] object-contain object-left" />
      )
    case 'archicad':
      return (
        <img src="/logo/archicad_logo.png?v=2" alt="Archicad" className="h-10 w-auto max-w-[130px] object-contain object-left" />
      )
    default:
      return null
  }
}

const IntegrationCard = ({
  title,
  description,
  hasLogo,
  badge,
  infoIcon,
}: {
  title: string
  description: string
  hasLogo: string
  badge?: string | boolean
  infoIcon?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-3 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 group overflow-hidden"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
      </div>

      {/* Top Section: Logo & Badge */}
      <div className="flex justify-between items-start mb-1 relative z-10">
        <div className="h-12 min-w-12 flex items-center justify-start flex-shrink-0">
          {renderLogo(hasLogo)}
        </div>
        {badge && (
          <span className="bg-black dark:bg-white text-white dark:text-black text-[8px] font-extrabold tracking-widest px-2 py-0.5 rounded-full uppercase scale-90 origin-top-right mt-0.5">
            {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-[14.5px] font-bold text-neutral-900 dark:text-white mb-0.5 flex items-center gap-1.5 relative z-10 font-sans leading-tight">
        {title}
        {infoIcon && (
          <span className="text-neutral-400 dark:text-neutral-500 text-xs select-none">
            ⓘ
          </span>
        )}
      </h3>

      {/* Description */}
      <p className="text-neutral-500 dark:text-neutral-400 text-[11.5px] leading-snug font-sans font-medium flex-grow relative z-10">
        {description}
      </p>
    </motion.div>
  )
}

export const ThreeDIntegrations = () => {
  const t = useTranslations('Integrations')

  const benefits = [
    { key: 'planning', icon: Link2 },
    { key: 'control', icon: Sliders },
    { key: 'security', icon: ShieldCheck },
  ]

  const platforms = [
    { key: 'acc', hasLogo: 'acc' },
    { key: 'ifc', hasLogo: 'ifc' },
    { key: 'revit', hasLogo: 'revit' },
    { key: 'powerbi', hasLogo: 'powerbi' },
    { key: 'rhino', hasLogo: 'rhino' },
    { key: 'sketchup', hasLogo: 'sketchup' },
    { key: 'navisworks', hasLogo: 'navisworks' },
    { key: 'grasshopper', hasLogo: 'grasshopper' },
    { key: 'blender', hasLogo: 'blender' },
    { key: 'archicad', hasLogo: 'archicad' },
    { key: 'civil3d', hasLogo: 'civil3d' },
    { key: 'autocad', hasLogo: 'autocad' },
    { key: 'etabs', hasLogo: 'etabs' },
    { key: 'tekla', hasLogo: 'tekla' },
    { key: 'vectorworks', hasLogo: 'vectorworks', infoIcon: true },
    { key: 'databricks', hasLogo: 'databricks', badge: 'New' },
    { key: 'snowflake', hasLogo: 'snowflake', badge: 'New' },
  ]

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-[#FDFDFD] dark:bg-neutral-950/20 border-y border-neutral-100 dark:border-neutral-900">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10">
          <h2 className="heading-primary mb-4 text-left">
            {t('header')}
          </h2>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 pb-12 border-b border-neutral-100 dark:border-neutral-900">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white rounded-xl flex items-center justify-center mb-4 border border-neutral-100/50 dark:border-neutral-800/50">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="subheading-primary mb-2 dark:text-white font-sans ">
                  {t(`benefits.${benefit.key}.title`)}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-[13px] leading-relaxed font-sans font-medium">
                  {t(`benefits.${benefit.key}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {platforms.map((platform) => (
            <IntegrationCard
              key={platform.key}
              title={t(`${platform.key}.title`)}
              description={t(`${platform.key}.description`)}
              hasLogo={platform.hasLogo}
              badge={platform.badge}
              infoIcon={platform.infoIcon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
