import { colors } from "../../constants/colors";

export const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    width: "100%",
  },
  searchFilterRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
  },
  searchInput: {
    flex: 1,
    width: "100%",
    padding: 15,
    fontSize: 18,
    marginBottom: 10,
    borderColor: colors.primary00,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: colors.accent00,
  },
  categoryDropdown: {
    width: 140,
    backgroundColor: colors.accent00,
    marginBottom: 10,
    marginLeft: 10,
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
  addToCartButton: {
    backgroundColor: colors.accent03,
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: "100%",
  },
  removeFromCartButton: {
    backgroundColor: colors.accent02,
  },
  addToCartButtonText: {
    color: colors.accent00,
    fontWeight: "bold",
    alignSelf: "center",
  },
};
