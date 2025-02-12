import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const style = StyleSheet.create({
  title: {
    fontSize: 22,
    color: Colors.primary.dark,
    fontWeight: "500",
    marginLeft: 20,
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  itemTouchable: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    maxWidth: "90%",
    flexShrink: 1,
    alignSelf: "flex-start",
    color: Colors.primary.title,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro semi-transparente
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
});
