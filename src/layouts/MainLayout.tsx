import { Outlet } from 'react-router-dom';

import { Header } from '../components';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
