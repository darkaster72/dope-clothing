import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectCollectionIsLoaded } from "../../redux/shop/shop.selector";
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => ! selectCollectionIsLoaded(state)
})

export default compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)