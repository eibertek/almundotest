import { StyleSheet } from "react-native";

// styles
export default StyleSheet.create({
    container: {
        alignSelf: 'center',
        width:"90%",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        margin:10,
    },
    rowContainer: {
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
    },
    nameText: {
        alignSelf:"flex-start",
        margin:10,
        fontSize:18,
        fontWeight:"200",
    },
    priceText: {
        alignSelf:"flex-end",
        fontSize:12,        
    },
    starsContainer: {
        alignSelf:"flex-end",
    },
    starsText: {
        fontSize:24,    
        alignSelf:"flex-end",
    },
    stars1:{
        color:"#FF0000",
    },
    stars2:{
        color:"#FF4400",
    },
    stars3:{
        color:"#888800",
    },
    stars4:{
        color:"#44FF00",
    },
    stars5:{
        color:"#00FF00",
    },

});