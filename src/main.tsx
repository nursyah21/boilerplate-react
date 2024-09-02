import { createRoot } from 'react-dom/client'
import { Index } from './pages/Index.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Index} />
    </Routes>
  </BrowserRouter>
)
