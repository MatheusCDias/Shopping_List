import { useRef, useState } from "react";
import { v4 } from "uuid";
import {
  AddButton,
  Container,
  InputContainer,
  ProductContainer,
  Product,
} from "./styles";
import 'material-symbols';

// React Hooks
// useRef
// useState / estado -> É uma variável que toda vez que troca de valor, a tela irá "recarregar os valores"

function Home() {
  const [products, setProducts] = useState([]);
  const inputRef = useRef();

  function buttonClick() {
    const inputValue = inputRef.current.value.trim();

    if (inputValue === "") return; // Evita adicionar itens vazios

    setProducts([{ id: v4(), name: inputValue }, ...products]);
    inputRef.current.value = "";
  }


  function deleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      buttonClick();
    }
  }

  return (
    <Container>
      <span>Nova</span>
      <h1>Lista de Compras</h1>
      <InputContainer>
        <input
          placeholder="Insira um produto..."
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <AddButton onClick={buttonClick}>
          <span class="material-symbols-outlined">add</span>
        </AddButton>
      </InputContainer>
      <ProductContainer>
        {products.map((products) => (
          <Product key={products.id}>
            <p>{products.name}</p>
            <button onClick={() => deleteProduct(products.id)}>
              <span class="material-symbols-outlined">delete</span>
            </button>
          </Product>
        ))}
      </ProductContainer>
    </Container>
  );
}

export default Home;