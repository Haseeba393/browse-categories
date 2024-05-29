import { View, Text } from "react-native";
import React from "react";
import { T_BrowseCategories } from "./browse.categories.types";
import { styles } from "./browse.categories.styles";
import { Treeview } from "../../components";
import { data } from "../../config/data";

const BrowseCategories: React.FC<T_BrowseCategories> = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Browse Categories</Text>
      <Treeview categories={data} />
    </View>
  );
};

export default BrowseCategories;
