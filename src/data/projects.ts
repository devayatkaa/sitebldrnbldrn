export interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  poster?: string;
  youtubeUrl?: string;
  youtubeLabel?: string;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Стиль Azzazin',
    category: 'Развлекательный',
    videoUrl: 'https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/minion.mp4',
    poster: '/posters/minion.webp',
    youtubeUrl: 'https://youtu.be/FkxC71ai0yY?si=UviWP6_gMamyhoAF&t=81',
    youtubeLabel: '2,5 млн',
  },
  {
    id: '02',
    title: 'Простой Motion',
    category: 'UI Стиль',
    videoUrl: 'https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/folder.mp4',
    poster: '/posters/folder.webp',
  },
  {
    id: '03',
    title: 'Стиль Azzazin',
    category: 'Развлекательный',
    videoUrl: 'https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/pudge.mp4',
    poster: '/posters/pudge.webp',
    youtubeUrl: 'https://youtu.be/FkxC71ai0yY?si=fXpmZYbOfxVyGNyU&t=243',
    youtubeLabel: '2,5 млн',
  },
  {
    id: '04',
    title: 'Стиль Azzazin',
    category: 'Развлекательный',
    videoUrl: 'https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/tiny.mp4',
    poster: '/posters/tiny.webp',
    youtubeUrl: 'https://youtu.be/eLb9KPCpaVc?si=Lho0dRHx29H6bPIF&t=79',
    youtubeLabel: '900 тыс',
  },
  {
    id: '05',
    title: 'Стиль Azzazin',
    category: 'Развлекательный',
    videoUrl: 'https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/azazin.mp4',
    poster: '/posters/azazin.webp',
    youtubeUrl: 'https://youtu.be/j1yKEDHz4_M?si=f7hcvUsmhQV6syTH&t=899',
    youtubeLabel: '1,5 млн',
  },
  {
    id: '06',
    title: 'Моушн интро',
    category: 'Развлекательный',
    videoUrl: 'https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/kotikyblur.mp4',
    poster: '/posters/kotikyblur.webp',
    youtubeUrl: 'https://youtu.be/UZlSUTgSqb8',
    youtubeLabel: '450 тыс',
  }
];
