import styled from 'styled-components'
import { CustomButtonContainer } from '../custom-button/custom-button.styles'

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        .image {
            opacity: 0.8;
        }
        button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const CustomButtonWrapper = styled(CustomButtonContainer)`
    width: 80%;
    opacity: 0.7;
    top: 255px;
    position: absolute;
    display: none;
`

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const NameContainer = styled.span`
    width: 90vw;
    margin-bottom: 15px;
`

export const PriceContainer = styled.span`
    width: 10vw;
    text-align: right
`