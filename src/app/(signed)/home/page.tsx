'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Row from '@/components/Row';
import styled from 'styled-components';


const HomeContainer = styled.div`
    background-color: #000;
    color: #fff;
    min-height: 100vh;
    padding: 0;
    overflow: hidden;
`;

// Container principal para o conteúdo
const MainContent = styled.main`
    padding: 60px 20px;
`;

export default function Home() {
    return (
        <HomeContainer>
            {/* Header fixo no topo */}
            <Header/>

            {/* Seção principal com herói e carrosséis */}
            <MainContent>
                <Hero/>
                <Row title="Trending Now"/>
                <Row title="Top Rated Movies"/>
                <Row title="Action Movies"/>
                <Row title="Family Favorites"/>
            </MainContent>
        </HomeContainer>
    );
}