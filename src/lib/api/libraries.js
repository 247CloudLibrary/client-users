import client from "./client";

export const readLibraries = () => client.get("/libraries");
