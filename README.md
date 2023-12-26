# BoilerFront

Next.js 기반 프론트 템플릿

### 기술 스택

- NextJS 13
- typescript
- eslint + prettier
- react query
- recoil
- emotion + scss
- (고려 중) jest 테스트 코드
- (고려 중) storybook UI 테스트 및 컴포넌트 관리
- SEO 대응 (next-seo 패키지)

- NextJs 13 기본제공 swc 번들러 사용 (babel 포함, emotion 설정 가능)
```json
// @ts-check

/**
 * @type {import("next").NextConfig}
 * @see https://nextjs.org/docs/pages/api-reference/next-config-js
 **/

const nextConfig = {
  /* https://legacy.reactjs.org/docs/strict-mode.html#ensuring-reusable-state
   *  context api 2번 호출 되는 문제로 reactStrictMode: false 로 설정
   * */
  reactStrictMode: false,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  output: 'export',
  swcMinify: true,
  compiler: {
    emotion: true,
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
    // https://nextjs.org/docs/architecture/nextjs-compiler#remove-react-properties
    reactRemoveProperties: { properties: ['^data-testid$'] },
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|svg)$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;

```
