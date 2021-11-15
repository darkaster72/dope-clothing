import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import './collection.styles.scss';

const CollectionPage = () => {
    const { collectionId } = useParams()
    const collection = useSelector(selectCollection(collectionId))
    const { title, items } = collection

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