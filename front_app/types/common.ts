export const Url = 'http://62.113.100.169/api'

export type Section = 'main' | 'tech'

export type File = {
    id:number,
    title:string,
    photo:string
}

export interface Proposal {
    name:string,
    email:string,
    phone:string,
    message:string,
    date:string
}

export interface Carousel {
    id:number,
    title:string,
    describe:string,
    button_text?:string,
    button_url?:string,
    photo?:string
}

export interface Page {
    id:number,
    page_title:string,
    title:string,
    describe:string,
    files:File[]
    show:boolean
}

export interface ServerData {
    id:number,
    title:string,
    sub_title?:string,
    describe:string,
    button_url?:string,
    files:File[] | string
}
