export async function http<T>(request: RequestInfo): Promise<T> {
  const repsonse = await fetch(request);
  const body = await repsonse.json();
  return body;
}
