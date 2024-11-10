# astro-wpgraphql-example

このリポジトリは、Astro を使用して構築されたプロジェクトです。以下のガイドに従って、プロジェクトのディレクトリ構造、開発方法などを確認してください。

## ディレクトリ構造

```plaintext
astro-wpgraphql-example/
├── astro.config.mjs /* Astroのconfigファイル */
├── package-lock.json
├── package.json
├── tailwind.config.mjs /* Tailwindのconfigファイル */
├── tsconfig.json /* TypeScriptのconfigファイル */
├── public/ /* 公開ディレクトリ */
│   └── favicon.svg
├── src/ /* 開発ソースのルート */
│   ├── assets/
│   │   ├── fonts/ /* ローカルにフォントファイル配置する場合 */
│   │   │   ├── NotoSansJP-Bold.woff2
│   │   │   └── NotoSansJP-Regular.woff2
│   │   └── images/ /* 画像ソースを格納 */
│   ├── components/
│   │   ├── common/ /* 汎用的なコンポーネントを格納 */
│   │   │   ├── Image.astro
│   │   │   ├── Logo.astro
│   │   │   └── SearchButton.astro
│   │   ├── forms/ /* フォーム関連 */
│   │   ├── layout/ /* Header, Footerなど */
│   │   ├── posts/ /* 記事関連 */
│   │   ├── ui/ /* 操作するコンポーネントを格納する想定 */
│   │   ├── wp/ /* WordPress関連 */
│   ├── features/ /* 機能として独立したファイルを格納 */
│   │   ├── works/
│   │   │   ├── api/
│   │   │   │   ├── getAllPosts.ts
│   │   │   │   ├── getWorkAreaCategories.ts
│   │   │   │   └── getWorkCategories.ts
│   │   │   └── components/
│   │   │       └── WorksSearch.tsx
│   │   ├── wp/ /* WordPress関連 */
│   │   │   └── api/
│   │   │       ├── fetchGql.ts
│   │   │       └── getContentNodeByURI.ts
│   ├── layouts/ /* Astro標準のレイアウト（LPなど、別のレイアウトを定義できる） */
│   │   └── Layout.astro
│   ├── pages/ /* ページファイル（自動的にルーティングされる） */
│   │   ├── index.astro
│   │   ├── about/
│   │   │   └── index.astro
│   │   ├── api/ /* APIルート */
│   │   │   ├── work-area-category.json.ts
│   │   │   ├── work-category.json.ts
│   │   │   └── works.json.ts
│   │   ├── contact/ /* CF7連携のサンプル */
│   │   │   └── index.astro
│   │   ├── news/ /* WordPressのお知らせ機能のサンプル */
│   │   │   ├── [...page].astro
│   │   │   ├── [slug].astro
│   │   │   ├── category/
│   │   │   │   └── [slug]/
│   │   │   │       └── [...page].astro
│   │   │   └── date/
│   │   │       └── [path]/
│   │   │           └── [...page].astro
│   │   └── works/ /* カスタム投稿のサンプル */
│   │       ├── index.astro
│   │       ├── archive/
│   │       │   ├── csr/ /* CSRの検索実装サンプル */
│   │       │   │   └── index.astro
│   │       │   └── ssr/ /* SSRの検索実装サンプル */
│   │       │       └── index.astro
│   ├── styles/ /* グローバルCSS群を格納 */
│   │   └── global.css
│   └── utils/ /* 汎用的な関数を定義する領域 */
│       ├── extractAfterSlash.ts
│       ├── joinClasses.ts
│       ├── removeLastSegment.ts
│       └── replaceUrls.ts
```

## 技術スタック

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)

### 主な使用しているライブラリなど

- [Tailwind CSS](https://tailwindcss.com/)
- [Pagefind](https://pagefind.app/)
- [React Hook Form](https://react-hook-form.com/)

## 想定するデプロイ環境

- [Vercel](https://vercel.com/docs)
  - [Astro の公式ガイド](https://docs.astro.build/ja/guides/deploy/vercel/)

## 開発方法

1. リポジトリをクローンします。

```bash
git clone <リポジトリURL>
cd astro-wpgraphql-example-main
```

2. リポジトリをクローンします。

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで`http://localhost:4321`を開き、プロジェクトを確認できます。

### ビルド

```bash
npm run build
```

生成された静的ファイルは、`dist`ディレクトリに出力されます。
