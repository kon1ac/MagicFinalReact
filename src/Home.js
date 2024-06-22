import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from "./Header";


const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px #ccc;
`;
const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  letter-spacing: 1px;
`;
const PageContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
    background-color: #f5f5f5;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    animation: fadeInUp 1s ease-in-out both;
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }
`;

const ProductCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transition: transform 0.3s, color 0.3s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        color: #f06c64;
    }
`;

const ProductLink = styled(Link)`
    text-decoration: none;
    color: #333;
`;

const ProductTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 400;
    color: #333;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    &:hover {
        color: #f06c64;
    }
`;

const ProductDescription = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
`;

const ProductPrice = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #f06c64;
`;

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
    width: 100%;
    & > div {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
    &.show div {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Home = ({ products }) => {
    const [showProducts, setShowProducts] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowProducts(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageContainer>
            <Header>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Title>Хоккейный магазин</Title>
                <Subtitle>
                    Добро пожаловать в магазин, посвященный творчеству фаната сериала "Молодежка"
                </Subtitle>
            </Header>
            <ProductList className={showProducts ? 'show' : ''}>
                {products.slice(0, 10).map((product) => (
                    <ProductCard key={product.id}>
                        <ProductLink to={`/product/${product.id}`}>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDescription>{product.description}</ProductDescription>
                            <ProductPrice>Цена: {product.price} руб.</ProductPrice>
                        </ProductLink>
                    </ProductCard>
                ))}
            </ProductList>
        </PageContainer>
    );
};

export default Home;
