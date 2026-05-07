'use client';
import { useState } from 'react';

// Datos REALES desde Orders.json
const pedidosReales = [
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

const productosReales = [
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

const totalRevenue = pedidosReales.reduce((sum, p) => sum + p.totalAmount, 0);

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">Bienvenida, Laura</p>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-5 text-white">
          <p className="text-blue-100 text-sm">Total Pedidos</p>
          <p className="text-3xl font-bold mt-1">{pedidosReales.length}</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg p-5 text-white">
          <p className="text-purple-100 text-sm">Productos Activos</p>
          <p className="text-3xl font-bold mt-1">{productosReales.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg p-5 text-white">
          <p className="text-green-100 text-sm">Ingresos Totales</p>
          <p className="text-3xl font-bold mt-1">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg p-5 text-white">
          <p className="text-indigo-100 text-sm">API Status</p>
          <p className="text-3xl font-bold mt-1">✅ Online</p>
        </div>
      </div>

      {/* Tabla de pedidos recientes */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold text-gray-800">📋 Pedidos Recientes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-600 text-sm">
                <th className="p-4">ID</th>
                <th className="p-4">Número</th>
                <th className="p-4">Cliente</th>
                <th className="p-4">Fecha</th>
                <th className="p-4 text-right">Total</th>
                <th className="p-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              {pedidosReales.map((order, idx) => (
                <tr key={order.id} className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="p-4">#{order.id}</td>
                  <td className="p-4 font-medium">{order.orderNumber}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4 text-gray-500">{order.orderDate}</td>
                  <td className="p-4 text-right font-bold text-green-600">${order.totalAmount.toFixed(2)}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completado</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}