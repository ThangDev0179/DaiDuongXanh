import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <nav style={{
      background: '#007bff',
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff'
    }}>
      <h2
        style={{ cursor: 'pointer', margin: 0 }}
        onClick={() => navigate('/')}
      >
        🧴 Đại Dương Xanh
      </h2>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Sản phẩm
        </span>
        {token ? (
          <>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/orders')}
            >
              Đơn hàng của tôi
            </span>
            <span>Xin chào, {userName}!</span>
            <button
              onClick={handleLogout}
              style={{ padding: '6px 12px', background: '#fff', color: '#007bff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/login')}
            style={{ padding: '6px 12px', background: '#fff', color: '#007bff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
          >
            Đăng nhập
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;