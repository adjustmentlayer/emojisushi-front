import {ProductCard} from "../ProductCard";
import * as S from "./styled";
import {FiltersButton} from "../buttons/FiltersButton";
import {FlexBox} from "../FlexBox";
import {LoadMoreButton} from "../buttons/LoadMoreButton";
import {useBreakpoint} from "../../common/hooks/useBreakpoint";
import { EqualHeight } from 'react-equal-height';
import {FiltersModal} from "../modals/FiltersModal";
import {SortingPopover} from "../popovers/SortingPopover";
import {inject, observer} from "mobx-react";
import {useTranslation, withTranslation} from "react-i18next";

const ProductsGridRaw = (
    {
        title = "Меню",
        items,
        handleLoadMore,
        loading,
        loadable,
        noItemsTitle = "Товары не найдены",
        t
    }
) => {
    const breakpoint = useBreakpoint();
    const ret = useTranslation();
    const translation = ret.t('ua.common.filters');
    console.log(translation);
    console.log(ret);
    return <>
        <S.Header>
            <S.Title>{title}</S.Title>
            {breakpoint === 'pc' && (
                <FlexBox >
                    <FiltersModal>
                        <FiltersButton text={t('common.filters')}/>
                    </FiltersModal>
                    <div style={{marginLeft: "67px"}}>
                        <SortingPopover/>
                    </div>
                </FlexBox>
            )}
        </S.Header>
        <EqualHeight updateOnChange={breakpoint}>
            {items.length !== 0 ? (
                <S.Grid>
                    {items.map((product) => {
                        return <ProductCard key={product.id} product={product}/>
                    })}
                </S.Grid>
            ): (noItemsTitle )}
        </EqualHeight>
        {loadable && (
            <S.Footer>
                <LoadMoreButton loading={loading} style={{cursor: 'pointer'}} text={"Показать еще..."} onClick={handleLoadMore}/>
            </S.Footer>
        )}
    </>
}

export const ProductsGrid = withTranslation()(inject('AppStore')(observer(ProductsGridRaw)));