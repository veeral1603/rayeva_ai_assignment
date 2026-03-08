# Rayeva AI Assignment

## Module 1 - AI Auto-Category & Tag Generator

This module automatically classifies a product and generates structured metadata using AI.
Given a product title and description, the system calls the Gemini API to determine the most relevant product category, sub-category, SEO tags, and sustainability filters.

The AI response is parsed into structured JSON and stored in the database along with the original prompt and response logs. This helps reduce manual catalog work and improves searchability for sustainable commerce platforms.

### Prompt

```
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
    Choose ONE primary category from the above list only, and "Other" if none fit.
    Suggest one relevant sub-category that best fits the product.
    Generate 5-10 valid SEO Tags.
    Filters must be from the above list.
    Output must be Valid raw JSON no escape characters and no markdown.
```
