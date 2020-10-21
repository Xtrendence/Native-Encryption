import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#282837',
		alignItems:'center',
		justifyContent:'center',
	},
	bannerView: {
		width:'100%',
		position:'absolute',
		top:40,
		left:0,
	},
	bannerText: {
		textAlign:'center',
		fontSize:20,
		fontWeight:'bold',
		color:'#ffffff',
	},
	navigationButton: {
		backgroundColor:'#3c3c50',
		padding:10,
		width:120,
		borderRadius:20
	},
	navigationText: {
		fontSize:20,
		fontWeight:'bold',
		color:'#ffffff',
		textAlign:'center'
	},
	sourceButton: {
		position:'absolute',
		bottom:10,
		right:10
	},
	sourceImage: {
		width:72,
		height:72,
	},
	backButton: {
		position:'absolute',
		bottom:10,
		left:10
	},
	backImage: {
		width:72,
		height:72,
	},
	textInput: {
		backgroundColor:'#3c3c50',
		padding:10,
		width:220,
		borderRadius:20,
		color:'#ffffff',
		fontSize:16,
		marginBottom:20
	},
	textOutput: {
		backgroundColor:'#3c3c50',
		padding:10,
		width:300,
		borderRadius:20,
		color:'#ffffff',
		fontSize:14,
		maxHeight:100
	},
	actionButton: {
		backgroundColor:'#3c3c50',
		padding:10,
		width:120,
		borderRadius:20,
		marginBottom:20
	},
	actionText: {
		fontSize:20,
		fontWeight:'bold',
		color:'#ffffff',
		textAlign:'center'
	}
});