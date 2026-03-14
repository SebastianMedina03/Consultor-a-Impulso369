/**
 * ARCHIVO PRINCIPAL DE JAVASCRIPT
 * Punto de entrada para todas las funcionalidades
 * Arquitectura: Programación orientada a objetos vanilla JS
 */

class App {
    constructor() {
        this.init();
    }
    
    init() {
        console.log('✅ Aplicación inicializada');
        
        // Inicializar navegación
        this.initNavbar();
        
        // Inicializar funcionalidades
        this.initSmoothScroll();
        this.initFormHandling();
        this.initScrollAnimations();
        this.initObserver();
    }
    
    /**
     * Inicializar navbar responsive
     */
    initNavbar() {
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navBackdrop = document.getElementById('nav-backdrop');
        const header = document.querySelector('.header');
        
        if (!menuToggle || !navMenu) return;

        const closeMenu = () => {
            navMenu.classList.remove('navbar__menu--active');
            navBackdrop?.classList.remove('navbar__backdrop--active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        };
        
        // Toggle del menú
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('navbar__menu--active');
            navBackdrop?.classList.toggle('navbar__backdrop--active');
            const icon = menuToggle.querySelector('i');
            
            if (navMenu.classList.contains('navbar__menu--active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                menuToggle.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        // Click en enlaces del menú
        document.querySelectorAll('.navbar__link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('navbar__menu--active')) closeMenu();
            });
        });

        // Click en backdrop
        if (navBackdrop) {
            navBackdrop.addEventListener('click', () => {
                if (navMenu.classList.contains('navbar__menu--active')) closeMenu();
            });
        }
        
        // Click fuera del menú
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('navbar__menu--active') && 
                !navMenu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('navbar__menu--active')) {
                closeMenu();
            }
        });
        
        // Scroll del header - agregar clase sticky
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        });
    }
    
    /**
     * Scroll suave para enlaces internos (#)
     */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href !== '#') {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetEl = document.getElementById(targetId);
                    
                    if (targetEl) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        window.scrollTo({
                            top: targetEl.offsetTop - headerHeight,
                            behavior: 'smooth'
                        });
                        history.pushState(null, null, href);
                    }
                }
            });
        });
    }
    
    /**
     * Validación y manejo de formularios
     */
    initFormHandling() {
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.validateAndSubmitForm(form);
            });
        });
    }
    
    /**
     * Validar y enviar formulario
     */
    validateAndSubmitForm(form) {
        let isValid = true;
        const errors = {};
        
        // Limpiar errores previos
        form.querySelectorAll('.form-error').forEach(el => el.remove());
        
        // Validar cada campo requerido
        form.querySelectorAll('[required]').forEach(field => {
            const value = field.value.trim();
            
            if (!value) {
                errors[field.name] = 'Este campo es obligatorio';
                isValid = false;
            } else if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errors[field.name] = 'Email inválido';
                    isValid = false;
                }
            } else if (field.type === 'tel') {
                const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
                if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                    errors[field.name] = 'Teléfono inválido';
                    isValid = false;
                }
            }
        });
        
        if (!isValid) {
            // Mostrar errores
            Object.keys(errors).forEach(fieldName => {
                const field = form.querySelector(`[name="${fieldName}"]`);
                if (field) {
                    const errorEl = document.createElement('div');
                    errorEl.className = 'form-error';
                    errorEl.textContent = errors[fieldName];
                    errorEl.style.cssText = `
                        color: var(--color-error);
                        font-size: var(--font-size-sm);
                        margin-top: 0.25rem;
                        display: block;
                    `;
                    field.parentElement.appendChild(errorEl);
                }
            });
            return;
        }
        
        // Formulario válido - mostrar mensajeé
        this.showSuccessMessage(form);
        
        // Enviar después de 1.5s (simulado)
        setTimeout(() => {
            console.log('Enviando formulario...');
            form.reset();
            // Aquí iría la lógica real de envío (AJAX/Fetch)
        }, 1500);
    }
    
    /**
     * Mostrar mensaje de éxito
     */
    showSuccessMessage(form) {
        const successEl = document.createElement('div');
        successEl.className = 'alert alert-success';
        successEl.innerHTML = `
            <i class="fas fa-check-circle"></i>
            ¡Mensaje enviado con éxito! Te contactaremos pronto.
        `;
        successEl.style.cssText = `
            background-color: var(--color-success);
            color: white;
            padding: var(--spacing-lg);
            border-radius: var(--border-radius-md);
            margin-top: var(--spacing-lg);
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
            animation: slideInUp 0.3s ease;
        `;
        
        form.parentElement.insertBefore(successEl, form);
        
        setTimeout(() => {
            successEl.remove();
        }, 5000);
    }
    
    /**
     * Animaciones al hacer scroll
     */
    initScrollAnimations() {
        const elements = document.querySelectorAll('[data-scroll-animation]');
        
        elements.forEach(el => {
            window.addEventListener('scroll', () => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0 && !el.classList.contains('animate-fade-in')) {
                    el.classList.add('animate-fade-in');
                }
            });
        });
    }
    
    /**
     * Intersection Observer para animaciones más eficientes
     */
    initObserver() {
        if (!('IntersectionObserver' in window)) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        // Observar tarjetas y elementos con atributo data-observe
        document.querySelectorAll('.card, .service-card, [data-observe]').forEach(el => {
            observer.observe(el);
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

// Agregar clase cuando la página esté completamente cargada
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});
