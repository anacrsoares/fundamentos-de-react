export default function CriarFormulario() {
  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 4 - Criação de formulário</h1>
        <p>
          Neste exercício você deverá criar um componente de formulário (somente
          o componente, sem implementar qualquer tipo de ação).
        </p>
      </div>

      <div className="solucao">
        <h2>Cadastro de Produtos</h2>
        <form>
          <div className="container_1">
            <label for="productName">Nome do Produto</label>
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Informe o nome do produto"
              required
            />
          </div>

          <div className="container_2">
            <label for="salePrice">Preço de Venda</label>
            <input
              type="number"
              id="salePrice"
              name="salePrice"
              placeholder="Informe o preço de venda"
              step="0.01"
              required
            />
          </div>

          <div className="container_3">
            <label for="costPrice">Preço de Custo</label>
            <input
              type="number"
              id="costPrice"
              name="costPrice"
              placeholder="Informe o preço de custo"
              step="0.01"
              required
            />
          </div>

          <div className="container_4">
            <label for="supplier">Fornecedor</label>
            <select id="supplier" name="supplier" required>
              <option value="" disabled selected>
                Escolha o fornecedor
              </option>
              <option value="fornecedor1">Fornecedor 1</option>
              <option value="fornecedor2">Fornecedor 2</option>
              <option value="fornecedor3">Fornecedor 3</option>
              <option value="fornecedor4">Fornecedor 4</option>
            </select>
          </div>

          <div className="container_5">
            <label for="category">Categoria</label>
            <select id="category" name="category" required>
              <option value="" disabled selected>
                Escolha uma categoria
              </option>
              <option value="eletronicos">Eletrônicos</option>
              <option value="roupas">Roupas</option>
              <option value="alimentos">Alimentos</option>
              <option value="livros">Livros</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div className="container_6">
            <label for="description">Descrição do Produto</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Informe a descrição do produto"
              required
            ></textarea>
          </div>

          <div className="container_7">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
