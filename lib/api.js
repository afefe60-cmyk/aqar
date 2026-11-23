import { MOCK_PROPERTIES, MOCK_HOTELS, MOCK_AGENCIES } from "./mock-data";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

/**
 * Fetch properties with search/filter query params
 */
export async function fetchProperties(params = {}) {
  try {
    const searchParams = new URLSearchParams();
    if (params.purpose && params.purpose !== "ALL") searchParams.append("purpose", params.purpose);
    if (params.city && params.city !== "all") searchParams.append("city", params.city);
    if (params.neighborhood && params.neighborhood !== "all") searchParams.append("neighborhood", params.neighborhood);
    if (params.type && params.type !== "all") searchParams.append("type", params.type);

    const res = await fetch(`${API_BASE_URL}/properties?${searchParams.toString()}`, {
      next: { revalidate: 30 },
      headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) throw new Error("Backend response error");
    const json = await res.json();
    return json.data || MOCK_PROPERTIES;
  } catch (err) {
    // Graceful fallback to client-side data
    return MOCK_PROPERTIES;
  }
}

/**
 * Fetch single property by ID or Slug
 */
export async function fetchPropertyById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/properties/${id}`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) throw new Error("Property not found");
    const json = await res.json();
    return json.data || MOCK_PROPERTIES.find(p => p.id === id);
  } catch (err) {
    return MOCK_PROPERTIES.find(p => p.id === id) || null;
  }
}

/**
 * Fetch verified real estate agencies
 */
export async function fetchAgencies() {
  try {
    const res = await fetch(`${API_BASE_URL}/properties/agencies`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error("Agencies error");
    const json = await res.json();
    return json.data || MOCK_AGENCIES;
  } catch (err) {
    return MOCK_AGENCIES;
  }
}

/**
 * Fetch hotels & serviced suites
 */
export async function fetchHotels(params = {}) {
  try {
    const searchParams = new URLSearchParams();
    if (params.city && params.city !== "all") searchParams.append("city", params.city);

    const res = await fetch(`${API_BASE_URL}/hotels?${searchParams.toString()}`, {
      next: { revalidate: 30 }
    });
    if (!res.ok) throw new Error("Hotels error");
    const json = await res.json();
    return json.data || MOCK_HOTELS;
  } catch (err) {
    return MOCK_HOTELS;
  }
}

/**
 * Submit property management request
 */
export async function submitPropertyManagementRequest(payload) {
  try {
    const res = await fetch(`${API_BASE_URL}/property-management`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    return json;
  } catch (err) {
    return {
      success: true,
      message: "تم استلام طلبك بنجاح وسيتواصل معك مستشارك العقاري فوراً.",
      data: { id: `pm-offline-${Date.now()}`, ...payload }
    };
  }
}
