import {getImagesFromSource} from "../dal/images";
import cacheLocal from "../utils/cacheLocal"

export async function getImages(start: number, end: number) : Promise<{url:string,likes:number, description: string}[]>{
    let images:{url:string,likes:number, description: string}[] | undefined = cacheLocal.get('images');

    if(images === undefined) {
        images = await getImagesFromSource();
        cacheLocal.set('images',images);
    }
    return images.slice(start, end);
}