import {connect} from 'react-redux';
import Component from 'components/app';

const mapStateToProps = state => state

const AppContainer = connect(mapStateToProps)(Component)
export default AppContainer;
