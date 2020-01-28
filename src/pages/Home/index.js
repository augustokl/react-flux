import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-solar-drive-boost-19-masculino/72/NQQ-1406-172/NQQ-1406-172_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-solar-drive-boost-19-masculino/72/NQQ-1406-172/NQQ-1406-172_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-solar-drive-boost-19-masculino/72/NQQ-1406-172/NQQ-1406-172_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-solar-drive-boost-19-masculino/72/NQQ-1406-172/NQQ-1406-172_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
