import React from 'react'
import {Image, Text, View} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({album}) => {
	const {title, artist, thumbnail_image} = album
	const {
		headerContentStyle,
		headerTextStyle,
		thumbnailContainerStyle,
		thumbnailStyle
	} = styles
  return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image
						style={thumbnailStyle}
						source={{uri: thumbnail_image}}
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>			
		</Card>
	)
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	}
}

export default AlbumDetail