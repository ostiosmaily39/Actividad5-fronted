'use client';
import 'devextreme/dist/css/dx.material.blue.light.css';
import DataGrid, { Column, FilterRow, SearchPanel, Paging, Export } from 'devextreme-react/data-grid';

const pedidos = [
  { id: 1, orderNumber: "ORD-1001", orderDate: "2026-04-01", totalAmount: 129.80, customer: "Carlos Ramírez" },
  { id: 2, orderNumber: "ORD-1002", orderDate: "2026-04-02", totalAmount: 85.50, customer: "María González" },
  { id: 3, orderNumber: "ORD-1003", orderDate: "2026-04-03", totalAmount: 156.00, customer: "Diego Fernández" },
  { id: 4, orderNumber: "ORD-1004", orderDate: "2026-04-04", totalAmount: 72.00, customer: "Ana Torres" },
  { id: 5, orderNumber: "ORD-1005", orderDate: "2026-04-05", totalAmount: 210.00, customer: "Lucía Morales" },
  { id: 6, orderNumber: "ORD-1006", orderDate: "2026-04-06", totalAmount: 98.70, customer: "Jorge Pineda" },
  { id: 7, orderNumber: "ORD-1007", orderDate: "2026-04-07", totalAmount: 64.00, customer: "Valentina Herrera" },
  { id: 8, orderNumber: "ORD-1008", orderDate: "2026-04-08", totalAmount: 180.00, customer: "Pedro Castillo" },
  { id: 9, orderNumber: "ORD-1009", orderDate: "2026-04-09", totalAmount: 54.00, customer: "Camila Silva" },
  { id: 10, orderNumber: "ORD-1010", orderDate: "2026-04-10", totalAmount: 119.60, customer: "Santiago Vega" },
];

export default function OrdersPage() {
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
          { label: 'Pedidos', icon: '📦', active: true },
          { label: 'Productos', icon: '🏷️', active: false },
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
          <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>Inicio &gt; Pedidos</p>
          <h1 style={{ margin: '4px 0 4px', fontSize: '28px', fontWeight: '700', color: '#1e1b4b' }}>📦 Pedidos</h1>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Listado completo de pedidos registrados.</p>
        </div>

        <div style={{
          background: 'white', borderRadius: '16px',
          padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <DataGrid
            dataSource={pedidos}
            showBorders={false}
            rowAlternationEnabled={true}
            columnAutoWidth={true}
          >
            <SearchPanel visible={true} placeholder="Buscar pedido..." />
            <FilterRow visible={true} />
            <Paging defaultPageSize={5} />
            <Export enabled={true} />
            <Column dataField="id" caption="ID" width={60} />
            <Column dataField="orderNumber" caption="Número de Orden" />
            <Column dataField="customer" caption="Cliente" />
            <Column dataField="orderDate" caption="Fecha" />
            <Column dataField="totalAmount" caption="Total ($)" format="currency" />
          </DataGrid>
        </div>
      </div>
    </div>
  );
}