
/**
 * author: "aroccoli"
​
children: Array(6) [ {…}, {…}, {…}, … ]
​
created_at: "2023-02-14T11:12:17.000Z"
​
created_at_i: 1676373137
​
id: 34787844
​
options: Array []
​
parent_id: null
​
points: 73
​
story_id: null
​
text: null
​
title: "Rust vs. Haskell"
​
type: "story"
​
url: "https://serokell.io/blog/rust-vs-haskell"
 */

export interface Article {
    id: number;
    type: string;
    title: string;
    url: string;
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