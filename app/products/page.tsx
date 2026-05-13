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
    <div>
      <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#9ca3af' }}>Inicio &gt; Productos</p>
      <h1 style={{ margin: '0 0 4px', fontSize: '28px', fontWeight: '700', color: '#1e1b4b' }}>🏷️ Productos</h1>
      <p style={{ margin: '0 0 24px', fontSize: '14px', color: '#6b7280' }}>Catálogo completo de productos disponibles.</p>

      <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
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
  );
}