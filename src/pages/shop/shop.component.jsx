import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from '../../pages/collection/collection.container';
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollections, match }) => {
    useEffect(() => fetchCollections(), [fetchCollections])

    return (<div className="shop">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>);

}

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);