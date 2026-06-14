[![](https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&text=Backscreen_Yana&section=header&textBg=false&animation=fadeIn)]()

Welcome to the repository for my personal blog, a modern and beautifully designed space where I share my thoughts on technology, development, and more. This project is built with Next.js and TypeScript, and it's styled with Tailwind CSS for a clean, responsive, and visually appealing user experience.

**[Live Demo](https://yanapang.github.io/)**

## ✨ Features

- **Modern & Responsive Design**: A clean, beautiful, and mobile-first design that looks great on all devices.
- **Dynamic Content**: Blog posts are written in Markdown and are processed to include metadata like reading time and categories.
- **Interactive UI**: Smooth animations, hover effects, and a polished user interface.
- **Post Filtering & Search**: Easily search for posts and filter them by category.
- **Custom Components**: Reusable components for the navigation header, footer, and post cards.
- **SEO Optimized**: Built with Next.js for server-side rendering and improved search engine optimization.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 with the Pages Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Markdown Processing**: [gray-matter](https://github.com/jonschlinkert/gray-matter) and [remark](https://github.com/remarkjs/remark)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yanapang/yanapang.github.io.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ✍️ Writing a New Post

1. `src/posts/` 폴더에 `your-post-slug.md` 파일 생성
2. 파일 상단에 frontmatter 작성:
   ```yaml
   ---
   title: "포스트 제목"
   slug: 'your-post-slug'
   date: "2025-06-14"
   category: "Kubernetes"
   description: "검색 결과와 카드에 표시될 한 줄 설명"
   ---
   ```
3. 그 아래에 마크다운으로 본문 작성
4. `main` 브랜치에 푸시하면 자동 배포

## 🚢 Deployment

This site is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yanapang/yanapang.github.io/issues).

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
