declare const renderer: { fetch: (request: Request) => Promise<Response> | Response };
export default renderer;