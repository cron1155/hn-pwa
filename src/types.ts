

export interface Article {
    id: number;
    type: string;
    title: string;
    text: string;
    url: string | null;
    "created_at_i": number,
    "created_at": string,
    children: ArticleChildren[]
    author: string
}

export interface ArticleChildren {
    id: number;
    author: string;
    children: ArticleChildren[]
    text: string;
    type: string;
}