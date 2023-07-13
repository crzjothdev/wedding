export default async function fetchJson<JSON = unknown>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const response = await fetch(input, init)
    const data = await response.json()

    if (response.ok) return data

    throw new Error('Error in fetch the data')
}