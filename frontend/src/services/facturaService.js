// src/services/facturaService.js
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8001/api/facturas'

export async function fetchFacturas() {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error("Error fetching facturas:", error)
    throw error
  }
}

export async function createFactura(facturaData) {
  try {
    const response = await axios.post(API_URL, facturaData)
    return response.data
  } catch (error) {
    console.error("Error creating factura:", error)
    throw error
  }
}

export async function updateFactura(id, updatedFacturaData) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedFacturaData)
    return response.data
  } catch (error) {
    console.error("Error updating factura:", error)
    throw error
  }
}

export async function deleteFactura(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error("Error deleting factura:", error)
    throw error
  }
}
