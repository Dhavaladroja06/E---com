import { colors } from "../../constants/colors";

export const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  productContainer: {
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: colors.accent00,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
    marginTop: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 25,
    color: colors.accent03,
    borderRadius: 5,
    margin: 5,
  },
  removeButton: {
    backgroundColor: colors.accent02,
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: "100%",
  },
  removeButtonText: {
    color: colors.accent00,
    fontWeight: "bold",
    alignSelf: "center",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "600",
    padding: 10,
    color: colors.accent01,
    backgroundColor: colors.primary01,
    borderRadius: 8,
    width: "100%",
    textAlign: "center",
  },
};
