import React from "react"
import PropTypes from "prop-types"
import Siderbar from "../Siderbar";

import GlobalStyles from '../../styles/global'
import * as S from './styled'

const Layout = ({ children }) => {
	return (
		<S.LayoutWrapper>
			<GlobalStyles />
			<Siderbar />
			<S.LayoutMain>{children}</S.LayoutMain>
		</S.LayoutWrapper>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
