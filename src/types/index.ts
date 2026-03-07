export type categoryAndTagsResponse = {
  primary_category: string;
  sub_category: string;
  seo_tags: string[];
  sustainability_filters: string[];
};

export type ProductType = {
  title: string;
  description: string;
} & categoryAndTagsResponse;
