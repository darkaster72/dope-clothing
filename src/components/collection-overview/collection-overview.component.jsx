import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collection-overview.styles.scss'
import { selectCollections } from '../../redux/shop/shop.selector'

const CollectionOverview = ({ collections }) => collections
    .map(({ id, ...otherProps }) =>
        <CollectionPreview key={id} {...otherProps} />);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);