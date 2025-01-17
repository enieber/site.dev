import { Project } from '../lib/types';

const projects: Project[] = [
  {
    title: 'System.out.Girls 오프라인 네트워킹 행사',
    description:
      '"실수해도 괜찮아!"라는 주제로 발표',
    url: 'https://twitter.com/Systemoutgirls/status/1597930747624841216?s=20&t=NdKLP7oU00T9I_f3wfUNcw',
    image: '/projects/systemoutgirls-net.jpg'
  },
  {
    title: 'FECONF2022 - ReScript 같이 해요',
    description:
      'FECONF2022에서 "ReScript 같이 해요"라는 주제로 발표',
    url: 'https://www.youtube.com/watch?v=208ZBisLuXw',
    image: '/projects/feconf-rescript.webp'
  },
  {
    title: 'projectdiscovery/nuclei',
    description:
      'ProjectDiscovery의 nuclei 프로젝트의 README를 번역',
    url: 'https://github.com/projectdiscovery/nuclei/blob/master/README_KR.md',
    image: '/projects/nuclei.png'
  },
  {
    title: '소주콘 Shot 1 : 진로 빨간 뚜껑',
    description:
      '소주콘 1회에서 "좋은 질문은 좋은 대답을 만든다. with relay"라는 주제로 발표',
    url: 'https://docs.google.com/presentation/d/1OQmPNj3v_w3iMXYCir6gAvZIAvFjm9zI8Z2BTGY7q54/edit?usp=sharing',
    image: '/projects/sojucon-1st.png'
  },

  {
    title: 'XXIT 스트리트 데브 우먼 파이터',
    description:
      'XXIT에서 주최하는 스데파 세미나에서 "개발자의 외주"라는 주제로 발표',
    url: 'https://twitter.com/officialXXIT/status/1470682191999168512?s=20',
    image: '/projects/sdf.gif'
  },

  {
    title: 'miryang.dev',
    description:
      'My personal website written with Next.js, MDX, Emotion, Vercel',
    url: 'https://github.com/MiryangJung/miryang.dev',
    image: '/projects/miryangdev.gif'
  }
];

export default projects;
