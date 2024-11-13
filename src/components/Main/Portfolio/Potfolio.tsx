import React, { useState, useEffect } from 'react';
import BtnLeftRight from '../../BtnLeftRight/BtnLeftRight';
import Card from '../../Card/Card';
import styles from './Portfolio.module.css';

interface PortfolioItem {
    id: number;
    title: string;
    img: string;
}

const Portfolio:React.FC  = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        // Загружаем данные из JSON-файла
        fetch('/data/portfolioData.json')
            .then((response) => response.json())
            .then((data) => setPortfolioItems(data))
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = portfolioItems.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <section className={styles.portfolio} id="portfolio">
            <div className={styles.nav_content}>
                <div>
                    <h6>Portfolio</h6>
                    <h2>EXPLORE MY PHOTOGRAPHY WORK.</h2>
                </div>
                <BtnLeftRight onNext={handleNextPage} onPrev={handlePrevPage} />
            </div>
            <hr />
            <br />
            <br />
            <div className={styles.card}>
                {currentItems.map((item) => (
                    <Card key={item.id} title={item.title} img={item.img} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
