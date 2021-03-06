import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => collections
    .map(({ id, ...otherProps }) =>
        <CollectionPreview key={id} {...otherProps} />);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);