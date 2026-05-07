'use client';
import { useState } from 'react';

const ejemploPedidos = [
  { id: 1, orderNumber: "ORD-1001", orderDate: "2026-05-01", totalAmount: 129.80 },
  { id: 2, orderNumber: "ORD-1002", orderDate: "2026-05-02", totalAmount: 85.50 },
  { id: 3, orderNumber: "ORD-1003", orderDate: "2026-05-03", totalAmount: 156.00 },
  { id: 4, orderNumber: "ORD-1004", orderDate: "2026-05-04", totalAmount: 72.00 },
  { id: 5, orderNumber: "ORD-1005", orderDate: "2026-05-05", totalAmount: 210.00 },
];

export default function OrdersPage() {
  const [orders] = useState(ejemploPedidos);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📦 Listado de Pedidos</h1>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600">
              <th className="p-4">ID</th>
              <th className="p-4">Número</th>
              <th className="p-4">Fecha</th>
              <th className="p-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order.id} className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="p-4">#{order.id}</td>
                <td className="p-4 font-medium">{order.orderNumber}</td>
                <td className="p-4 text-gray-500">{order.orderDate}</td>
                <td className="p-4 text-right font-bold text-green-600">${order.totalAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}