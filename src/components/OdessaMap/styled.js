import styled from "styled-components";
import OdessaMapSrc from "../../assets/img/odessa-map.png";

const Background = styled.div`
    background-image: url(${OdessaMapSrc});
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    overflow: hidden;
    
`;

export {
    Background
}