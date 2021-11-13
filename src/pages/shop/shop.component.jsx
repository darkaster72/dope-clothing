import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { selectCollectionIsFetching, selectCollectionIsLoaded } from "../../redux/shop/shop.selector";
import CollectionPage from "../collection/collection.component";

const CollectionOverviewWithSpinnser = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        this.props.fetchCollections()
    }

    render() {
        const { match, isCollectionLoaded } = this.props;
        return (<div className="shop">
            <Route exact path={`${match.path}`}
                render={(otherProps) => <CollectionOverviewWithSpinnser isLoading={!isCollectionLoaded} {...otherProps} />} />
            <Route exact path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        </div>);
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectCollectionIsFetching,
    isCollectionLoaded: selectCollectionIsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);