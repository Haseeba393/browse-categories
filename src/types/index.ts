export type T_Variant = {
  id: string;
  name: string;
};

export type T_Model = {
  id: string;
  name: string;
  variants: T_Variant[];
};

export type T_Brand = {
  id: string;
  name: string;
  models: T_Model[];
};

export type T_Category = {
  id: string;
  name: string;
  brands: T_Brand[];
};
