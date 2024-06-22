import React, { useState, useEffect } from 'react';
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
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px #ccc;
  text-align: center;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
  width: 100%;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s;
  animation: ${({ isRemoved }) => isRemoved && 'fadeOut 0.5s ease-in-out'};
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  &:hover {
    transform: scale(1.05);
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

const RemoveButton = styled.button`
  font-size: 1.2rem;
  color: #e53935;
  margin-top: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const AddToCartButton = styled.button`
  font-size: 1.2rem;
  color: #333;
  margin-top: 1rem;
  background-color: #f06c64;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    background-color: #e53935;
    transform: scale(1.1);
  }
`;

const TotalPrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: right;
  margin-top: 2rem;
  color: #f06c64;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  &.updated {
    color: #f06c64;
    transform: scale(1.1);
    animation: fadeOut 0.5s ease-in-out;
    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

const FavoritesAndCart = ({ favorites, onRemoveFromFavorites, onRemoveFromCart }) => {
    const [cart, setCart] = useState([]);
    const [prevTotalPrice, setPrevTotalPrice] = useState(0);

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    useEffect(() => {
        setPrevTotalPrice(totalPrice);
    }, [totalPrice]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <Container>
            <Title>Избранное</Title>
            <ProductList>
                {favorites.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductLink to={`/product/${product.id}`}>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDescription>{product.description}</ProductDescription>
                            <ProductPrice>Цена: {product.price} руб</ProductPrice>
                        </ProductLink>
                        <AddToCartButton onClick={() => addToCart(product)}>
                            Добавить в корзину
                        </AddToCartButton>
                        <RemoveButton onClick={() => onRemoveFromFavorites(product)}>
                            Убрать из избранного
                        </RemoveButton>
                    </ProductCard>
                ))}
            </ProductList>
            <Title>Корзина</Title>
            <ProductList>
                {cart.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductLink to={`/product/${product.id}`}>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDescription>{product.description}</ProductDescription>
                            <ProductPrice>Цена: {product.price} руб</ProductPrice>
                        </ProductLink>
                        <RemoveButton onClick={() => onRemoveFromCart(product)}>
                            Убрать из корзины
                        </RemoveButton>
                    </ProductCard>
                ))}

                <TotalPrice className={totalPrice > prevTotalPrice ? 'updated' : ''}>
                    Итоговая цена: {totalPrice} рублей
                </TotalPrice>
            </ProductList>
        </Container>
    );
};

export default FavoritesAndCart;
