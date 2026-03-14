/**
 * COMPONENTE: NAVBAR
 * Gestión de navegación responsive
 */

import { $ , $$, addClass, removeClass, toggleClass, hasClass, addEvent } from '../utils/dom.js';

export class Navbar {
    constructor() {
        this.menuToggle = $('#menu-toggle');
        this.navMenu = $('#nav-menu');
        this.navBackdrop = $('#nav-backdrop');
        this.header = $('header');
        this.init();
    }
    
    init() {
        if (!this.menuToggle || !this.navMenu) return;
        
        // Click en botón toggle
        addEvent(this.menuToggle, 'click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });
        
        // Click en enlaces del menú
        $$('.navbar__link').forEach(link => {
            addEvent(link, 'click', () => {
                if (hasClass(this.navMenu, 'navbar__menu--active')) {
                    this.closeMenu();
                }
            });
        });

        if (this.navBackdrop) {
            addEvent(this.navBackdrop, 'click', () => {
                if (hasClass(this.navMenu, 'navbar__menu--active')) {
                    this.closeMenu();
                }
            });
        }
        
        // Click fuera del menú
        addEvent(document, 'click', (e) => {
            if (
                hasClass(this.navMenu, 'navbar__menu--active') &&
                !this.navMenu.contains(e.target) &&
                !this.menuToggle.contains(e.target)
            ) {
                this.closeMenu();
            }
        });
        
        // Tecla ESC
        addEvent(document, 'keydown', (e) => {
            if (e.key === 'Escape' && hasClass(this.navMenu, 'navbar__menu--active')) {
                this.closeMenu();
            }
        });
        
        // Scroll del header
        addEvent(window, 'scroll', () => {
            if (window.scrollY > 50) {
                addClass(this.header, 'header--scrolled');
            } else {
                removeClass(this.header, 'header--scrolled');
            }
        });
    }
    
    toggleMenu() {
        toggleClass(this.navMenu, 'navbar__menu--active');
        if (this.navBackdrop) {
            toggleClass(this.navBackdrop, 'navbar__backdrop--active');
        }
        const icon = this.menuToggle.querySelector('i');
        
        if (hasClass(this.navMenu, 'navbar__menu--active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            this.menuToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            this.menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }
    
    closeMenu() {
        removeClass(this.navMenu, 'navbar__menu--active');
        if (this.navBackdrop) {
            removeClass(this.navBackdrop, 'navbar__backdrop--active');
        }
        const icon = this.menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        this.menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}
