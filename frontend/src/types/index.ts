export interface AuthResponse {
  token: string;
  role: string;
  userName: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}

export interface Product {
  productID: number;
  productName: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  status: string;
  categoryName: string;
}