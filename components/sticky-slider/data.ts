import { TabData } from './types'

export const tabsData: TabData[] = [
  {
    id: 1,
    name: 'CREATOR',
    subCategories: [
      { id: 1, name: 'Sketch', slideId: 1 },
      { id: 2, name: '3D Model To Render (plugins)', slideId: 2 },
      { id: 3, name: 'CAD', slideId: 3 },
      { id: 4, name: 'Sitephoto', slideId: 4 },
      { id: 5, name: 'Model Photo', slideId: 5 },
      { id: 6, name: 'Color Map (Upload Custom Textures)', slideId: 6 },
      { id: 7, name: 'Art Presets', slideId: 7 },
    ],
    slides: [
      {
        id: 1,
        title: 'SKETCH TO RENDER',
        subtitle: 'Hand Drawings Come Alive',
        description:
          'Transform your hand-drawn sketches into photorealistic architectural visualizations with AI precision.',
        video: '/videos/create_sketch_s.mp4',
        textColor: 'text-black',
        buttonText: 'Upload Sketch',
        progress: '1/6',
      },
      {
        id: 2,
        title: '3D MODEL TO RENDER',
        subtitle: 'Plugins Integration',
        description:
          'Seamlessly integrate with your favorite 3D modeling software and enhance renders with AI.',
        video: '/videos/create_3d_s.mp4',
        textColor: 'text-black',
        buttonText: 'Get Plugins',
        progress: '2/6',
      },
      {
        id: 3,
        title: 'CAD TRANSFORMATION',
        subtitle: 'Technical To Visual',
        description:
          'Convert CAD files into stunning photorealistic renders while preserving structural accuracy.',
        video: '/videos/create_cad_s.mp4',
        textColor: 'text-black',
        buttonText: 'Try CAD',
        progress: '3/6',
      },
      {
        id: 4,
        title: 'Site photo enhancement',
        subtitle: 'Context Visualization',
        description:
          'Place your designs in real environments using site photos for contextual visualization.',
        video: '/videos/create_photo_s.mp4',
        textColor: 'text-black',
        buttonText: 'Upload Photo',
        progress: '4/6',
      },
      {
        id: 5,
        title: 'MODEL PHOTOGRAPHY',
        subtitle: 'Physical To Digital',
        description:
          'Capture physical architectural models and transform them into digital renders.',
        video: '/videos/create_modelphoto_s.mp4',
        textColor: 'text-black',
        buttonText: 'Capture Model',
        progress: '5/6',
      },
      {
        id: 6,
        title: 'CUSTOM TEXTURES',
        subtitle: 'Color Map Upload',
        description:
          'Upload your own textures and materials to create unique, personalized architectural visualizations.',
        video: '/videos/create_colormap_s.mp4',
        textColor: 'text-black',
        buttonText: 'Upload Textures',
        progress: '6/7',
      },
      {
        id: 7,
        title: 'ART PRESETS',
        subtitle: 'Style Library Access',
        description:
          'Access our curated library of architectural presets and styles to quickly apply professional looks to your renders.',
        video: '/videos/create_artpresets_s.mp4',
        textColor: 'text-black',
        buttonText: 'Browse Presets',
        progress: '7/7',
      },
    ],
  },
  {
    id: 2,
    name: 'EDITOR',
    subCategories: [
      { id: 1, name: 'Inpaint Details', slideId: 1 },
      { id: 2, name: 'Outpaint Expansion', slideId: 2 },
      { id: 3, name: 'Add Style', slideId: 3 },
    ],
    slides: [
      {
        id: 1,
        title: 'INPAINT DETAILS',
        subtitle: 'Precise Modifications',
        description:
          'Edit specific areas of your renders with AI-powered inpainting for precise modifications.',
        video: '/videos/create_artpresets_s.mp4',
        textColor: 'text-black',
        buttonText: 'Start Inpainting',
        progress: '1/3',
      },
      {
        id: 2,
        title: 'OUTPAINT EXPANSION',
        subtitle: 'Extend Your Vision',
        description:
          'Expand your renders beyond original boundaries with seamless AI-generated extensions.',
        video: '/videos/create_artpresets_s.mp4',
        textColor: 'text-black',
        buttonText: 'Expand View',
        progress: '2/3',
      },
      {
        id: 3,
        title: 'STYLE APPLICATION',
        subtitle: 'Aesthetic Transformation',
        description:
          'Apply different architectural styles and artistic approaches to transform your designs.',
        video: '/videos/edit_styletransfer_s.mp4',
        textColor: 'text-black',
        buttonText: 'Browse Styles',
        progress: '3/3',
      },
    ],
  },
  {
    id: 3,
    name: 'UPSCALER',
    subCategories: [{ id: 1, name: 'Enhance Details & Upscale', slideId: 1 }],
    slides: [
      {
        id: 1,
        title: 'DETAIL ENHANCEMENT',
        subtitle: 'AI-powered upscaling',
        description:
          'Enhance image details and upscale your renders to higher resolutions with advanced AI algorithms.',
        video: '/videos/upscale_s.mp4',
        textColor: 'text-black',
        buttonText: 'Enhance Details',
        progress: '1/1',
      },
    ],
  },
]
