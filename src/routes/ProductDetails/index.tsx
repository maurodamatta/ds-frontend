import './styles.css'
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from '../../models/product';

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

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard product={product} />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>
                </section>
            </main>
        </>
    );
}