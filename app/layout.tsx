'use client';
import './globals.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Dashboard', icon: '📊' },
    { href: '/orders', label: 'Pedidos', icon: '📦' },
    { href: '/products', label: 'Productos', icon: '🏷️' },
  ];

  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, display: 'flex', minHeight: '100vh', background: '#f3f0ff' }}>

        {/* Sidebar */}
        <div style={{
          width: '220px', background: 'white', padding: '24px 16px',
          display: 'flex', flexDirection: 'column', gap: '8px',
          boxShadow: '2px 0 8px rgba(0,0,0,0.06)', minHeight: '100vh',
          position: 'fixed', top: 0, left: 0, zIndex: 100
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 'bold', fontSize: '14px'
            }}>VL</div>
            <span style={{ fontWeight: '700', fontSize: '16px', color: '#1e1b4b' }}>Orders App</span>
          </div>

          {/* Links */}
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 14px', borderRadius: '10px', textDecoration: 'none',
                background: active ? 'linear-gradient(135deg, #e9d5ff, #ddd6fe)' : 'transparent',
                color: active ? '#7c3aed' : '#6b7280',
                fontWeight: active ? '600' : '400', fontSize: '14px',
                transition: 'all 0.2s'
              }}>
                {link.icon} {link.label}
              </Link>
            );
          })}

          {/* Usuario */}
          <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid #f3f4f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: '#7c3aed', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: 'bold'
              }}>L</div>
              <div>
                <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#1e1b4b' }}>Laura Admin</p>
                <p style={{ margin: 0, fontSize: '11px', color: '#9ca3af' }}>laura@orders.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div style={{ marginLeft: '220px', flex: 1, padding: '32px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}