'use client';
import { useState } from 'react';

const ejemploProductos = [
  { id: 1, productName: "Café Colombiano Premium", unitPrice: 24.90, package: "Caja x 500g" },
  { id: 2, productName: "Chocolate Orgánico 70%", unitPrice: 40.00, package: "Caja x 12" },
  { id: 3, productName: "Aceite de Oliva Extra Virgen", unitPrice: 28.50, package: "Botella 750ml" },
  { id: 4, productName: "Quinua Blanca Orgánica", unitPrice: 18.00, package: "Bolsa x 1kg" },
  { id: 5, productName: "Mermelada de Mora", unitPrice: 22.00, package: "Frasco 250g" },
];

export default function ProductsPage() {
  const [products] = useState(ejemploProductos);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🏷️ Catálogo de Productos</h1>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600">
              <th className="p-4">ID</th>
              <th className="p-4">Producto</th>
              <th className="p-4">Empaque</th>
              <th className="p-4 text-right">Precio</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={product.id} className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="p-4">#{product.id}</td>
                <td className="p-4 font-medium">{product.productName}</td>
                <td className="p-4 text-gray-500">{product.package}</td>
                <td className="p-4 text-right font-bold text-green-600">${product.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}