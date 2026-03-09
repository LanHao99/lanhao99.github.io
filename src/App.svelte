<script>
  let loaded = $state(false)
  let currentSection = $state(0)
  
  const sections = [
    { id: 'home', title: '首页', html: 'index.html' },
    { id: 'video', title: '视频与动画', html: 'video.html' },
    { id: 'ip', title: 'IP创作', html: 'ip.html' },
    { id: 'game', title: '独立游戏', html: 'game.html' },
    { id: 'research', title: '研究与科普', html: 'research.html' },
    { id: 'subscribe', title: 'Join Us!', html: 'subscription.html' }
  ]

  const socialLinks = [
    { name: 'B站', url: 'https://bilibili.com' },
    { name: '小红书', url: 'https://xiaohongshu.com' },
    { name: '公众号', url: '#' },
    { name: 'TiddlyWiki', url: 'https://lanhao.cc/LanHaoTiddly/' }
  ]

  let canvas
  let animationFrame

  setTimeout(() => {
    loaded = true
    initCanvas()
  }, 2000)

  function initCanvas() {
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 50
    const connectionDistance = 150

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.radius = Math.random() * 3 + 2
        this.color = `hsl(${180 + Math.random() * 40}, 70%, 60%)`
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      particles.forEach(p => {
        p.update()
        p.draw()

        const dx = centerX - p.x
        const dy = centerY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(centerX, centerY)
          ctx.strokeStyle = `rgba(100, 200, 255, ${0.3 * (1 - dist / 200)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - dist / connectionDistance)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })
  }

  function scrollToSection(index) {
    currentSection = index
    const element = document.getElementById(`section-${index}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  $effect(() => {
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  })
</script>

{#if !loaded}
  <div class="loader-container">
    <div class="loader"></div>
  </div>
{:else}
  <div class="website">
    <canvas bind:this={canvas} class="network-canvas"></canvas>
    
    <nav class="nav-bar">
      <div class="nav-logo">澜浩的个人博客</div>
      <div class="nav-links">
        {#each sections as section, i}
          <button 
            class="nav-link" 
            class:active={currentSection === i}
            onclick={() => scrollToSection(i)}
          >
            {section.title}
          </button>
        {/each}
      </div>
    </nav>

    <section id="section-0" class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">澜浩的个人博客</h1>
        <p class="hero-subtitle">创作者 · 开发者 · 探索者</p>
        <button class="scroll-hint" onclick={() => scrollToSection(1)}>
          <span>向下滚动探索</span>
          <div class="scroll-arrow">↓</div>
        </button>
      </div>
    </section>

    <section id="section-1" class="content-section">
      <h2>视频与动画</h2>
      <p>创意视频和动画作品展示</p>
      <a href="video.html" class="section-link">进入 →</a>
    </section>

    <section id="section-2" class="content-section">
      <h2>IP创作</h2>
      <p>原创角色和知识产权创作</p>
      <a href="ip.html" class="section-link">进入 →</a>
    </section>

    <section id="section-3" class="content-section">
      <h2>独立游戏</h2>
      <p>使用开源引擎开发的游戏作品</p>
      <a href="game.html" class="section-link">进入 →</a>
    </section>

    <section id="section-4" class="content-section">
      <h2>研究与科普</h2>
      <p>知识分享与科学研究</p>
      <a href="research.html" class="section-link">进入 →</a>
    </section>

    <section id="section-5" class="content-section subscribe-section">
      <h2>Join Us!</h2>
      <p>加入我们，一起创造精彩</p>
      <a href="subscription.html" class="section-link primary">立即加入 →</a>
    </section>

    <footer class="footer">
      <div class="social-links">
        {#each socialLinks as link}
          <a href={link.url} target="_blank" rel="noopener" class="social-link">
            {link.name}
          </a>
        {/each}
      </div>
      <p class="copyright">© 2026 澜浩的个人博客</p>
    </footer>
  </div>
{/if}

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
    color: #fff;
    overflow-x: hidden;
  }

  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  }

  .loader {
    position: relative;
    font-size: 16px;
    width: 5.5em;
    height: 5.5em;
  }

  .loader:before {
    content: '';
    position: absolute;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 100%;
    width: 4px;
    background: #fff;
    left: 50%;
    top: 50%;
  }

  .loader:after {
    content: '';
    position: absolute;
    left: 0.2em;
    bottom: 0.18em;
    width: 1em;
    height: 1em;
    background-color: #00d9ff;
    border-radius: 15%;
    animation: rollingRock 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
  }

  @keyframes rollingRock {
    0% { transform: translate(0, -1em) rotate(-45deg) }
    5% { transform: translate(0, -1em) rotate(-50deg) }
    20% { transform: translate(1em, -2em) rotate(47deg) }
    25% { transform: translate(1em, -2em) rotate(45deg) }
    30% { transform: translate(1em, -2em) rotate(40deg) }
    45% { transform: translate(2em, -3em) rotate(137deg) }
    50% { transform: translate(2em, -3em) rotate(135deg) }
    55% { transform: translate(2em, -3em) rotate(130deg) }
    70% { transform: translate(3em, -4em) rotate(217deg) }
    75% { transform: translate(3em, -4em) rotate(220deg) }
    100% { transform: translate(0, -1em) rotate(-225deg) }
  }

  .website {
    position: relative;
  }

  .network-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(15, 12, 41, 0.8);
    backdrop-filter: blur(10px);
    z-index: 100;
  }

  .nav-logo {
    font-size: 1.25rem;
    font-weight: bold;
    background: linear-gradient(90deg, #00d9ff, #00ff88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }

  .nav-link {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border-radius: 20px;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #fff;
    background: rgba(0, 217, 255, 0.2);
  }

  .hero-section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-content {
    text-align: center;
  }

  .hero-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #00d9ff, #00ff88, #00d9ff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient 3s linear infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 3rem;
  }

  .scroll-hint {
    background: none;
    border: 2px solid rgba(0, 217, 255, 0.5);
    color: #00d9ff;
    padding: 1rem 2rem;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .scroll-hint:hover {
    background: rgba(0, 217, 255, 0.1);
    border-color: #00d9ff;
  }

  .scroll-arrow {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(10px); }
    60% { transform: translateY(5px); }
  }

  .content-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 2rem;
  }

  .content-section h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #00d9ff, #00ff88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .content-section p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
  }

  .section-link {
    display: inline-block;
    padding: 1rem 2rem;
    border: 2px solid rgba(0, 217, 255, 0.5);
    color: #00d9ff;
    text-decoration: none;
    border-radius: 30px;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  .section-link:hover {
    background: rgba(0, 217, 255, 0.2);
    border-color: #00d9ff;
    transform: translateY(-3px);
  }

  .section-link.primary {
    background: linear-gradient(135deg, #00d9ff, #00ff88);
    color: #0f0c29;
    border: none;
    font-weight: bold;
  }

  .section-link.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
  }

  .subscribe-section {
    background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 255, 136, 0.1));
  }

  .footer {
    padding: 3rem 2rem;
    text-align: center;
    position: relative;
    z-index: 1;
    background: rgba(15, 12, 41, 0.9);
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  .social-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    color: #00d9ff;
    border-color: #00d9ff;
    background: rgba(0, 217, 255, 0.1);
  }

  .copyright {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
    
    .nav-links {
      display: none;
    }
    
    .content-section h2 {
      font-size: 2rem;
    }
  }
</style>
