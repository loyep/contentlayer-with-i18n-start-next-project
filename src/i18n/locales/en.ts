import type { SharedVocabType, VocabType } from '##/types/hell/i18n';

const SHARED: SharedVocabType = {
  'pages-titles': {
    homepage: 'Homepage',
    'category-one': 'Category (1)',
    'subcategory-one': 'Subcategory (1)',
    'subcategory-two': 'Subcategory (2)',

    'category-two': 'Category (2)',
    'subcategory-three': 'Subcategory (3)',
    'subcategory-four': 'Subcategory (4)'
  },
  vocab: {
    page: 'page',
    breadcrumbs: 'Breadcrumbs',
    'brand-short': 'PoC'
  }
};

export default {
  'pages-titles': { ...SHARED['pages-titles'] },

  _infos: { lng: 'en' },

  'blog-categories': {
    'category-one': {
      _title: SHARED['pages-titles']['category-one'],
      '_meta-description': 'Metadescription Category (1)',

      'subcategory-one': {
        title: SHARED['pages-titles']['subcategory-one'],
        'meta-description': 'Metadescription Category (1) -> Subcategory (1)'
      },
      'subcategory-two': {
        title: SHARED['pages-titles']['subcategory-two'],
        'meta-description': 'Metadescription Category (1) -> Subcategory (2)'
      }
    },

    'category-two': {
      _title: SHARED['pages-titles']['category-two'],
      '_meta-description': 'Metadescription Category (2)',

      'subcategory-three': {
        title: SHARED['pages-titles']['subcategory-three'],
        'meta-description': 'Metadescription Category (2) -> Subcategory (3)'
      },
      'subcategory-four': {
        title: SHARED['pages-titles']['subcategory-four'],
        'meta-description': 'Metadescription Category (2) -> Subcategory (4)'
      }
    }
  },

  themes: {
    'enable-light-theme': 'Enable light theme',
    'enable-dark-theme': 'Enable dark theme'
  },

  vocab: {
    ...SHARED.vocab,
    'no-blog-post': 'Nobody here but us chickens!',
    '404': '404 - Page not found!',
    'see-more': 'See more!',
    loading: 'Loading...',
    prev: 'Previous',
    next: 'Next'
  },

  manualSEO: {
    homepage: {
      'meta-description': `${SHARED['pages-titles'].homepage} metadescription`
    }
  }
} as const satisfies VocabType;
