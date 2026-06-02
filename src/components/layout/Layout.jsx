import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-mesh opacity-80" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
