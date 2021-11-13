import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { CollectionFooterContainer, CollectionItemContainer, CustomButtonWrapper, ImageContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;

    return (
        <CollectionItemContainer>
            <ImageContainer className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer className="price">${price}</PriceContainer>
            </CollectionFooterContainer>
            <CustomButtonWrapper inverted onClick={() => addItem(item)} >Add to cart</CustomButtonWrapper>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);