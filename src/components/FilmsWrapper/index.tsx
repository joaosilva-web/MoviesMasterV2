import { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import {FaPlus, FaThumbsUp, FaThumbsDown, FaChevronDown } from "react-icons/fa"

interface ApiRecive {
    page: number;
    results: [ApiResults];
}

interface ApiResults {
backdrop_path: string;
genre_ids: [number];
id: number;
original_language: string;
original_title: string;
overview: string;
popularity: number;
poster_path: string,
release_date: string;
title: string;
video: boolean;
vote_average: number;
vote_count: number;
}

export function FilmsWrapper() {
    const [apiData, setApiData] = useState<ApiResults[]>();
    useEffect(() => {
        async function loadFilms() {
        const { data } = await api.get<ApiRecive>(`movie/popular?api_key=549851ad4bb5922c5c7448f015735383&language=pt-BR&page=1`);
        setApiData(data.results);
    }
        loadFilms()
    },[])
    console.log(apiData)


    return(
        <S.FilmsWrapper>
            <ul>
                {apiData?.map((film) => (
                    <S.FilmCard key={film.id} image={film.poster_path} className="filmCard">
                        
                        <S.InfoCard>
                        <div>
                            <button><FaPlus/></button>
                            <button><FaThumbsUp/></button>
                            <button><FaThumbsDown/></button>
                            <button><FaChevronDown/></button>
                        </div>
                        </S.InfoCard>
                    </S.FilmCard>
                ))}
            </ul>
        </S.FilmsWrapper>
    );
}