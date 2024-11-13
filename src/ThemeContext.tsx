// src/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Определяем типы для темы
type Theme = 'light' | 'dark';

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

// Создаем контекст для темы
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Провайдер темы
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Определяем начальное состояние темы из localStorage или ставим 'light' по умолчанию
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        return (savedTheme as Theme) || 'light';
    });

    // Переключение темы и сохранение в localStorage
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme); // Устанавливаем data-атрибут для HTML
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Хук для использования контекста темы
export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
