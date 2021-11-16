import { useContext } from 'react';
import CollectionsContext from '../../context/shop/collections.context';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionOverview = () => {
    const collections = useContext(CollectionsContext)

    return Object.values(collections)
        .map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps} />);
};

export default CollectionOverview;