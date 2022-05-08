export interface Task{
    id?: number;
    text: string;
    day: Date;
    category: CATEGORY;
    reminder: boolean;
}

export enum CATEGORY{
    Home=1,
    Study=2,
    Work=3
}

export enum COLORS{
    Home="rgba(64, 199, 64, 0.432)",
    Study="rgb(182, 182, 255)",
    Work="rgba(248, 10, 10, 0.632)"
}

export enum COLORTASK{
    Overdue='rgba(214, 214, 213, 0.829)',
    Alert='#ffb030',
    Pending= 'bisque'
}