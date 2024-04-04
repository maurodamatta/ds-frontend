import './styles.css'
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "Está TV é muito bonita",
    imgUrl: "https://a-static.mlcdn.com.br/450x450/smart-tv-50-hq-4k-conversor-digital-externo-3-hdmi-2-usb-wi-fi-android-11-e-design-slim/comprebel2/33154/ee572ff89335894edcc1b71aad551b12.jpeg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Importados"
        }
    ]
}

export default function Catalog() {
    return (
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                    </div>

                    <ButtonNextPage text='Carregar mais'/>
                </section>
            </main>
    );
}