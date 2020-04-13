import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setPageSize, setSortProperty} from '../data/ActionCreators';


const mapStateToProps = datastore => datastore;
const mapDispatchToProps = {setPageSize, setSortProperty};


const mergeProps = (datastore, actionCreators, router) => ({
    ...datastore, ...router, ...actionCreators, currentPage: Number(router.match.params.page),
    pageCount: Math.ceil((datastore.products_total | datastore.pageSize || 5)/(datastore.pageSize||5)),
    navigateToPage: (page) => router.history.push(`/shop/products/${router.match.params.category}/${page}`),
})



export const ProductPageConnector = (PageComponent) => withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent))