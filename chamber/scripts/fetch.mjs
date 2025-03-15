export async function apiFetch(source) {
    try {
        const response = await fetch(source);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            return data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
                console.log(error);
            }
    }