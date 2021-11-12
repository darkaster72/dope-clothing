import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollections, selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import './collection-overview.styles.scss'

const CollectionOverview = ({ collections }) => collections
    .map(({ id, ...otherProps }) =>
        <CollectionPreview key={id} {...otherProps} />);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);