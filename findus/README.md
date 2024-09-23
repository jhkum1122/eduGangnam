# findus

## 프로젝트 개요

### 1. 👨‍🏫프로젝트 주제
- 공동목표 : 덕후에 의한 덕후를 위한 덕후의 서비스
- 개별목표 : 각자 세계관에서 최강자가 되자!

### 2. 🦾메인/서브 기능
- 덕후들에게 정확한 정보를 제공한다!

### 3. 🧑‍🤝‍🧑프로젝트 팀원

| 이름 | 역할 | 별칭 |
| ------------ | ------------- | ------------- |
| 이재희 | 개발팀장  | 최고의 개발팀장  |
| 김수정 | 기획팀장  | 최고의 기획팀장  |
| 강희운 | 개발멘토  | 최고의 개발멘토  |
| 박상원 | 기획멘토  | 최고의 기획멘토  |
| 박성재 | 개발자  | 본부장  |
| 금정호 | 개발자  | 인사팀장  |
| 윤형근 | 개발자  | 대외협력팀장  |
| 최상은 | 기획자  | 탕비실장  |

### 4. 💻개발환경
- **Version** : node v20.15.0
- **IDE** : vscode v1.92.2
- **Framework** : express v4.19.2
- **ORM** : sequalize CLI v6.6.2
  
### 5. ⚙️기술 스택
- **Server** : AWS EC2
- **DataBase** : Mysql, erdcloud
- **WS/WAS** : Nginx
- **아이디어 회의** : Discord, Zoom, Notion
  
### 6. 📝프로젝트 아키텍쳐

![findus_arch drawio_final](https://github.com/user-attachments/assets/19ce4f09-b8e9-49ec-bf76-10b37c3c8791)

### 7. 🧾 폴더구조
### FrontEnd
```
findus_front/
│
├── src/
│ ├── components/
│ ├── css/
│ ├── html/
│ ├── pages/
│ ├── services/
│ └── index.js
│
├── public/
│ └── index.html
│
├── .gitignore
├── README.md
├── package-lock.json
└── package.json

```
### BackEnd
```
findus_back/
├── config/
│ ├── config.js
│ └── db.js
│
├── controllers/
│ ├── image.js
│ ├── work.js
│ └── place.js
│
├── middleware/
│ └── index.js
│
├── models/
│ ├── user.js
│ └── post.js
│
├── passport/
│ ├── index.js
│ ├── kakaoStrategy.js
│ ├── localStrategy.js
│ └── googleStrategy.js
│
├── public/
│ └── main.css
│
├── routes/
│ ├── userRoutes.js
│ └── postRoutes.js
│
├── services/
│ ├── userService.js
│ └── postService.js
│
├── uploads/
│ └── helper.js
│
├── views/
│ └── index.html
│
├── .env
├── .gitignore
├── app.js
├── package-lock.json
└── package.json

```

### 8. ✒️ API

[여기](https://github.com/YOON829/findus/blob/main/해외_API명세서.xlsx)에서 엑셀 파일을 다운로드할 수 있습니다.



---------------------------------------

## 프로젝트 진행 규칙

### 1. 데일리 스크럼
- [노션](https://www.notion.so/adapterz/3-e5436833522c46e88a6db5aa7ceea682?p=07fb3b2757c14fd3b1bc21b1dd822db7&pm=c, "notion link") 
### 2. Sprint
- [노션](https://www.notion.so/adapterz/3-e5436833522c46e88a6db5aa7ceea682?p=07fb3b2757c14fd3b1bc21b1dd822db7&pm=c, "notion link")

---------------------------------------

## [개발 규칙](https://jhkum1122.tistory.com/7 "개발규칙 링크")

### 1. 코드 컨벤션

### 2. Branch 전략(GitFlow)

### 3. 커밋 메시지
---------------------------------------

## 기타
노션 : [노션](https://www.notion.so/adapterz/3-e5436833522c46e88a6db5aa7ceea682?p=07fb3b2757c14fd3b1bc21b1dd822db7&pm=c, "notion link")

구글 : [구글독스](https://docs.google.com/spreadsheets/d/1D0mSQ2QGheBSwDWagNl7Pwx1_BHZ4MtgsidVqkMPhKQ/edit?gid=1633955961#gid=1633955961, "GoogleDocs link")

피그마 : [피그마](https://www.figma.com/design/3r0wGEY9XxbEfRfJQTxWoj/7%ED%95%B4%EC%99%B8%EC%82%AC%EC%97%85%EB%B3%B8%EB%B6%80?node-id=1-2&t=4InWaIJLlreTj4J6-0, "figma link")

ERD : [ERDCloud](https://www.erdcloud.com/d/LZejcfBsjRrvZmoxx, "figma link")
