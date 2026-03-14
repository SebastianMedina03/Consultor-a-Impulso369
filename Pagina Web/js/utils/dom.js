/**
 * UTILIDADES DOM
 * Funciones auxiliares para manipulación del DOM
 */

/**
 * Selector seguro
 * @param {string} selector
 * @returns {Element|null}
 */
export const $ = (selector) => document.querySelector(selector);

/**
 * Selector múltiple
 * @param {string} selector
 * @returns {NodeList}
 */
export const $$ = (selector) => document.querySelectorAll(selector);

/**
 * Crear elemento con clases
 * @param {string} tag
 * @param {string} classes
 * @param {string} html
 * @returns {Element}
 */
export const createElement = (tag = 'div', classes = '', html = '') => {
    const el = document.createElement(tag);
    if (classes) el.className = classes;
    if (html) el.innerHTML = html;
    return el;
};

/**
 * Agregar clase si no existe
 * @param {Element} el
 * @param {string} className
 */
export const addClass = (el, className) => {
    if (el) el.classList.add(className);
};

/**
 * Remover clase
 * @param {Element} el
 * @param {string} className
 */
export const removeClass = (el, className) => {
    if (el) el.classList.remove(className);
};

/**
 * Toggle clase
 * @param {Element} el
 * @param {string} className
 */
export const toggleClass = (el, className) => {
    if (el) el.classList.toggle(className);
};

/**
 * Verificar si tiene clase
 * @param {Element} el
 * @param {string} className
 * @returns {boolean}
 */
export const hasClass = (el, className) => {
    return el ? el.classList.contains(className) : false;
};

/**
 * Obtener atributo
 * @param {Element} el
 * @param {string} attr
 * @returns {string|null}
 */
export const getAttr = (el, attr) => el ? el.getAttribute(attr) : null;

/**
 * Establecer atributo
 * @param {Element} el
 * @param {string} attr
 * @param {string} value
 */
export const setAttr = (el, attr, value) => {
    if (el) el.setAttribute(attr, value);
};

/**
 * Remover atributo
 * @param {Element} el
 * @param {string} attr
 */
export const removeAttr = (el, attr) => {
    if (el) el.removeAttribute(attr);
};

/**
 * Obtener dato
 * @param {Element} el
 * @param {string} key
 * @returns {*}
 */
export const getData = (el, key) => {
    return el ? el.dataset[key] : null;
};

/**
 * Establecer dato
 * @param {Element} el
 * @param {string} key
 * @param {*} value
 */
export const setData = (el, key, value) => {
    if (el) el.dataset[key] = value;
};

/**
 * Obtener texto
 * @param {Element} el
 * @returns {string}
 */
export const getText = (el) => el ? el.textContent : '';

/**
 * Establecer texto
 * @param {Element} el
 * @param {string} text
 */
export const setText = (el, text) => {
    if (el) el.textContent = text;
};

/**
 * Obtener HTML
 * @param {Element} el
 * @returns {string}
 */
export const getHTML = (el) => el ? el.innerHTML : '';

/**
 * Establecer HTML
 * @param {Element} el
 * @param {string} html
 */
export const setHTML = (el, html) => {
    if (el) el.innerHTML = html;
};

/**
 * Evento delegado
 * @param {Element} parent
 * @param {string} selector
 * @param {string} event
 * @param {Function} handler
 */
export const on = (parent, selector, event, handler) => {
    if (!parent) return;
    parent.addEventListener(event, (e) => {
        if (e.target.matches(selector)) {
            handler.call(e.target, e);
        }
    });
};

/**
 * Remover evento
 * @param {Element} el
 * @param {string} event
 * @param {Function} handler
 */
export const off = (el, event, handler) => {
    if (el) el.removeEventListener(event, handler);
};

/**
 * Agregar evento
 * @param {Element} el
 * @param {string} event
 * @param {Function} handler
 */
export const addEvent = (el, event, handler) => {
    if (el) el.addEventListener(event, handler);
};

/**
 * Obtener posición del elemento
 * @param {Element} el
 * @returns {DOMRect}
 */
export const getPosition = (el) => el ? el.getBoundingClientRect() : null;

/**
 * Verificar si elemento está en viewport
 * @param {Element} el
 * @returns {boolean}
 */
export const isInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0 &&
        rect.left <= window.innerWidth &&
        rect.right >= 0
    );
};

/**
 * Scroll a elemento
 * @param {Element} el
 * @param {string} behavior
 */
export const scrollTo = (el, behavior = 'smooth') => {
    if (el) {
        el.scrollIntoView({ behavior });
    }
};

/**
 * Animar opacity
 * @param {Element} el
 * @param {number} duration
 */
export const fadeIn = (el, duration = 300) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.display = 'block';
    
    setTimeout(() => {
        el.style.transition = `opacity ${duration}ms ease`;
        el.style.opacity = '1';
    }, 10);
};

/**
 * Animar desaparición
 * @param {Element} el
 * @param {number} duration
 */
export const fadeOut = (el, duration = 300) => {
    if (!el) return;
    el.style.transition = `opacity ${duration}ms ease`;
    el.style.opacity = '0';
    
    setTimeout(() => {
        el.style.display = 'none';
    }, duration);
};

/**
 * Verificar si es móvil
 * @returns {boolean}
 */
export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
