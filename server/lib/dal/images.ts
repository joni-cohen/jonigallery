import axios from "axios";

export async function getImagesFromSource() : Promise<{url:string,likes:number, description: string}[]>{
    const res = await axios.get('https://api.jonathanczyzyk.com/api/v1/images/small', {
        headers: {
            'x-api-key': 'api-key-65996da3-e085-40d9-b521-b8edd3b68ce9'
        }
    }).catch(err =>
    {
        throw err;
    })
    const images: {url:string,likes:number, description: string}[] = res.data || [];
    return images;

}