'use client';
import 'devextreme/dist/css/dx.material.blue.light.css';
import DataGrid, { Column, FilterRow, SearchPanel, Paging, Export } from 'devextreme-react/data-grid';

const productos = [
  { id: 1, productName: "Café Colombiano Premium", unitPrice: 24.90, package: "Caja x 500g" },
  { id: 2, productName: "Chocolate Orgánico 70%", unitPrice: 40.00, package: "Caja x 12 unidades" },
  { id: 3, productName: "Aceite de Oliva Extra Virgen", unitPrice: 28.50, package: "Botella 750ml" },
  { id: 4, productName: "Quinua Blanca Orgánica", unitPrice: 18.00, package: "Bolsa x 1kg" },
  { id: 5, productName: "Mermelada de Mora", unitPrice: 22.00, package: "Frasco 250g" },
  { id: 6, productName: "Té Verde Sencha", unitPrice: 12.00, package: "Caja x 20 sobres" },
  { id: 7, productName: "Queso Manchego Curado", unitPrice: 35.00, package: "Pieza 500g" },
  { id: 8, productName: "Salsa Picante Artesanal", unitPrice: 9.90, package: "Botella 150ml" },
  { id: 9, productName: "Dulce de Leche Clásico", unitPrice: 16.00, package: "Frasco 400g" },
  { id: 10, productName: "Jamón Serrano Reserva", unitPrice: 45.00, package: "Paquete 250g" },
];

export default function ProductsPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f3f0ff' }}>

      {/* Sidebar */}
      <div style={{
        width: '220px', background: 'white', padding: '24px 16px',
        display: 'flex', flexDirection: 'column', gap: '8px',
        boxShadow: '2px 0 8px rgba(0,0,0,0.06)', minHeight: '100vh'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 'bold', fontSize: '14px'
          }}>VL</div>
          <span style={{ fontWeight: '700', fontSize: '16px', color: '#1e1b4b' }}>Orders App</span>
        </div>

        {[
          { label: 'Dashboard', icon: '📊', active: false },
          { label: 'Pedidos', icon: '📦', active: false },
          { label: 'Productos', icon: '🏷️', active: true },
        ].map((item) => (
          <a key={item.label} href={item.label === 'Dashboard' ? '/' : `/${item.label.toLowerCase()}`}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 14px', borderRadius: '10px', textDecoration: 'none',
              background: item.active ? 'linear-gradient(135deg, #e9d5ff, #ddd6fe)' : 'transparent',
              color: item.active ? '#7c3aed' : '#6b7280',
              fontWeight: item.active ? '600' : '400', fontSize: '14px'
            }}>
            {item.icon} {item.label}
          </a>
        ))}

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

      {/* Main content */}
      <div style={{ flex: 1, padding: '32px' }}>
        <div style={{ marginBottom: '24px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>Inicio &gt; Productos</p>
          <h1 style={{ margin: '4px 0 4px', fontSize: '28px', fontWeight: '700', color: '#1e1b4b' }}>🏷️ Productos</h1>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Catálogo completo de productos disponibles.</p>
        </div>

        <div style={{
          background: 'white', borderRadius: '16px',
          padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <DataGrid
            dataSource={productos}
            showBorders={false}
            rowAlternationEnabled={true}
            columnAutoWidth={true}
          >
            <SearchPanel visible={true} placeholder="Buscar producto..." />
            <FilterRow visible={true} />
            <Paging defaultPageSize={5} />
            <Export enabled={true} />
            <Column dataField="id" caption="ID" width={60} />
            <Column dataField="productName" caption="Producto" />
            <Column dataField="package" caption="Empaque" />
            <Column dataField="unitPrice" caption="Precio ($)" format="currency" />
          </DataGrid>
        </div>
      </div>
    </div>
  );
}