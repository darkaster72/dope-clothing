import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from '../../pages/collection/collection.container';
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {

    componentDidMount() {
        this.props.fetchCollections()
    }

    render() {
        const { match } = this.props;
        return (<div className="shop">
            <Route exact path={`${match.path}`}
                component={CollectionOverviewContainer} />
            <Route exact path={`${match.path}/:collectionId`}
                component={CollectionPageContainer} />
        </div>);
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);