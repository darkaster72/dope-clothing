import { collection, onSnapshot } from "@firebase/firestore";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { convertCollectionSnapToMap, db } from "../../firebase/firebase.utils";
import { addShopData } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props;
        const collRef = collection(db, 'collections')
        onSnapshot(collRef, (snap) => {
            const cols = convertCollectionSnapToMap(snap)
            dispatch(addShopData(cols));
            console.log(cols)
        })
    }

    render() {
        const { match } = this.props;
        return (<div className="shop">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>);
    }

}

export default connect(null)(ShopPage);