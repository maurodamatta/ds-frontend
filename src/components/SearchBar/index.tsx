import './styles.css'

export default function SearcBar() {
    return (
        <form className="dsc-search-bar">
            <button type="submit">🔎︎</button>
            <input type="text" placeholder="Nome do produto" />
            <button type="reset">🗙</button>
        </form>
    );
}