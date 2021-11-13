import { collection, onSnapshot } from "@firebase/firestore";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { convertCollectionSnapToMap, db } from "../../firebase/firebase.utils";
import { addShopData } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.component";

const CollectionOverviewWithSpinnser = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = { loading: true }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { dispatch } = this.props;
        const collRef = collection(db, 'collections')
        this.unsubscribeFromSnapshot = onSnapshot(collRef, (snap) => {
            const cols = convertCollectionSnapToMap(snap)
            dispatch(addShopData(cols));
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (<div className="shop">
            <Route exact path={`${match.path}`}
                render={(otherProps) => <CollectionOverviewWithSpinnser isLoading={loading} {...otherProps} />} />
            <Route exact path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>);
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }
}

export default connect(null)(ShopPage);