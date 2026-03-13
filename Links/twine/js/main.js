// Twine 互动剧本开发教程 - 主脚本文件
// 作者: HTML Framework Agent
// 生成时间: 20260312

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeMermaid();
});

/**
 * 导航栏功能
 * - 滚动高亮当前section
 * - 平滑滚动到对应section
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 64; // 导航栏高度
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 滚动高亮
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-indigo-600', 'bg-indigo-50');
            link.classList.add('text-slate-600', 'hover:text-indigo-600', 'hover:bg-slate-50');
            
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.remove('text-slate-600', 'hover:text-indigo-600', 'hover:bg-slate-50');
                link.classList.add('text-indigo-600', 'bg-indigo-50');
            }
        });
    });
}

/**
 * 滚动动画效果
 * - 使用Intersection Observer检测元素进入视口
 * - 添加fade-up动画类
 */
function initializeScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-8');
        observer.observe(el);
    });
}

/**
 * Mermaid图表初始化
 * - 配置主题颜色匹配网站设计
 * - 自动渲染所有mermaid元素
 */
function initializeMermaid() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            themeVariables: {
                primaryColor: '#4F46E5',
                primaryTextColor: '#FFFFFF',
                primaryBorderColor: '#4338CA',
                lineColor: '#64748B',
                secondaryColor: '#10B981',
                tertiaryColor: '#F1F5F9',
                background: '#F8FAFC',
                mainBkg: '#FFFFFF',
                nodeBorder: '#E2E8F0',
                clusterBkg: '#F1F5F9',
                clusterBorder: '#CBD5E1',
                titleColor: '#0F172A',
                edgeLabelBackground: '#FFFFFF',
                fontFamily: 'Noto Sans SC',
                fontSize: '16px'
            },
            flowchart: {
                curve: 'basis',
                useMaxWidth: true,
                htmlLabels: true
            },
            securityLevel: 'loose'
        });
    }
}

/**
 * 代码复制功能
 * - 复制代码块内容到剪贴板
 * - 显示复制成功提示
 */
function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> 已复制';
        button.classList.add('bg-emerald-600');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('bg-emerald-600');
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

/**
 * 模拟Twine节点连接动画
 * - 为节点添加动态连线效果
 */
function animateTwineNodes() {
    const nodes = document.querySelectorAll('.twine-node');
    nodes.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.2}s`;
        node.classList.add('animate-pulse-slow');
    });
}

// 添加CSS动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-up {
        from {
            opacity: 0;
            transform: translateY(32px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-fade-up {
        animation: fade-up 0.6s ease-out forwards;
    }
    
    .animate-pulse-slow {
        animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
    
    /* 自定义滚动条 */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: #F1F5F9;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #94A3B8;
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: #64748B;
    }
    
    /* 代码块样式优化 */
    .code-block {
        position: relative;
    }
    
    pre {
        counter-reset: line;
    }
    
    code {
        font-family: 'Fira Code', 'JetBrains Mono', monospace;
    }
`;
document.head.appendChild(style);