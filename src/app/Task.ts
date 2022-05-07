export interface Task{
    id?: number;
    text: string;
    day: Date;
    category: CATEGORY;
    reminder: boolean;
}

export enum CATEGORY{
    Home= "pink",
    Study= "yellow",
    Work= "blue"
}