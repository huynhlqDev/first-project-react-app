import { DOMAIN } from "../util/environment";

export const getProjectsApi = async (username, password) => {
    try {
        const url = `${DOMAIN}/projects`;
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

        const response = await fetch(url, request);
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

export const createProjectApi = async (project) => {
    try {
        const url = `${DOMAIN}/projects`;
        const token = localStorage.getItem("TOKEN");
        const ownerUsername = localStorage.getItem("USERNAME");
        const body = {
            identifier: project.identifier,
            name: project.name,
            description: project.description,
            startDate: project.startDate,
            endDate: project.endDate,
            ownerUsername: ownerUsername,
        }

        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        };
        console.log(`[REQUEST]: ${url},`, request);

        const response = await fetch(url, request);
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
}