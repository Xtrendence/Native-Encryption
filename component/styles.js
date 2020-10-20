import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#282837',
		alignItems:'center',
		justifyContent:'center',
	},
	bannerView: {
		width:'100%',
		position:'absolute',
		top:50,
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
	}
});

export { styles };