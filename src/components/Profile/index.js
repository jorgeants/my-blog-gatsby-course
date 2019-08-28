import React from "React"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
	const {
		site: {
			siteMetadata: { title, position, description }
		}
	} = useStaticQuery(graphql`
		query MySiteMetada {
			site {
				siteMetadata {
					position
					description
					title
				}
			}
		}
	`)

	return (
		<S.ProfileWrapper>
			<S.ProfileLink>
				<Avatar />
				<S.ProfileAuthor>
					{title}
					<S.ProfilePosition><h2>{position}</h2></S.ProfilePosition>
				</S.ProfileAuthor>
			</S.ProfileLink>
			<S.ProfileDescription>
				{description}
			</S.ProfileDescription>
		</S.ProfileWrapper>
	)
}

export default Profile
