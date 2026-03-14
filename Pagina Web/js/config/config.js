/**
 * CONFIGURACIÓN CENTRALIZADA
 * Sistema de configuración global para toda la aplicación
 * Scope: Mantener este archivo como punto central de configuración
 */

export const APP_CONFIG = {
    // ===== INFORMACIÓN DE LA EMPRESA =====
    company: {
        name: 'Impulso 369',
        description: 'Consultoría especializada en soluciones empresariales estratégicas',
        email: 'info@impulso369.com',
        phone: '+34 123 456 789',
        address: 'Calle Principal 123, 28001 Madrid, España',
        website: 'https://www.impulso369.com',
        socialMedia: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com'
        }
    },

    // ===== CONFIGURACIÓN DE NAVEGACIÓN =====
    navigation: {
        mainMenu: [
            { label: 'Inicio', href: 'index.html', target: '_self' },
            { label: 'Servicios', href: 'pages/servicio.html', target: '_self' },
            { label: 'Equipo', href: 'pages/equipo.html', target: '_self' },
            { label: 'Casos de Éxito', href: 'pages/casosdeexito.html', target: '_self' },
            { label: 'Contacto', href: 'pages/contacto.html', target: '_self' }
        ],
        footerLinks: {
            quickLinks: [
                { label: 'Inicio', href: 'index.html' },
                { label: 'Servicios', href: 'pages/servicio.html' },
                { label: 'Equipo', href: 'pages/equipo.html' },
                { label: 'Casos de Éxito', href: 'pages/casosdeexito.html' },
                { label: 'Contacto', href: 'pages/contacto.html' }
            ],
            services: [
                { label: 'Consultoría Estratégica', href: 'pages/servicio.html#estrategia' },
                { label: 'Optimización de Procesos', href: 'pages/servicio.html#procesos' },
                { label: 'Transformación Digital', href: 'pages/servicio.html#digital' }
            ]
        }
    },

    // ===== SERVICIOS =====
    services: [
        {
            id: 'estrategia',
            title: 'Consultoría Estratégica',
            icon: 'fas fa-chart-line',
            description: 'Desarrollamos estrategias personalizadas para el crecimiento sostenible de tu empresa.',
            features: [
                'Análisis del entorno competitivo',
                'Definición de objetivos estratégicos',
                'Planes de implementación',
                'Seguimiento y métricas de éxito'
            ]
        },
        {
            id: 'procesos',
            title: 'Optimización de Procesos',
            icon: 'fas fa-cogs',
            description: 'Identificamos ineficiencias y optimizamos tus procesos para aumentar la productividad.',
            features: [
                'Mapeo de procesos actuales',
                'Identificación de cuellos de botella',
                'Rediseño de procesos',
                'Implementación y capacitación'
            ]
        },
        {
            id: 'digital',
            title: 'Transformación Digital',
            icon: 'fas fa-laptop-code',
            description: 'Te acompañamos en la implementación de tecnologías para la transformación digital.',
            features: [
                'Diagnóstico de madurez digital',
                'Roadmap de transformación',
                'Implementación de tecnologías',
                'Gestión del cambio organizacional'
            ]
        }
    ],

    // ===== PLANES Y PRECIOS =====
    plans: [
        {
            id: 'basico',
            name: 'Básico',
            price: 1999,
            currency: '€',
            period: 'mes',
            featured: false,
            features: [
                { text: 'Análisis estratégico inicial', included: true },
                { text: '4 sesiones de consultoría', included: true },
                { text: 'Reporte de recomendaciones', included: true },
                { text: 'Seguimiento mensual', included: false },
                { text: 'Soporte prioritario', included: false }
            ]
        },
        {
            id: 'profesional',
            name: 'Profesional',
            price: 3999,
            currency: '€',
            period: 'mes',
            featured: true,
            badge: 'Recomendado',
            features: [
                { text: 'Todo lo del plan Básico', included: true },
                { text: '8 sesiones de consultoría', included: true },
                { text: 'Seguimiento quincenal', included: true },
                { text: 'Implementación guiada', included: true },
                { text: 'Soporte prioritario', included: false }
            ]
        },
        {
            id: 'empresarial',
            name: 'Empresarial',
            price: 5999,
            currency: '€',
            period: 'mes',
            featured: false,
            features: [
                { text: 'Todo lo del plan Profesional', included: true },
                { text: 'Consultoría ilimitada', included: true },
                { text: 'Seguimiento semanal', included: true },
                { text: 'Equipo dedicado', included: true },
                { text: 'Soporte 24/7', included: true }
            ]
        }
    ],

    // ===== TESTIMONIOS =====
    testimonials: [
        {
            id: 1,
            text: 'Gracias a Impulso 369, nuestra empresa logró aumentar sus ingresos en un 40% en solo 12 meses.',
            author: 'María González',
            title: 'CEO, Innovatech Solutions',
            rating: 5
        },
        {
            id: 2,
            text: 'El proceso de transformación digital con Impulso 369 fue impecable. Nos guiaron en cada paso y los resultados superaron nuestras expectativas.',
            author: 'Carlos Ruiz',
            title: 'Director, RetailPro',
            rating: 5
        }
    ],

    // ===== CONFIGURACIÓN DE ANIMACIONES Y COMPORTAMIENTO =====
    animations: {
        enableAnimations: true,
        scrollAnimationThreshold: 0.1,
        transitionDuration: 300,
        scrollBehavior: 'smooth'
    },

    // ===== CONFIGURACIÓN DE VALIDACIÓN DE FORMULARIOS =====
    forms: {
        requiredFieldMessage: 'Este campo es obligatorio',
        invalidEmailMessage: 'Ingresa un email válido',
        invalidPhoneMessage: 'Ingresa un teléfono válido',
        successMessage: 'Formulario enviado correctamente',
        errorMessage: 'Error al enviar el formulario'
    },

    // ===== CONFIGURACIÓN DE ANALÍTICA =====
    analytics: {
        enabled: false,
        googleAnalyticsId: 'UA-XXXXXXXXX-X'
    },

    // ===== INFORMACIÓN SOBRE NOSOTROS =====
    about: {
        yearsExperience: 15,
        projectsCompleted: 200,
        highlights: [
            'Más de 200 proyectos exitosos',
            'Equipo multidisciplinario',
            'Resultados medibles',
            'Enfoque personalizado'
        ]
    }
};

// ===== MÉTODOS DE UTILIDAD =====
export const getService = (serviceId) => {
    return APP_CONFIG.services.find(service => service.id === serviceId);
};

export const getPlan = (planId) => {
    return APP_CONFIG.plans.find(plan => plan.id === planId);
};

export const getNavLink = (label) => {
    return APP_CONFIG.navigation.mainMenu.find(item => item.label === label);
};

export default APP_CONFIG;
