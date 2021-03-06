import {Layout} from "../../layout/Layout";
import {Heading} from "../../components/Heading";
import * as S from "./styled";
import {useEffect} from "react";
import {inject, observer} from "mobx-react";
import {useTranslation} from "react-i18next";

export const DeliveryRaw = (
    {
        AppStore,
        SpotsStore
    }
) => {

    useEffect(() => {
        AppStore.setLoading(false);
    }, [])

    const {t} = useTranslation();


    return (
        <Layout withBanner={false}
                withSidebar={false}
        >
            <S.FlexContainer>
                <S.Left>
                    <S.HeadingWrapper>
                        <Heading style={
                            {
                                fontWeight: "600"
                            }
                        }>
                            Доставка и оплата
                        </Heading>
                    </S.HeadingWrapper>


                    <S.AdresText>
                        <b>{t('common.address')}</b>: {SpotsStore.getAddress}
                    </S.AdresText>

                    <S.DeliveryText>
                        {SpotsStore.selectedIndex === 0 && (
                            <ol style={{paddingLeft: 0, listStyleType: 'disc'}}>
                                <li style={{marginTop: "16px"}}>Ми здійснюємо доставку по місту Чорноморськ та прилеглі населені пункти (Олександрівка, Молодіжне, Великодолинське)</li>
                                <li style={{marginTop: "16px"}}>Прийом замовлень на доставку здійснюється з {AppStore.formatWorkingHours()} щоденно</li>
                                <li style={{marginTop: "16px"}}>При замовленні від 250 грн. доставка безкоштовна</li>
                                <li style={{marginTop: "16px"}}>Вартість доставки на суму до 250 грн. складає 25 грн</li>
                            </ol>
                        )}
                    </S.DeliveryText>
                </S.Left>

                {SpotsStore.selectedIndex === 1 && (
                <S.Right>
                    <iframe src="https://www.google.com/maps/d/embed?mid=15tq0LKbuZUtWZW5Wy8XurmS3qIE3AU4W" width="100%" height="480"></iframe>
                </S.Right>
                    )}
            </S.FlexContainer>


        </Layout>
    )
}

export const Delivery = inject('AppStore', 'SpotsStore')(observer(DeliveryRaw));