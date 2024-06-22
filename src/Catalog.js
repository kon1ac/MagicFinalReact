import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding: 2rem;
    background-color: #f5f5f5;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;

    animation: fadeIn 1s ease-in-out;
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #333;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px #ccc;
    text-align: center;

    animation: slideInDown 1s ease-in-out;
    @keyframes slideInDown {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(0); }
    }
`;

const SearchInput = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    &:focus {
        outline: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    animation: slideInUp 1s ease-in-out;
    @keyframes slideInUp {
        0% { transform: translateY(100%); }
        100% { transform: translateY(0); }
    }
`;

const FiltersContainer = styled.div`
    margin-bottom: 1.5rem;
    width: 100%;
    max-width: 800px;

    animation: slideInLeft 1s ease-in-out;
    @keyframes slideInLeft {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(0); }
    }
`;

const FilterLabel = styled.label`
    display: inline-block;
    margin-right: 1rem;
    font-size: 1.2rem;

    animation: fadeIn 1s ease-in-out;
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
    width: 100%;

    animation: slideInRight 1s ease-in-out;
    @keyframes slideInRight {
        0% { transform: translateX(100%); }
        100% { transform: translateX(0); }
    }
`;

const ProductCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    animation: slideInUp 1s ease-in-out;
    @keyframes slideInUp {
        0% { transform: translateY(100%); }
        100% { transform: translateY(0); }
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

    animation: fadeIn 1s ease-in-out;
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

const ProductDescription = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;

    animation: fadeIn 1s ease-in-out;
    @keyframes fadeIn {
        0% { opacity: 0; }

        100% { opacity: 1; }
    }
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f06c64;

  animation: fadeIn 1s ease-in-out;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const AddToFavoritesButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  margin-top: 1rem;
  background-color: #940707;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7f0505;
  }

  animation: fadeIn 1s ease-in-out;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const Catalog = ({ products, onAddToFavorites }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategories = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        return matchesSearch && matchesCategories;
    });

    const categories = Array.from(new Set(products.map((product) => product.category)));

    const handleAddToFavorites = (product) => {
        if (onAddToFavorites) {
            onAddToFavorites(product);
        }
    };

    return (
        <Container>
            <Title>Каталог игроков</Title>
            <SearchInput
                type="text"
                placeholder="Поиск по имени"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiltersContainer>
                <h3>Фильтры:</h3>
                {categories.map((category) => (
                    <FilterLabel key={category}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => {
                                if (selectedCategories.includes(category)) {
                                    setSelectedCategories(selectedCategories.filter((c) => c !== category));
                                } else {
                                    setSelectedCategories([...selectedCategories, category]);
                                }
                            }}
                        />
                        {category}
                    </FilterLabel>
                ))}
            </FiltersContainer>
            <ProductList>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductLink to={`/product/${product.id}`}>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDescription>{product.description}</ProductDescription>
                            <ProductPrice>Цена: {product.price} руб</ProductPrice>
                        </ProductLink>
                        <AddToFavoritesButton onClick={() => handleAddToFavorites(product)}>
                            Добавить в избранное
                        </AddToFavoritesButton>
                    </ProductCard>
                ))}
            </ProductList>
        </Container>
    );
};

export default Catalog;