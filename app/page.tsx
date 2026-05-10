'use client';
import 'devextreme/dist/css/dx.material.blue.light.css';
import DataGrid, { Column, FilterRow, SearchPanel, Paging } from 'devextreme-react/data-grid';
import Chart, { Series, Legend, Tooltip, ArgumentAxis } from 'devextreme-react/chart';

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

const totalRevenue = pedidos.reduce((sum, p) => sum + p.totalAmount, 0);

export default function Dashboard() {
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
          { label: 'Dashboard', icon: '📊', active: true },
          { label: 'Pedidos', icon: '📦', active: false },
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

        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>Inicio &gt; Dashboard</p>
          <h1 style={{ margin: '4px 0 4px', fontSize: '28px', fontWeight: '700', color: '#1e1b4b' }}>Dashboard</h1>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Bienvenida, Laura. Esto es lo que está pasando hoy.</p>
        </div>

        {/* Tarjetas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'Total Pedidos', value: pedidos.length, color: '#f3f0ff', valueColor: '#7c3aed' },
            { label: 'Productos Activos', value: 10, color: '#f5f0ff', valueColor: '#a855f7' },
            { label: 'Ingresos Totales', value: `$${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, color: '#d1fae5', valueColor: '#059669' },
            { label: 'API Status', value: '● Online', color: '#f3f0ff', valueColor: '#7c3aed' },
          ].map((card) => (
            <div key={card.label} style={{
              background: card.color, borderRadius: '16px',
              padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#6b7280' }}>{card.label}</p>
              <p style={{ margin: 0, fontSize: '28px', fontWeight: '700', color: card.valueColor }}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Gráfico */}
        <div style={{
          background: 'white', borderRadius: '16px',
          padding: '24px', marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <h2 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: '600', color: '#1e1b4b' }}>
            📊 Ingresos por Pedido
          </h2>
          <Chart dataSource={pedidos} id="chart" height={280}>
            <Series valueField="totalAmount" argumentField="orderNumber" type="bar" color="#c084fc" name="Total ($)" />
            <Series valueField="totalAmount" argumentField="orderNumber" type="bar" color="#34d399" name="Ingreso" />
            <Legend visible={false} />
            <Tooltip enabled={true} />
            <ArgumentAxis label={{ overlappingBehavior: 'rotate' }} />
          </Chart>
        </div>

        {/* Tabla */}
        <div style={{
          background: 'white', borderRadius: '16px',
          padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <h2 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: '600', color: '#1e1b4b' }}>
            📋 Pedidos Recientes
          </h2>
          <DataGrid
            dataSource={pedidos}
            showBorders={false}
            rowAlternationEnabled={true}
            columnAutoWidth={true}
          >
            <SearchPanel visible={true} placeholder="Buscar pedido..." />
            <FilterRow visible={true} />
            <Paging defaultPageSize={5} />
            <Column dataField="id" caption="ID" width={60} />
            <Column dataField="orderNumber" caption="Número" />
            <Column dataField="customer" caption="Cliente" />
            <Column dataField="orderDate" caption="Fecha" />
            <Column dataField="totalAmount" caption="Total ($)" format="currency" />
          </DataGrid>
        </div>
      </div>
    </div>
  );
}