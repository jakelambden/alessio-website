const rootURL = 'https://alessio-website-api.azurewebsites.net/api/';

interface ImageAssetAPI {
    uri: string,
    name: string,
    collection: string,
    uploadedAt: string,
}

export async function getImages(): Promise<ImageAsset[]> {
    const headers = new Headers();
    const myRequest = new Request(`${rootURL}storage/get`, {
        method: 'GET',
        headers: headers,
        cache: 'default',
    });

    const imageDatas = await request(myRequest);
    return imageDatas.map((imageData: ImageAssetAPI) => {
        const image: ImageAsset = {
            name: imageData.name,
            uri: imageData.uri,
            uploadedAt: new Date(imageData.uploadedAt),
            collection: imageData.collection || 'Uncategorized'
        }
        return image;
    });
}

export async function request(myRequest: Request): Promise<ImageAssetAPI[]> {
    const response: Response = await fetch(myRequest);
    if (response.ok) return await response.json();
    else {
        console.error('Could not fetch from API');
        return [];
    }
}