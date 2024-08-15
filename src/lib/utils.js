export async function getApiData() {
    const res = await fetch('https://get.geojs.io/v1/ip/geo.json');

    if (res.ok) {
        return await res.text();
    } else {
        throw new Error('request failed');
    }
}