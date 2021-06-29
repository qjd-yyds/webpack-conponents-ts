# 基于ts和webpack配置项目

### 本项目用于自学ts和webpack
安装模块包
```javascript
// npm
npm install
// yarn
yarn
```
启动项目
```javascript
// npm
npm run dev
// yarn
yarn dev
```
打包生产
```javascript
// npm
npm run build
// yarn
yarn build
```

```
webpack-template
├─ .editorconfig
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ master
│  ├─ objects
│  │  ├─ 06
│  │  │  └─ 251d9d639f821ce7d30a6984b7a1981c3113f5
│  │  ├─ 09
│  │  │  └─ 5cd769248ac4c8804c73b9e04df4d8ae356553
│  │  ├─ 14
│  │  │  └─ ca6252386c4cb33af7c819b829a1f6c29bbf99
│  │  ├─ 1e
│  │  │  └─ a729822463b530329e46389940e46be04a003e
│  │  ├─ 1f
│  │  │  └─ cba6c76e4a82c3b0682209fb97ef2cd85ef3cc
│  │  ├─ 2b
│  │  │  └─ ea49f7a40f0413a3b8853a770bda22da36ff9d
│  │  ├─ 2d
│  │  │  └─ 5e627487f45700a72114dde06f5e6c42687724
│  │  ├─ 34
│  │  │  └─ 0893d6529499c27a34e365800ce7b4665d3231
│  │  ├─ 3a
│  │  │  └─ c3a7552a48066648c484b302fa22f518aed169
│  │  ├─ 40
│  │  │  └─ fb30b306f6ec9152fa41ef500ead97df1f06e9
│  │  ├─ 41
│  │  │  └─ f1170db023e6351f6eadf80099f01f6eaa3b28
│  │  ├─ 42
│  │  │  └─ 0903948b63f0910319d22a1641182aff47cbdd
│  │  ├─ 45
│  │  │  └─ cdb77305140ad6836cd8b47eef451ede232b8f
│  │  ├─ 69
│  │  │  └─ e2067a46cc63199630afe5ec072085ca082f42
│  │  ├─ 7a
│  │  │  └─ 1cec5c4c524ba65b7c829bfebbb3197a67ab9d
│  │  ├─ 7d
│  │  │  └─ 8e0ebec50809d1c7195d7b3dc274558b2ca142
│  │  ├─ 85
│  │  │  └─ 7c29c4b431efc12d4af5882aa057a766c15512
│  │  ├─ 91
│  │  │  └─ 805600c5908ded72bfcf22f22b5bdf380266ca
│  │  ├─ 9a
│  │  │  └─ 542233441a24aa7e5c9b82e3a38dd04d7b08b9
│  │  ├─ a7
│  │  │  └─ be6724aa8ef8cf77022c90f606c5ac01fbabde
│  │  ├─ ac
│  │  │  └─ 309da8103c58ecafd7c81c74d5d563c8c4bb58
│  │  ├─ b5
│  │  │  └─ 12c09d476623ff4bf8d0d63c29b784925dbdf8
│  │  ├─ cc
│  │  │  └─ 027f2e264add7f67c2c50f7774fe9cf2d46d23
│  │  ├─ d7
│  │  │  └─ 4de15990ad5bda564e88895dbd67c912ac00d8
│  │  ├─ dd
│  │  │  ├─ 2b9e73f2bb17026bf4e593059dc5d226743ff6
│  │  │  └─ cefebc877bce3e9934a526b65b6c00ad456d89
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ ef
│  │  │  └─ 4e49e2e22b049a70121f1fd2077e4034bb69d2
│  │  ├─ f8
│  │  │  └─ 8064bddb7202533417e72d4dee9530ccabc27b
│  │  ├─ fb
│  │  │  └─ 71cbac5c8c1c7ba8a3187991e5cf2c26f4c647
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ .prettierrc.js
├─ build
│  ├─ webpack.common.ts
│  ├─ webpack.dev.ts
│  ├─ webpack.prod.ts
│  └─ webpack.type.ts
├─ package.json
├─ README.MD
├─ src
│  ├─ components
│  │  └─ better-draggable-ball
│  │     └─ index.ts
│  ├─ main.ts
│  ├─ pages
│  │  ├─ index
│  │  │  ├─ index.html
│  │  │  ├─ index.scss
│  │  │  └─ index.ts
│  │  └─ other
│  │     ├─ other.html
│  │     ├─ other.scss
│  │     └─ other.ts
│  └─ typings
│     └─ global.d.ts
├─ tsconfig.json
└─ yarn.lock

```