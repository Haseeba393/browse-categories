import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { T_Treeview } from "./treeview.types";
import { T_Brand, T_Category, T_Model, T_Variant } from "../../types";
import { styles } from "./treeview.styles";
import CheckBox from "expo-checkbox";

const Treeview: React.FC<T_Treeview> = ({ categories }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpansion = (itemId: string) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const isItemExpanded = (itemId: string) => {
    return expandedItems.includes(itemId);
  };

  const toggleProductSelection = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const renderChip = (selectedItem: any, index: number) => {
    return (
      <View style={styles.chip} key={index.toString()}>
        <Text style={styles.chipText}>{selectedItem.name}</Text>
      </View>
    );
  };

  const renderVariant = (variant: T_Variant) => {
    return (
      <TouchableOpacity
        style={styles.ml_32}
        onPress={() => toggleExpansion(variant.id)}
      >
        <View style={styles.itemRow}>
          {renderCheckbox(variant.id)}
          <Text style={styles.itemTitle}>{variant.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderModel = (model: T_Model) => {
    return (
      <TouchableOpacity
        style={styles.ml_32}
        onPress={() => toggleExpansion(model.id)}
      >
        <View style={styles.itemRow}>
          {renderCheckbox(model.id)}
          <Text style={styles.itemTitle}>{model.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCheckbox = (itemId: string) => {
    return (
      <CheckBox
        value={selectedProducts.includes(itemId)}
        onValueChange={() => {
          toggleProductSelection(itemId);
        }}
      />
    );
  };

  const renderBrand = (brand: T_Brand) => {
    return (
      <TouchableOpacity
        style={styles.ml_32}
        onPress={() => toggleExpansion(brand.id)}
      >
        <View style={styles.itemRow}>
          {renderCheckbox(brand.id)}
          <Text style={styles.itemTitle}>{brand.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategory = (category: T_Category) => {
    const isExpanded = isItemExpanded(category.id);
    return (
      <View style={styles.rowGap12}>
        <TouchableOpacity onPress={() => toggleExpansion(category.id)}>
          <View style={styles.itemRow}>
            {renderCheckbox(category.id)}
            <Text style={styles.itemTitle}>{category.name}</Text>
          </View>
        </TouchableOpacity>
        {isExpanded &&
          category.brands.map((brand) => (
            <View key={brand.id} style={styles.rowGap12}>
              {renderBrand(brand)}
              {isItemExpanded(brand.id) &&
                brand.models.map((model) => (
                  <View key={model.id} style={[styles.ml_32, styles.rowGap12]}>
                    {renderModel(model)}
                    {isItemExpanded(model.id) &&
                      model.variants.map((variant) => (
                        <View
                          key={variant.id}
                          style={[styles.ml_32, styles.rowGap12]}
                        >
                          {renderVariant(variant)}
                          {/* {isItemExpanded(variant.id) &&
                            variant.products.map((product) => (
                              <View
                                key={product.id}
                                style={[styles.ml_32, styles.rowGap12]}
                              >
                                {renderProduct(product)}
                              </View>
                            ))} */}
                        </View>
                      ))}
                  </View>
                ))}
            </View>
          ))}
      </View>
    );
  };

  const findItemById = (data: T_Category[], id: string) => {
    for (const item of data) {
      if (item.id === id) {
        return item;
      }
      if (item.brands) {
        const brand = item.brands.find((brand) => brand.id === id);
        if (brand) {
          return brand;
        }
        for (const brand of item.brands) {
          if (brand.models) {
            const model = brand.models.find((model) => model.id === id);
            if (model) {
              return model;
            }
            for (const model of brand.models) {
              if (model.variants) {
                const variant = model.variants.find(
                  (variant) => variant.id === id
                );
                if (variant) {
                  return variant;
                }
              }
            }
          }
        }
      }
    }
    return undefined;
  };

  return (
    <View>
      <View style={styles.chipContainer}>
        {selectedProducts.map((selectedItemId, index) => {
          const seletedItem = findItemById(categories, selectedItemId);
          return seletedItem ? renderChip(seletedItem, index) : null;
        })}
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => renderCategory(item)}
        contentContainerStyle={styles.rowGap12}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Treeview;
