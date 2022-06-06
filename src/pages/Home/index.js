import {Layout} from "../../layout/Layout";
import {ProductsGrid} from "../../components/ProductsGrid";
import {inject, observer} from "mobx-react";
import {useEffect} from "react";

export const HomeRaw = (
    {
        ProductsStore
    }
) => {
    useEffect(() => {
        ProductsStore.fetchItems({
            offset: 0,
            limit: 25
        });
    }, [])
    return (
        <Layout withBanner={true}>
            <ProductsGrid/>
        </Layout>
    );
}

export const Home = inject('ProductsStore')(observer(HomeRaw))