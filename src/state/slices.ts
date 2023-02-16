import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../types";

const STORAGE_KEY = "favorite_articles"

interface FavoritesArticlesState {
    articles: Article[]
}

const initialState: FavoritesArticlesState = {
    articles: (() => {
        const rawArticles = localStorage.getItem(STORAGE_KEY)

        if (!rawArticles) {
            return []
        } else {
            return JSON.parse(rawArticles)
        }
    })()
}

export const favoritesArticlesSlice = createSlice({
    name: "favoritesArticles",
    initialState,
    reducers: {
        addArticle(state, action) {
            if (state.articles.findIndex((v) => v.id === action.payload.id) === -1) {
                state.articles = [
                    action.payload,
                    ...state.articles
                ]

                localStorage.setItem(STORAGE_KEY, JSON.stringify(state.articles))
            }
        },
        removeArticle(state, action) {
            state.articles = state.articles.filter((v) => v.id !== action.payload)

            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.articles))
        }
    }
})

export const { addArticle, removeArticle } = favoritesArticlesSlice.actions