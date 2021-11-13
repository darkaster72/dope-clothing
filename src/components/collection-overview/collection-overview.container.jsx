import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionIsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state)
})

export default compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);
