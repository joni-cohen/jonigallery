export interface Image {
    url:string,
    likes:number,
    description:string
}

export interface GalleryState {
    error: string,
    isLoaded: boolean,
    images: Image[],
    hasMore: boolean,
    step:number
}
