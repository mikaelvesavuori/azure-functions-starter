export const Request = {
    method: HttpMethod | null,
    url: "string",
    headers: {
        [key: string]: string;
    },
    query: {
        [key: string]: string;
    },
    params: {
        [key: string]: string;
    },
    //body?: "any";
    //rawBody?: "any";
};
