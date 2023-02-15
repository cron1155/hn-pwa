import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../types";

interface FavoritesArticlesState {
    articles: Article[]
}

const initialState: FavoritesArticlesState = {
    articles: []
}

export const favoritesArticlesSlice = createSlice({
    name: "favoritesArticles",
    initialState,
    reducers: {
        addArticle(state, action) {
            state.articles = [
                action.payload,
                ...state.articles
            ]
        }
    }
})

export const { addArticle } = favoritesArticlesSlice.actions