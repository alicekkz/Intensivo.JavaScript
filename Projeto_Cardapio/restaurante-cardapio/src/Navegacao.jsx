export function Navegacao() {
    return <div className="navegacao">
        <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked/>
        <label htmlFor="">Pratos Principais</label>
        <input type="radio" name="opcao-pagina" id="pagina-1" />
        <label htmlFor="pagina-1">Sobremesa</label>
        <input type="radio" name="opcao-pagina" id="pagina-2" />
        <label htmlFor="pagina-2">Bebidas</label>
    </div>
}