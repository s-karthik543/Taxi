import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

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
        elevation: 10,
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
    },
    searchBox: {
        top: 0,
        position: "absolute",
        width: width
    },
    inputWrapper: {
        marginLeft: 15,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 0,
        backgroundColor: "#fff",
        opacity: 0.95,
        borderRadius: 7
    },
    secondInputWrapper: {
        marginLeft: 15,
        marginRight: 10,
        marginTop: 0,
        backgroundColor: "#fff",
        opacity: 0.95,
        borderRadius: 7
    },
    inputSearch: {
        fontSize: 14,
        flex: 1
    },
    label: {
        fontSize: 10,
        fontStyle: "italic",
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 0
    },
    searhContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    searchResultsWrapper: {
        top: 160,
        position: "absolute",
        width: width,
        backgroundColor: "#fff",
        opacity: 0.9
    },
    primaryText: {
        fontSize: 16,
        color: "#373737"
    },
    secondaryText: {
        fontStyle: "italic",
        fontSize: 12,
        color: "#7D7D7D",
    },
    searchResultItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#dadada'
    },
    fareContainer: {
        width: width,
        height: 40,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: "grey"
    },
    fareText: {
        fontSize: 12
    },
    amount: {
        fontWeight: "bold",
        fontSize: 12
    },
    findDriverContainer: {
        flex: 1,
        backgroundColor: "#FF5E3A",
        justifyContent: "center",
        alignItems: "center"
    },
    tabText: {
        fontSize: 12
    },
    subTabText: {
        fontSize: 8
    },
    spinner: {
        marginBottom: '5%'
    },
    btn: {
        marginTop: 20
    },
    text: {
        color: "white",
        fontSize: 16,
        marginBottom: 15,
        marginTop: 15
    },
    locationIcon: {
        tintColor: '#fff',
        marginTop: 15
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    pickup: {
        width: width * 0.9,
        borderRadius: 7,
        height: 40,
        backgroundColor: "#fff",
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center"

    },
    toArrow: {
        marginTop: 10,
    },
    dropoff: {
        width: width * 0.9,
        borderRadius: 7,
        height: 40,
        backgroundColor: "#fff",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"

    },
    cancelBtnWrapper: {
        marginTop: 15,
        width: width * 0.9,
        justifyContent: "center",
        alignItems: "center"
    },
    cancelBtn: {
        width: width * 0.9,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "transparent"
    },
    cancelBtnText: {
        color: "#fff",
    },
    termsText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10

    }
})