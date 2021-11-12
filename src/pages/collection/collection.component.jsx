import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import './collection.styles.scss'

const CollectionPage = ({ collection: { title, items } }) => (
    <div className="collection-page">
        <h1 className="title">{title}</h1>
        <div className="items">
            {
                items.map((item) =>
                    <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);