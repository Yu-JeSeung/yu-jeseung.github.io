export const profile = {
  name: "유제승",
  englishName: "JeSeung Yu",
  role: "AI Developer / Backend",
  summary:
    "사용자가 실제로 마주하는 문제를 데이터와 서비스 흐름으로 풀어내는 개발자입니다. 프로젝트에서 겪은 구현 과정과 기술 선택의 이유를 글로 정리하며 성장하고 있습니다.",
  email: "wptmd1410@gmail.com",
  github: "https://github.com/Yu-JeSeung",
  resumePdf: "portfolio.pdf",
  keywords: ["Backend", "AI", "Project", "Learning", "FastAPI", "RAG", "AWS"],
};

export const skills = [
  { label: "Language", value: "Python · SQL" },
  { label: "Backend", value: "FastAPI · Flask · REST API" },
  {
    label: "AI",
    value:
      "PyTorch · KoELECTRA · OpenCV · GPT-OSS · RAG · LangGraph · OCR · LSTM",
  },
  { label: "Infra", value: "Docker · OCI · AWS · MySQL · GitHub Actions" },
];

export const histories = [
  {
    group: "프로젝트",
    items: [
      {
        period: "2026.02 - 2026.04",
        title: "DearLook",
        points: [
          "코디 다이어리 앱 서비스 AI 파트 및 팀장 역할",
          "사용자 입력 사진에서 인물 영역을 추출하고 픽셀화 PNG로 반환하는 AI 파이프라인 구현",
        ],
      },
      {
        period: "2026.01 - 2026.03",
        title: "Relog",
        points: [
          "관계 기록 요약 및 관계 솔루션 앱 서비스 AI 파트 참여",
          "관계 기록 데이터를 요약하고 솔루션으로 연결하는 AI 기능 구성",
        ],
      },
      {
        period: "2025.03 - 진행 중",
        title: "동숲",
        points: [
          "동양미래대학 연동 앱 서비스 AI 파트 참여",
          "KoELECTRA, OpenCV, GPT-OSS, RAG, LangGraph 기반 AI 기능 구성",
          "AI 기능을 Docker 컨테이너로 분리하고 OCI 환경에서 운영",
        ],
      },
      {
        period: "2024.03 - 2024.12",
        title: "Easy Trip",
        points: [
          "사용자 선호도 기반 코스 추천 앱 서비스 AI 파트 및 팀장 역할",
          "Flask, LSTM, Spring Boot, MySQL, Docker, AWS 기반 데이터 흐름 구성",
        ],
      },
    ],
  },
  {
    group: "연구 / 수상",
    items: [
      {
        period: "2025.05",
        title: "텍스트 마이닝 기반 국내 머신러닝 연구의 동향 분석",
        points: [
          "국내 머신러닝 연구 논문 데이터를 활용한 텍스트 마이닝 분석",
          "키워드·토픽 변화 분석 결과로 한국차세대컴퓨팅학회 춘계학술대회 우수논문상 수상",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "DearLook",
    period: "2026.02 - 2026.04",
    subtitle: "코디 다이어리 앱 서비스",
    description:
      "사용자 입력 사진에서 인물만 분리해 픽셀화 PNG로 반환하는 AI 파이프라인을 구현했습니다. Python과 PyTorch 기반으로 인물 세그멘테이션 모델을 연동했습니다.",
    stack: ["Python", "PyTorch", "Segmentation", "Pixel Art", "AI Pipeline"],
    links: [{ label: "AI Repo", href: "https://github.com/DearLook/ai" }],
    highlight: "AI / Team Lead",
  },
  {
    title: "Relog",
    period: "2026.01 - 2026.03",
    subtitle: "관계 기록 요약 & 관계 솔루션 앱 서비스",
    description:
      "관계 기록 데이터를 요약하고 관계 솔루션으로 연결하는 앱 서비스입니다. AI 파트를 담당하며 기록 기반 요약 흐름을 구성했습니다.",
    stack: ["Python", "AI", "Summary", "Docker"],
    links: [{ label: "AI Repo", href: "https://github.com/Menhealer/ai" }],
    highlight: "AI",
  },
  {
    title: "동숲",
    period: "2025.03 - 진행 중",
    subtitle: "동양미래대학 연동 앱 서비스",
    description:
      "학교 공지, 강의실, 식단, 커뮤니티 정보를 한 번에 확인할 수 있는 서비스입니다. 챗봇, 이미지 분석, 비속어 필터링 기능을 Docker 컨테이너로 분리하고 OCI 환경에서 운영했습니다.",
    stack: [
      "Python",
      "FastAPI",
      "KoELECTRA",
      "OpenCV",
      "GPT-OSS",
      "RAG",
      "LangGraph",
      "OCI",
      "Docker",
      "Nginx",
    ],
    links: [{ label: "GitHub", href: "https://github.com/dongsooop/AI" }],
    highlight: "600+ downloads",
  },
  {
    title: "Easy Trip",
    period: "2024.03 - 2024.12",
    subtitle: "사용자 선호도 기반 코스 추천 앱 서비스",
    description:
      "사용자 선호와 장소 데이터를 바탕으로 데이트 코스를 추천하는 서비스입니다. LSTM 기반 모델과 Flask API, Spring Boot 서버, Docker 기반 분리 구조를 구성했습니다.",
    stack: ["Python", "Flask", "LSTM", "Spring Boot", "MySQL", "Docker", "AWS"],
    links: [{ label: "GitHub", href: "https://github.com/Ez-Trip" }],
    highlight: "Recommendation AI",
  },
  {
    title: "텍스트 마이닝 기반 국내 머신러닝 연구의 동향 분석",
    period: "2025.05",
    subtitle: "텍스트마이닝 기반 논문 연구",
    description:
      "국내 머신러닝 연구 흐름을 논문 데이터로 분석하고 키워드, 토픽, 시계열 변화를 정리했습니다. 한국차세대컴퓨팅학회 춘계학술대회에서 우수논문상을 수상했습니다.",
    stack: ["Text Mining", "Python", "Topic Modeling", "Research"],
    links: [
      {
        label: "RISS",
        href: "https://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=a304acf5dca659607ecd42904f0c5d65&keyword=%ED%85%8D%EC%8A%A4%ED%8A%B8%20%EB%A7%88%EC%9D%B4%EB%8B%9D%EA%B8%B0%EB%B0%98%20%EA%B5%AD%EB%82%B4%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D",
      },
    ],
    highlight: "우수논문상",
  },
];
