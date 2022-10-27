import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/posts/:slug'} element={<Posts />} />
            </Routes>
        </BrowserRouter>
    )
}