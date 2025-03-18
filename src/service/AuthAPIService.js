const API_URL = "http://localhost:8080/api";

export const loginApi = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Login failed");
    // Else successful (status in the range 200-299)
    console.log(`code ${response.ok}`)
    
    console.log(data)
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
