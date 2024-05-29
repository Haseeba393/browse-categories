import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 12,
    gap: 8,
  },
  chip: {
    backgroundColor: "#e0e0e0",
    borderRadius: 100,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  chipText: {
    fontSize: 12,
    color: "#000",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
  },
  ml_32: {
    marginLeft: 32,
  },
  rowGap12: {
    rowGap: 12,
  },
});
