import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import "./i18n.ts";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider 
        theme={{ fontFamily: 'Nunito, sans-serif' }}
        defaultColorScheme='auto'>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </MantineProvider>
    </StrictMode>
)
