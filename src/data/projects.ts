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
    title: 'Стиль Azzazin',
    category: 'Fun',
    videoUrl: '/videos/minion.mp4',
	poster: "",
  },
  {
    id: '02',
    title: 'Простой Motion',
    category: 'Commercial',
    videoUrl: '/videos/folder.mp4',
	poster: "",
  },
  {
    id: '03',
    title: 'Стиль Azzazin',
    category: 'Fun',
    videoUrl: '/videos/pudge.mp4',
	poster: "",
  },
  {
    id: '04',
    title: 'Стиль Azzazin',
    category: 'Fun',
    videoUrl: '/videos/tiny.mp4',
	poster: "",
  },
  {
    id: '05',
    title: 'Стиль Azzazin',
    category: 'Fun',
    videoUrl: '/videos/azazin.mp4',
	poster: "",
  }
];