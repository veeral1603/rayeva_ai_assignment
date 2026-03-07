import {
  PREDEFINED_CATEGORIES,
  PREDEFINED_SUSTAINABILITY_FILTERS,
} from "@/constants/categoriesAndTags";

export function buildCategoryAndTagsPrompt(title: string, description: string) {
  const PROMPT = `
    Your task is to analyze a product's title and description and return structured classification.

    Available Primary Categories: ${PREDEFINED_CATEGORIES.join(", ")}
    
    Available Sustainability Filters: ${PREDEFINED_SUSTAINABILITY_FILTERS.join(", ")}

    return only valid JSON data in the following format:
    {
    "primary_category": "",
    "sub_category": "",
    "seo_tags": [], 
    "sustainability_filters": []
    }

    Product Title: ${title}

    Product Description: ${description}

    Rules:
    Choose ONE primary category from the above list only.
    Generate 5-10 valid SEO Tags.
    Filters must be from the above list.
    Output must be Valid raw JSON no escape characters and no markdown.
    `;

  return PROMPT;
}
