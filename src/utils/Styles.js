import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    }, icon: {
        color: "#fff",
        fontSize: 20
    },
    headerText: {
        color: "#fff",
        fontSize: 14
    },
    logo: {
        alignSelf: 'center', flex: 1
    },
    headerContainer: {
        backgroundColor: '#FF4F00',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    footerContainer: {
        backgroundColor: "#fff",
        height: 56,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 10
    },
    subText: {
        fontSize: 8
    },
    fabContainer: {
        borderColor: "#fff",
        borderWidth: 1,
        height: 56,
        width: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 80,
        elevation:10,
        right: 16,
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor: "#FF5E3A"
    },
    btnText: {
        fontSize: 16,
        color: "#fff",
    }
})