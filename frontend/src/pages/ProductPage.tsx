import { useEffect, useState } from 'react';
import api from '../api/axios';
import type { Product } from '../types';

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get<Product[]>('/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      fetchProducts();
      return;
    }
    try {
      const res = await api.get<Product[]>(`/api/products/search?name=${e.target.value}`);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOrder = async () => {
    if (!selectedProduct) return;
    try {
      await api.post('/api/orders', {
        address,
        items: [{ productID: selectedProduct.productID, quantity }]
      });
      setOrderSuccess(true);
      setSelectedProduct(null);
      setTimeout(() => setOrderSuccess(false), 3000);
    } catch (err) {
      alert('Đặt hàng thất bại! Vui lòng đăng nhập trước.');
    }
  };

  if (loading) return <p>Đang tải...</p>;

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
      <h2>Sản phẩm</h2>
      {orderSuccess && (
        <div style={{ background: '#d4edda', color: '#155724', padding: 12, borderRadius: 4, marginBottom: 16 }}>
          ✅ Đặt hàng thành công! Chúng tôi sẽ liên hệ xác nhận sớm nhất!
        </div>
      )}
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={search}
        onChange={handleSearch}
        style={{ padding: 8, width: '100%', marginBottom: 20 }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {products.map(product => (
          <div key={product.productID} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p style={{ color: '#007bff', fontWeight: 'bold' }}>{product.price.toLocaleString()}đ</p>
            <p>Còn: {product.stock} sản phẩm</p>
            <p>Danh mục: {product.categoryName}</p>
            <button
              onClick={() => { setSelectedProduct(product); setAddress(''); setQuantity(1); }}
              style={{ width: '100%', padding: 8, background: '#28a745', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
            >
              Đặt hàng
            </button>
          </div>
        ))}
      </div>

      {/* Popup đặt hàng */}
      {selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', padding: 24, borderRadius: 8, width: 400 }}>
            <h3>Đặt hàng: {selectedProduct.productName}</h3>
            <p>Giá: {selectedProduct.price.toLocaleString()}đ</p>
            <div style={{ marginBottom: 12 }}>
              <label>Số lượng:</label>
              <input
                type="number"
                min={1}
                max={selectedProduct.stock}
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Địa chỉ giao hàng:</label>
              <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Nhập địa chỉ giao hàng..."
                style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
              />
            </div>
            <p style={{ fontWeight: 'bold' }}>Tổng: {(selectedProduct.price * quantity).toLocaleString()}đ</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={handleOrder}
                style={{ flex: 1, padding: 10, background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
              >
                Xác nhận đặt hàng
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{ flex: 1, padding: 10, background: '#6c757d', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;