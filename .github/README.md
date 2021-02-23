## 自己紹介ページです。

```url
url: https://hoashi-akane.github.io/introduction/introduction
```

## 利用技術
GitHub API v3

## 利用技術（予定）
Next.js
GitHub Pages


## コマンド類
- npm run dev //開発サーバ起動
- npm run build //本番用にビルドを行う
- npm start //本番用にビルドしたアプリを起動

## GitHub-Pagesデプロイ
```
secretsにトークンを追加
.github/workflows内のymlファイルにenvで環境変数を設定
next.config.jsで設定し、利用したい場所で' process.env.環境変数名 '記述で取得可能

