import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL_CLIENTES


export async function fetchClients() {
  try {
    const response = await axios.get(API_URL);
    return response.data
  } catch (error) {
    console.error("Error fetching clients:", error)
    throw error
  }
}

export async function createClient(clientData) {
  try {
    const response = await axios.post(API_URL, clientData)
    return response.data
  } catch (error) {
    console.error("Error creating client:", error)
    throw error
  }
}

export async function updateClient(id, updatedClientData) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedClientData)
    return response.data
  } catch (error) {
    console.error("Error updating client:", error)
    throw error
  }
}

export async function deleteClient(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error("Error deleting client:", error)
    throw error
  }
}
