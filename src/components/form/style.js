import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        padding: 10,
        marginTop: 30,
    },
    formLabel: {
        fontSize: 18,
        paddingLeft: 20,
        color: "#ff0043",
    },
    input: {
        width: "90%",
        height: 40,
        borderColor: "#000",
        borderRadius: 50,
        borderWidth: 1,
        margin: 12,
        paddingLeft: 10,
    },
});

export default styles;