export type categoryAndTagsResponse = {
  primary_category: string;
  sub_category: string;
  seo_tags: string[];
  sustainability_filters: string[];
};

export type ProductType = {
  id?: string;
  title: string;
  description: string;
  primaryCategory: string;
  subCategory: string;
  seoTags: string[];
  sustainabilityFilters: string[];
  createdAt?: Date;
};

export type AiLogType = {
  id?: string;
  prompt: string;
  response: string;

  module: "CATEGORY_AND_TAG_GENERATION";

  productId: string;
  product?: ProductType;

  createdAt: Date;
};
