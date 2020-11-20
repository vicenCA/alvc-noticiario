//clase que nos permite exportar la interface News y unirla con app.component.ts
export interface iNews{
    _id: number;
    titleCard: string;
    body: string;
    image: string;
    date: string;
    journalist: string;
    category: string;
    views: number;
}

export interface logoImage{
    _id: string;
    imagelogo: string;
}