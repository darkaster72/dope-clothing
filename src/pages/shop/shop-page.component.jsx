import { Route } from "react-router";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => <div className="shop">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
</div>

export default ShopPage;