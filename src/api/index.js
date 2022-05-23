import { instance as axios } from "./axios";

export const getUsers = async () => {
    try {
        const {data : users} = await axios.get("/users", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGIzOTRkNzA4OWY5MDAxNmRiYzlkMSIsImlhdCI6MTY1MzI5MTM4Mn0.z11A1VUEDgMQFVfVpNuRSeaVEAV0uLmsYoqLPhT-yUs",
            },
        });
        return users;
    } catch (e) {
        console.log({ errorGetUsers: e });
        return [];
    }
};

export const getOrders = async () => {
    try {
        const {data : orders} = await axios.get("/orders", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGIzOTRkNzA4OWY5MDAxNmRiYzlkMSIsImlhdCI6MTY1MzI5MTM4Mn0.z11A1VUEDgMQFVfVpNuRSeaVEAV0uLmsYoqLPhT-yUs",
            },
        });
        return orders;
    } catch (e) {
        console.log({ errorGetOrders: e });
        return [];
    }
};
