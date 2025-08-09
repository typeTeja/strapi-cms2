import type { Schema, Struct } from '@strapi/strapi';

export interface ContentDataVizBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_data_viz_blocks';
  info: {
    displayName: 'Data Visualization Block';
  };
  attributes: {
    caption: Schema.Attribute.String;
    chart_data: Schema.Attribute.JSON;
    chart_type: Schema.Attribute.Enumeration<['bar', 'line', 'pie']>;
  };
}

export interface ContentHeading extends Struct.ComponentSchema {
  collectionName: 'components_content_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']>;
    text: Schema.Attribute.String;
  };
}

export interface ContentImageWithCaption extends Struct.ComponentSchema {
  collectionName: 'components_content_image_with_captions';
  info: {
    displayName: 'Image with caption';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ContentMethodologyBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_methodology_blocks';
  info: {
    displayName: 'Methodology Block';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ContentParagraph extends Struct.ComponentSchema {
  collectionName: 'components_content_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface ContentPullquote extends Struct.ComponentSchema {
  collectionName: 'components_content_pullquotes';
  info: {
    displayName: 'Pullquote';
  };
  attributes: {
    attribution: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo';
  info: {
    description: 'SEO metadata';
    displayName: 'SEO';
  };
  attributes: {
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
    og_image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.data-viz-block': ContentDataVizBlock;
      'content.heading': ContentHeading;
      'content.image-with-caption': ContentImageWithCaption;
      'content.methodology-block': ContentMethodologyBlock;
      'content.paragraph': ContentParagraph;
      'content.pullquote': ContentPullquote;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
    }
  }
}
