export const initialState = {
    books: [] as Book[]
};

export interface Book {
    name: string;
    author: string;
    releasDate: string;
    edition: string;
    stats: Stats;
}

export interface Stats {
    readersPerMonth: number[];
    sellsPerMonth: number[];
}
