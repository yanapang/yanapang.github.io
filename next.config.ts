import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
// GitHub 저장소 이름 (username.github.io 레포면 ''로 둡니다)
const repoName = 'my-next-project';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

export default nextConfig;