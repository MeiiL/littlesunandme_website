# 小日光與我 網站待辦清單

## 需要申請 / 設定的服務

### 免費必做
- [ ] **Formspree** — 去 https://formspree.io 申請帳號，建立表單後把 ID 填入 collab.html 第 548 行的 `YOUR_FORM_ID`
- [ ] **GitHub Pages** — 在 repo Settings > Pages 開啟，確認網站可用 https://meill.github.io/littlesunandme_website 開啟
- [ ] **Google Search Console** — 驗證網站擁有權、提交 Sitemap、監控搜尋排名

### 選做但建議
- [ ] **Google Analytics (GA4)** — 追蹤訪客流量、來源、熱門頁面
- [ ] **Facebook / LINE 分享測試** — 用 https://developers.facebook.com/tools/debug/ 確認 OG 圖片正常顯示

---

## 網站本身還缺的東西

### 檔案
- [ ] **favicon** — 準備一個 `.ico` 或 `.png`，加到兩個 HTML 的 `<head>` 裡
  ```html
  <link rel="icon" href="favicon.ico">
  ```
- [ ] **sitemap.xml** — 列出所有頁面 URL，放在 repo 根目錄，再去 Search Console 提交
- [ ] **robots.txt** — 放在 repo 根目錄，基本內容如下：
  ```
  User-agent: *
  Allow: /
  Sitemap: https://meill.github.io/littlesunandme_website/sitemap.xml
  ```

### 功能
- [ ] **collab.html 漢堡選單** — 手機版導覽列還沒有漢堡按鈕（index.html 已完成，collab.html 待補）
- [ ] **作品集「查看」按鈕** — 目前是 `href="#"` 死連結，之後要連到實際內容或 IG 貼文
- [ ] **videoLink 欄位** — 確認 `data/experiments.json` 和 `data/portfolio.json` 的 `videoLink` 都填了真實 URL

---

## 已完成 ✅

- [x] OG image 加回（cover.jpg）
- [x] SEO meta 標籤（description, keywords, author, robots, canonical, og:locale, Twitter Card, JSON-LD）
- [x] collab.html markdown backticks 移除（CSS 和頁面正常渲染）
- [x] 表單改用 Formspree fetch 送出 + 更嚴格 email 驗證
- [x] index.html charset 移到第一行
- [x] 移除 user-scalable=no（可及性修復）
- [x] Google Fonts preconnect 加入（載入加速）
- [x] 手機版漢堡選單（index.html）
- [x] Instagram 連結加 rel="noopener noreferrer"
- [x] -webkit-backdrop-filter（Safari 相容）
