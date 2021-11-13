import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionIsFetching } from "../../redux/shop/shop.selector";
import CollectionOverview from "./collection-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionIsFetching
})

export default compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);
