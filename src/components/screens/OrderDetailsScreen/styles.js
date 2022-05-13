import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 80,
    left: 10,
    zIndex:1,
    // backgroundColor:'black'
  },
  image: {
    marginTop:50,
    width:440,
    height:250,
    // marginBottom:5
    // aspectRatio: 3/ 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    paddingLeft:'32%',
    marginVertical: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    paddingLeft:'45%',
    letterSpacing: 0.7,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
    paddingLeft:'32%'
  },
  container: {
    margin: 10,
  },
});
