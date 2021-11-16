import { useContext } from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import CollectionContext from '../../context/shop/collections.context';
import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    const collections = useContext(CollectionContext)
    const { title, items } = collections[match.params.collectionId]

    return (
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item) => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    );
}

export default CollectionPage;