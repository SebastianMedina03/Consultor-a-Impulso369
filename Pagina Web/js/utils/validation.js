/**
 * VALIDACIÓN DE FORMULARIOS
 * Funciones para validar inputs y formularios
 */

/**
 * Validar email
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

/**
 * Validar teléfono
 * @param {string} phone
 * @returns {boolean}
 */
export const isValidPhone = (phone) => {
    const regex = /^[\d\s\-\+\(\)]{7,}$/;
    return regex.test(phone.replace(/\s/g, ''));
};

/**
 * Validar URL
 * @param {string} url
 * @returns {boolean}
 */
export const isValidURL = (url) => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Validar contraseña (mínimo 8 caracteres, 1 número, 1 mayúscula)
 * @param {string} password
 * @returns {boolean}
 */
export const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return regex.test(password);
};

/**
 * Validar que no esté vacío
 * @param {string} value
 * @returns {boolean}
 */
export const isNotEmpty = (value) => {
    return value && value.trim().length > 0;
};

/**
 * Validar longitud mínima
 * @param {string} value
 * @param {number} min
 * @returns {boolean}
 */
export const minLength = (value, min) => {
    return value && value.length >= min;
};

/**
 * Validar longitud máxima
 * @param {string} value
 * @param {number} max
 * @returns {boolean}
 */
export const maxLength = (value, max) => {
    return value && value.length <= max;
};

/**
 * Validar rango numérico
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export const isInRange = (value, min, max) => {
    const num = Number(value);
    return !isNaN(num) && num >= min && num <= max;
};

/**
 * Validar número
 * @param {*} value
 * @returns {boolean}
 */
export const isNumber = (value) => {
    return !isNaN(value) && value !== '';
};

/**
 * Validar objeto de campo
 * @param {Object} field
 * @param {string} field.value
 * @param {string} field.type
 * @param {boolean} field.required
 * @returns {Object} { valid: boolean, error: string }
 */
export const validateField = (field) => {
    const { value, type, required } = field;
    
    // Validar requerido
    if (required && !isNotEmpty(value)) {
        return { valid: false, error: 'Este campo es obligatorio' };
    }
    
    // Si no es requerido y está vacío, es válido
    if (!required && !isNotEmpty(value)) {
        return { valid: true, error: '' };
    }
    
    // Validaciones específicas por tipo
    switch (type) {
        case 'email':
            return {
                valid: isValidEmail(value),
                error: isValidEmail(value) ? '' : 'Email inválido'
            };
        case 'phone':
            return {
                valid: isValidPhone(value),
                error: isValidPhone(value) ? '' : 'Teléfono inválido'
            };
        case 'url':
            return {
                valid: isValidURL(value),
                error: isValidURL(value) ? '' : 'URL inválida'
            };
        case 'number':
            return {
                valid: isNumber(value),
                error: isNumber(value) ? '' : 'Debe ser un número'
            };
        case 'text':
            return {
                valid: minLength(value, 3),
                error: minLength(value, 3) ? '' : 'Mínimo 3 caracteres'
            };
        default:
            return { valid: true, error: '' };
    }
};

/**
 * Validar formulario completo
 * @param {HTMLFormElement} form
 * @returns {Object} { valid: boolean, errors: Object }
 */
export const validateForm = (form) => {
    const errors = {};
    let isValid = true;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        const field = {
            value: input.value,
            type: input.type || input.tagName.toLowerCase(),
            required: input.hasAttribute('required')
        };
        
        const validation = validateField(field);
        
        if (!validation.valid) {
            errors[input.name] = validation.error;
            isValid = false;
        }
    });
    
    return { valid: isValid, errors };
};

/**
 * Limpiar errores del formulario
 * @param {HTMLFormElement} form
 */
export const clearFormErrors = (form) => {
    const errorElements = form.querySelectorAll('[data-error]');
    errorElements.forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
};

/**
 * Mostrar errores en el formulario
 * @param {HTMLFormElement} form
 * @param {Object} errors
 */
export const showFormErrors = (form, errors) => {
    Object.keys(errors).forEach(fieldName => {
        const input = form.querySelector(`[name="${fieldName}"]`);
        if (input) {
            const errorEl = input.parentElement.querySelector('[data-error]');
            if (errorEl) {
                errorEl.textContent = errors[fieldName];
                errorEl.style.display = 'block';
            }
        }
    });
};

/**
 * Serializar formulario a objeto
 * @param {HTMLFormElement} form
 * @returns {Object}
 */
export const serializeForm = (form) => {
    const formData = new FormData(form);
    const data = {};
    
    formData.forEach((value, key) => {
        if (data[key]) {
            // Si ya existe, convertir a array
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    });
    
    return data;
};

/**
 * Resetear formulario
 * @param {HTMLFormElement} form
 */
export const resetForm = (form) => {
    form.reset();
    clearFormErrors(form);
};
