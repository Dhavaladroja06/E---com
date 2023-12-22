import { colors } from "../../constants/colors";

export const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: "10%",
    backgroundColor: colors.primary03,
    padding: "15%",
    borderRadius: 10,
    elevation: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  loginText: {
    textDecorationLine: "underline",
  },
  text: {
    color: colors.primary00,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  errorText: {
    color: colors.accent02,
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    marginRight: 1,
  },
};
