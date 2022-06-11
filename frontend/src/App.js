import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';
import ProtectedRoutes from './routes/ProtectedRoutes';
import NotRoutesProvider from './routes/NotRoutesProvider';
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
        <Route element={<ProtectedRoutes />}></Route>
        {/* <Route element={<NotRoutesProvider />}>
          <Route path="/login" element={<Login />} exact />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
