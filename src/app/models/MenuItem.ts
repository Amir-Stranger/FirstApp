
export interface MenuItem {
    id: number,
    title: string,
    path: string,
    children?: MenuItem[];
}

export interface type {
    text: string;
}