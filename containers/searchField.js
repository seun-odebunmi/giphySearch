import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { inputChange, fetchGif } from '../actions'
import Component from 'components/searchField'

const mapStateToProps = state => state.searchField

const mapDispatchToProps = dispatch =>
  bindActionCreators({ inputChange, fetchGif }, dispatch)

const SearchFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default SearchFieldContainer
