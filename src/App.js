import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import FavoritesAndCart from './FavoritesAndCart';
import ProductDetails from './ProductDetails';
import './App.css';

const App = () => {
  const [products] = useState([
    {  id: 1, name: 'Сергей Матвеев', description: 'Тренер', price: 25000, category: 'Тренер', position: 'Тренер', team: 'Медведи' },
    { id: 2, name: 'Александр Костров', description: 'Нападающий', price: 3000, category: 'Нападающий', position: 'Нападающий', team: 'Медведи' },
    { id: 3, name: 'Михаил Пономарёв', description: 'Защитник', price: 5000, category: 'Защитник', position: 'Защитник', team: 'Бурые Медведи' },
    { id: 4, name: 'Андрей Кисляк', description: 'Нападающий', price: 7000, category: 'Нападающий', position: 'Нападающий', team: 'Ледяные Короли' },
    { id: 5, name: 'Антон Антипов', description: 'Нападающий', price: 5600, category: 'Нападающий', position: 'Нападающий', team: 'Ледяные Короли' },
    { id: 6, name: 'Георгий Бушманов', description: 'Нападающий', price: 5000, category: 'Нападающий', position: 'Нападающий', team: 'Алмата' },
    { id: 7, name: 'Игорь Дрозд', description: 'Нападающий', price: 4500, category: 'Нападающий', position: 'Нападающий', team: 'Алмата' },
    { id: 8, name: 'Руслан Жданов', description: 'Тренер', price: 18000, category: 'Тренер', position: 'Тренер', team: 'Бурые Медведи' },
    { id: 9, name: 'Борис Никитин', description: 'Защитник', price: 4500, category: 'Защитник', position: 'Защитник', team: 'Бурые Медведи' },
    { id: 10, name: 'Семен Бакин', description: 'Вратарь', price: 7000, category: 'Вратарь', position: 'Вратарь', team: 'Медведи' },
    { id: 11, name: 'Иван Савчук', description: 'Вратарь', price: 4500, category: 'Вратарь', position: 'Вратарь', team: 'Бурые Медведи' },
    { id: 12, name: 'Егор Щукин', description: 'Нападающий', price: 5600, category: 'Нападающий', position: 'Нападающий', team: 'Медведи' },
    { id: 13, name: 'Дмитрий Щукин', description: 'Вратарь', price: 5000, category: 'Вратарь', position: 'Вратарь', team: 'Факел' },
    { id: 14, name: 'Евгений Царев', description: 'Нападающий', price: 7000, category: 'Нападающий', position: 'Нападающий', team: 'Медведи' },
    { id: 15, name: 'Александр Точилин', description: 'Тренер', price: 13000, category: 'Тренер', position: 'Тренер', team: 'Титан' },
    { id: 16, name: 'Алексей Смирнов', description: 'Защитник', price: 4500, category: 'Защитник', position: 'Защитник', team: 'Арсенал' },
    { id: 17, name: 'Анатолий Жилин', description: 'Спортивный директор', price: 23000, category: 'Спортивный директор', position: 'Спортивный директор', team: 'Титан' },
    { id: 18, name: 'Вадим Казанцев', description: 'Спортивный директор', price: 35000, category: 'Спортивный директор', position: 'Спортивный директор', team: 'Бурые Медведи' },
    { id: 19, name: 'Денис Васильев', description: 'Нападающий', price: 4500, category: 'Нападающий', position: 'Нападающий', team: 'Медведи' },
    { id: 20, name: 'Игорь Гаврилов', description: 'Нападающий', price: 4000, category: 'Нападающий', position: 'Нападающий', team: 'Химик' },
    { id: 21, name: 'Степан Жарский', description: 'Тренер', price: 16000, category: 'Тренер', position: 'Тренер', team: 'Химик' },
    { id: 22, name: 'Томаш Бартович', description: 'Тренер', price: 17000, category: 'Тренер', position: 'Тренер', team: 'Медведи' },
    { id: 23, name: 'Юрий Романенко', description: 'Тренер', price: 14000, category: 'Тренер', position: 'Тренер', team: 'Ледяные Короли' },
    { id: 24, name: 'Вадим Назаров', description: 'Нападающий', price: 5000, category: 'Нападающий', position: 'Нападающий', team: 'Титан' },
    { id: 25, name: 'Максим Стрельцов', description: 'Тренер', price: 19000, category: 'Тренер', position: 'Тренер', team: 'Ледяные Короли' },
    { id: 26, name: 'Валерий Сотников', description: 'Спортивный директор', price: 30000, category: 'Спортивный директор', position: 'Спортивный директор', team: 'Титан' },
    { id: 27, name: 'Илья Березин', description: 'Нападающий', price: 5000, category: 'Нападающий', position: 'Нападающий', team: 'Медведи' },
    { id: 28, name: 'Доменик Дюшарм', description: 'Тренер молодежной хоккейной сборной Канады', price: 19000, category: 'Тренер', position: 'Тренер', team: 'Сборная Канады' },
    { id: 29, name: 'Валерий Поляков', description: 'Тренер', price: 17000, category: 'Тренер', position: 'Тренер', team: 'Алмата' },
    { id: 30, name: 'Алексей Платонов', description: 'Нападающий', price: 4000, category: 'Нападающий', position: 'Нападающий', team: 'Бурые Медведи' },
    { id: 31, name: 'Виктория Каштанова', description: 'Спортивный директор', price: 33000, category: 'Спортивный директор', position: 'Спортивный директор', team: 'Медведи' },
    { id: 32, name: 'Кузьма Шмелев', description: 'Вратарь', price: 5000, category: 'Вратарь', position: 'Вратарь', team: 'Медведи' },
    { id: 33, name: 'Владислав Куницын', description: 'Нападающий', price: 4500, category: 'Нападающий', position: 'Нападающий', team: 'Медведи' },
    { id: 34, name: 'Кирилл Емельянов', description: 'Нападающий', price: 4000, category: 'Нападающий', position: 'Нападающий', team: 'Медведи' },
    { id: 35, name: 'Иван Качалов', description: 'Тренер', price: 20000, category: 'Тренер', position: 'Тренер', team: 'Металлист' }
  ]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const handleRemoveFromFavorites = (product) => {
    setFavorites(favorites.filter((p) => p.id !== product.id));
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
  };

  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/catalog">Каталог</Link>
              </li>
              <li>
                <Link to="/favorites-and-cart">Избранное/Корзина</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/catalog" element={<Catalog products={products} onAddToFavorites={handleAddToFavorites} />} />
            <Route path="/favorites-and-cart" element={<FavoritesAndCart favorites={favorites} cart={cart} onRemoveFromFavorites={handleRemoveFromFavorites} onRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/product/:id" element={<ProductDetails products={products} onAddToFavorites={handleAddToFavorites} onAddToCart={handleAddToCart} />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
