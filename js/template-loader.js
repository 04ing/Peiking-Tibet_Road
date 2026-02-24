// 加载导航栏模板
function loadNavbar() {
    // 根据当前页面位置确定模板路径
    const currentPath = window.location.pathname;
    const isPagesDirectory = currentPath.includes('/pages/');
    const templatePath = isPagesDirectory ? '../templates/navbar.html' : './templates/navbar.html';
    
    fetch(templatePath)
        .then(response => response.text())
        .then(html => {
            const navbarContainer = document.getElementById('navbar-container');
            if (navbarContainer) {
                navbarContainer.innerHTML = html;
                
                // 调整导航链接路径
                const navLinks = navbarContainer.querySelectorAll('nav ul li a');
                
                navLinks.forEach(link => {
                    const linkId = link.getAttribute('id');
                    const originalHref = link.getAttribute('href');
                    
                    // 对于pages目录下的页面，调整相对路径
                    if (isPagesDirectory) {
                        if (originalHref.startsWith('index.html') || originalHref.startsWith('#')) {
                            // 首页和锚点链接需要调整
                            link.setAttribute('href', '../' + originalHref);
                        } else if (originalHref.startsWith('pages/')) {
                            // 已经是pages目录的链接，去掉pages/前缀
                            link.setAttribute('href', originalHref.replace('pages/', ''));
                        }
                    }
                    
                    // 激活当前页面的导航链接
                    if (currentPath.includes(link.getAttribute('href')) || 
                        (link.getAttribute('href').includes('index.html') && currentPath.includes('index.html')) ||
                        (linkId === 'nav-home' && currentPath.includes('index.html'))) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error loading navbar template:', error);
        });
}

// 页面加载完成后加载导航栏
window.addEventListener('DOMContentLoaded', loadNavbar);