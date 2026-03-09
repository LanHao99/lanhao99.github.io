<script>
  import { onMount } from 'svelte'

  const profile = {
    name: '澜浩',
    title: '创作者 / 开发者 / 探索者',
    avatar: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4',
    intro: '欢迎来到我的个人主页。这里放我的作品、研究和正在进行中的有趣项目。'
  }

  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/LanHao99' },
    { label: 'Bilibili', url: 'https://www.bilibili.com' },
    { label: 'TiddlyWiki', url: 'https://lanhao.cc/LanHaoTiddly/' },
    { label: 'Email', url: 'mailto:hello@lanhao.cc' }
  ]

  const projectCards = [
    { title: '视频与动画', subtitle: '动态视觉实验与短片', href: 'video.html' },
    { title: 'IP 创作', subtitle: '角色设定与故事宇宙', href: 'ip.html' },
    { title: '独立游戏', subtitle: '原型到可玩版本', href: 'game.html' },
    { title: '研究与科普', subtitle: '可读性的技术分享', href: 'research.html' },
    { title: 'LanHaoTiddly', subtitle: '个人知识库与笔记系统', href: 'https://lanhao.cc/LanHaoTiddly/', external: true },
    { title: 'Join Us', subtitle: '合作与订阅入口', href: 'subscription.html' }
  ]

  const quotes = [
    '做有持续生命力的作品，而不是一次性的热点。',
    '把复杂问题拆成可验证的小步骤。',
    '用公开写作记录每一次迭代。',
    '先发布，再优化，持续改进。'
  ]

  const searchEngines = {
    bing: 'https://www.bing.com/search?q=',
    google: 'https://www.google.com/search?q=',
    baidu: 'https://www.baidu.com/s?wd='
  }

  let engine = 'bing'
  let query = ''
  let now = new Date()
  let quoteIndex = 0
  let typed = ''
  let typingTimer
  let quoteTimer
  let clockTimer

  function formatDate(date) {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  function formatTime(date) {
    return date.toLocaleTimeString('zh-CN', { hour12: false })
  }

  function playTypewriter(text) {
    clearInterval(typingTimer)
    typed = ''
    let i = 0

    typingTimer = setInterval(() => {
      i += 1
      typed = text.slice(0, i)
      if (i >= text.length) {
        clearInterval(typingTimer)
      }
    }, 50)
  }

  function runSearch() {
    const q = query.trim()
    if (!q) return

    if (/^(https?:\/\/|localhost|\d+\.\d+\.\d+\.\d+)/i.test(q) || /\.[a-z]{2,}(\/|$)/i.test(q)) {
      const url = /^(https?:\/\/)/i.test(q) ? q : `https://${q}`
      window.open(url, '_blank', 'noopener')
      return
    }

    window.open(`${searchEngines[engine]}${encodeURIComponent(q)}`, '_blank', 'noopener')
  }

  onMount(() => {
    playTypewriter(quotes[quoteIndex])

    clockTimer = setInterval(() => {
      now = new Date()
    }, 1000)

    quoteTimer = setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length
      playTypewriter(quotes[quoteIndex])
    }, 7000)

    return () => {
      clearInterval(clockTimer)
      clearInterval(quoteTimer)
      clearInterval(typingTimer)
    }
  })
</script>

<main class="page-shell">
  <div class="bg-orb orb-a"></div>
  <div class="bg-orb orb-b"></div>

  <section class="layout">
    <aside class="left-panel glass">
      <div class="avatar-ring">
        <img src={profile.avatar} alt="avatar" loading="lazy" />
      </div>

      <h1>{profile.name}</h1>
      <p class="title">{profile.title}</p>
      <p class="intro">{profile.intro}</p>

      <div class="social-row">
        {#each socialLinks as item}
          <a href={item.url} target="_blank" rel="noopener">{item.label}</a>
        {/each}
      </div>

      <a class="wiki-link" href="https://lanhao.cc/LanHaoTiddly/" target="_blank" rel="noopener">
        打开 TiddlyWiki 知识库
      </a>
    </aside>

    <section class="right-panel glass">
      <div class="top-row">
        <div class="search-wrap">
          <select bind:value={engine} aria-label="search engine">
            <option value="bing">Bing</option>
            <option value="google">Google</option>
            <option value="baidu">Baidu</option>
          </select>
          <input bind:value={query} placeholder="输入关键词或网址" on:keydown={(e) => e.key === 'Enter' && runSearch()} />
          <button on:click={runSearch}>搜索</button>
        </div>

        <div class="clock-card">
          <strong>{formatTime(now)}</strong>
          <span>{formatDate(now)}</span>
        </div>
      </div>

      <div class="quote-card">
        <span class="quote-mark">“</span>
        <p>{typed}<span class="cursor">|</span></p>
        <span class="quote-mark">”</span>
      </div>

      <div class="cards-grid">
        {#each projectCards as card}
          <a class="project-card" href={card.href} target={card.external ? '_blank' : undefined} rel={card.external ? 'noopener' : undefined}>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
            <span>进入</span>
          </a>
        {/each}
      </div>
    </section>
  </section>
</main>

<style>
  :global(:root) {
    --bg0: #09111f;
    --bg1: #11243a;
    --ink: #e9f1ff;
    --muted: #b8c7e1;
    --line: rgba(185, 212, 255, 0.3);
    --glass: rgba(15, 26, 45, 0.55);
    --accent: #7ee787;
    --accent-2: #5eead4;
  }

  .page-shell {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    padding: 24px;
    background: radial-gradient(1200px 800px at 0% 100%, #28446d 0%, transparent 60%),
      radial-gradient(1200px 700px at 100% 0%, #2b3f5f 0%, transparent 55%),
      linear-gradient(135deg, var(--bg0), var(--bg1));
    color: var(--ink);
  }

  .bg-orb {
    position: absolute;
    filter: blur(70px);
    opacity: 0.35;
    pointer-events: none;
  }

  .orb-a {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: #59d1ff;
    left: -120px;
    top: -80px;
  }

  .orb-b {
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: #89ffb3;
    right: -120px;
    bottom: -180px;
  }

  .layout {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 18px;
  }

  .glass {
    background: var(--glass);
    border: 1px solid var(--line);
    border-radius: 24px;
    backdrop-filter: blur(12px);
  }

  .left-panel {
    padding: 28px 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
    min-height: 86vh;
  }

  .avatar-ring {
    width: 138px;
    height: 138px;
    padding: 4px;
    border-radius: 50%;
    background: linear-gradient(145deg, var(--accent), var(--accent-2));
    animation: pulse 4s ease-in-out infinite;
  }

  .avatar-ring img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    border: 2px solid #112033;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  .title {
    margin: 0;
    color: var(--accent);
    font-weight: 600;
  }

  .intro {
    margin: 8px 0 0;
    color: var(--muted);
    line-height: 1.65;
  }

  .social-row {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .social-row a,
  .wiki-link {
    text-decoration: none;
    color: var(--ink);
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 7px 12px;
    font-size: 0.9rem;
    transition: 0.2s ease;
  }

  .social-row a:hover,
  .wiki-link:hover {
    transform: translateY(-1px);
    border-color: var(--accent);
    color: var(--accent);
  }

  .wiki-link {
    margin-top: auto;
    width: 100%;
    text-align: center;
  }

  .right-panel {
    padding: 18px;
    min-height: 86vh;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .top-row {
    display: grid;
    grid-template-columns: 1fr 240px;
    gap: 10px;
  }

  .search-wrap {
    display: grid;
    grid-template-columns: 100px 1fr 84px;
    gap: 8px;
  }

  select,
  input,
  button {
    border-radius: 12px;
    border: 1px solid var(--line);
    background: rgba(16, 30, 50, 0.7);
    color: var(--ink);
    padding: 10px;
    outline: none;
  }

  button {
    background: linear-gradient(135deg, #1e3e58, #2f5f46);
    cursor: pointer;
    font-weight: 700;
  }

  .clock-card {
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .clock-card strong {
    font-size: 1.35rem;
    color: var(--accent);
  }

  .clock-card span {
    margin-top: 4px;
    color: var(--muted);
    font-size: 0.85rem;
  }

  .quote-card {
    min-height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px dashed var(--line);
    border-radius: 14px;
    padding: 12px;
    color: #d5fff0;
  }

  .quote-card p {
    margin: 0;
    font-size: 1.02rem;
  }

  .quote-mark {
    font-size: 1.6rem;
    color: var(--accent-2);
  }

  .cursor {
    animation: blink 0.9s step-end infinite;
  }

  .cards-grid {
    margin-top: 4px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .project-card {
    text-decoration: none;
    color: var(--ink);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 16px;
    background: linear-gradient(165deg, rgba(26, 44, 67, 0.7), rgba(18, 33, 51, 0.55));
    transition: 0.2s ease;
  }

  .project-card:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
  }

  .project-card h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  .project-card p {
    margin: 8px 0 14px;
    color: var(--muted);
    font-size: 0.92rem;
  }

  .project-card span {
    color: var(--accent);
    font-weight: 700;
  }

  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(94, 234, 212, 0.24);
    }
    50% {
      box-shadow: 0 0 0 14px rgba(94, 234, 212, 0);
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 980px) {
    .layout {
      grid-template-columns: 1fr;
    }

    .left-panel,
    .right-panel {
      min-height: auto;
    }

    .top-row {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .page-shell {
      padding: 12px;
    }

    .search-wrap {
      grid-template-columns: 1fr;
    }

    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
