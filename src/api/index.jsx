const URL = "http://localhost:5000/api/v1";

export const sendMessage = async (data) => {
  try {
    const res = await fetch(`${URL}/contact`, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (error) {
    return error;
  }
};

export const getMessage = async () => {
  try {
    const res = await fetch(`${URL}/contact`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    return error;
  }
};


export const adminsignin = async (data) => {
  try {
    const res = await fetch(`${URL}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error: ${res.status}`);
    }

    // ✅ must await res.json()
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Login error:", error.message);
    return null;
  }
};


