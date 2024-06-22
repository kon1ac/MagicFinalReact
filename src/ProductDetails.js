import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #666;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const Price = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #e53935;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ProductInfo = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: #666;
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const AddToFavoritesButton = styled.button`
  font-size: 1rem;
  color: #e53935;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  background-color: #fff;
  border: 2px solid #e53935;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e53935;
    color: #fff;
  }
`;

const AddToCartButton = styled.button`
  font-size: 1rem;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  background-color: #1e88e5;
  border: 2px solid #1e88e5;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1565c0;
  }
`;

const ProductDetails = ({ product, onAddToFavorites, onAddToCart }) => {
    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToFavorites = () => {
        if (typeof onAddToFavorites === 'function') {
            onAddToFavorites(product);
        } else {
            console.error('onAddToFavorites is not a function');
        }
    };

    const handleAddToCart = () => {
        if (typeof onAddToCart === 'function') {
            onAddToCart(product);
        } else {
            console.error('onAddToCart is not a function');
        }
    };

    return (
        <Container>
            <Title>{product.name}</Title>
            <Description>{product.description}</Description>
            <Price>Price: {product.price} RUB</Price>
            <ProductInfo>
                <p>Position: {product.position}</p>
                <p>Team: {product.team}</p>
            </ProductInfo>
            <AddButtons>
                <AddToFavoritesButton onClick={handleAddToFavorites} aria-label="Add to favorites">
                    Добавить в избранное
                </AddToFavoritesButton>
                <AddToCartButton onClick={handleAddToCart} aria-label="Add to cart">
                    Добавить в корзину
                </AddToCartButton>
            </AddButtons>
        </Container>
    );
};

export default ProductDetails;
