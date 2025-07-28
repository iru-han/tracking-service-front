import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // Node.js 'path' 모듈 임포트
import svgr from 'vite-plugin-svgr'; // <-- 이 라인을 추가하세요


// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      svgr()
  ],
  base: '/tracking-service-front/',
  resolve: {
    alias: {
      // @src를 실제 src 폴더로 매핑
      '@src': path.resolve(__dirname, './src'),
      // @assets를 실제 src/assets 폴더로 매핑 (선택 사항)
      '@assets': path.resolve(__dirname, './src/assets'),
      // 필요하다면 다른 별칭도 추가할 수 있습니다.
      // '@components': path.resolve(__dirname, './src/components'),
    },
  },
  css: { // <-- 이 부분을 추가합니다.
    modules: {
      // 모든 .scss 파일을 CSS Modules로 처리
      // 'local'은 .module.scss 파일에만 적용되는 기본값입니다.
      // true로 설정하면 모든 CSS/SCSS 파일이 CSS Modules로 처리됩니다.
      // 또는 특정 파일 패턴을 지정할 수도 있습니다.
      // scopeBehaviour: 'local', // 'local' (기본값) 또는 'global'
      // generateScopedName: '[name]__[local]--[hash:base64:5]', // 원하는 클래스명 포맷
      // 아래는 모든 .scss 파일에 CSS Modules를 적용하는 설정 예시입니다.
      // globalModulePaths: [], // CSS Modules 적용에서 제외할 경로
      // localsConvention: 'camelCaseOnly', // CSS 클래스명을 camelCase로 변환
    },
    preprocessorOptions: { // <-- SCSS 옵션을 추가합니다.
      scss: {
        // 이 곳에 SCSS 전역 변수나 믹스인 등을 include할 수 있습니다.
        // 예를 들어, '@import "src/styles/variables.scss";'
      }
    }
  }
})
