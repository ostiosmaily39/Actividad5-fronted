import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Orders Platform - Actividad 5',
  description: 'Gestión de pedidos con Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4">
            <div className="flex gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
              <Link href="/orders" className="text-gray-700 hover:text-blue-600">Pedidos</Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600">Productos</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}