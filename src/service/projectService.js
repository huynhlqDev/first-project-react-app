import { API_URL } from "../util/environment";

export const fetchProjectsApi = async (username, password) => {
    try {
        const url = `${API_URL}/projects`;
        const token = localStorage.getItem("TOKEN"); 

        const request = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        console.log(`[REQUEST]: ${url},`, request);

        const response = await fetch(url,request);
        console.log("[RESPONSE]", response);

        const data = await response.json();
        if (!response.ok) { //success in the range 200-299
            throw new Error(data.error || "Login failed");
        }
        return data;

    } catch (error) {
        console.log("error: ", error.message)
        throw new Error(error.message);
    }
};
