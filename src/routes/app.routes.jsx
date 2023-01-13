import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { CreateMovie } from '../pages/CreateMovie';
import { MoviePreview } from '../pages/MoviePreview';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create-movie' element={<CreateMovie/>} />
      <Route path='/movie-preview' element={<MoviePreview/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}