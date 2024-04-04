import './styles.css'
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';
import * as productService from '../../../services/product-service';

export default function Catalog() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [productName, setProductname] = useState("");

    useEffect(() => {
        productService.findPageRequest(0, productName)
            .then(response => {
                setProducts(response.data.content);      
            });
    }, [productName]);

    function handleSearch(seachText: string) {
        setProductname(seachText)
    }

    return (
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar onSearch={handleSearch} />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        {
                            products.map(
                                product => <CatalogCard key={product.id} product={product} />
                                )
                        }
                    </div>

                    <ButtonNextPage text='Carregar mais'/>
                </section>
            </main>
    );
}