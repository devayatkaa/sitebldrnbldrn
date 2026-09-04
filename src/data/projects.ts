export interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  poster: string;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Digital Narrative',
    category: 'Commercial',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000'
  },
  {
    id: '02',
    title: 'Urban Flow',
    category: 'Music Video',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000'
  },
  {
    id: '03',
    title: 'Future Aesthetics',
    category: 'Motion Design',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000'
  },
  {
    id: '04',
    title: 'Abstract Motion',
    category: 'Art',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://images.unsplash.com/photo-1614850523296-e8c041de4398?q=80&w=1000'
  },
  {
    id: '05',
    title: 'Midnight Session',
    category: 'Documentary',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1000'
  }
];