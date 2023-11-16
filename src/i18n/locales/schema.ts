import type { TypedLeafsJSONData } from '##/types/hell/etc/JSON';

const STATICLY_CHECKED_DATA = {
  'blog-categories': {
    'category-one': {
      _title: '__SCANNED_ON_BUILD_FIELD__',
      '_meta-description': '__SCANNED_ON_BUILD_FIELD__',

      'subcategory-one': {
        title: '__SCANNED_ON_BUILD_FIELD__',
        'meta-description': '__SCANNED_ON_BUILD_FIELD__'
      },
      'subcategory-two': {
        title: '__SCANNED_ON_BUILD_FIELD__',
        'meta-description': '__SCANNED_ON_BUILD_FIELD__'
      }
    },
    'category-two': {
      _title: '__SCANNED_ON_BUILD_FIELD__',
      '_meta-description': '__SCANNED_ON_BUILD_FIELD__',

      'subcategory-three': {
        title: '__SCANNED_ON_BUILD_FIELD__',
        'meta-description': '__SCANNED_ON_BUILD_FIELD__'
      },
      'subcategory-four': {
        title: '__SCANNED_ON_BUILD_FIELD__',
        'meta-description': '__SCANNED_ON_BUILD_FIELD__'
      }
    }
  }
} as const satisfies TypedLeafsJSONData<Scanned>;

const _: NotScanned = '';

export const SHARED_VOCAB_SCHEMA = {
  'pages-titles': {
    homepage: _,
    'category-one': _,
    'subcategory-one': _,
    'subcategory-two': _,

    'category-two': _,
    'subcategory-three': _,
    'subcategory-four': _
  },

  vocab: {
    page: _,
    breadcrumbs: _,
    'brand-short': _
  }
} as const satisfies TypedLeafsJSONData<NotScanned>;

export default {
  'blog-categories': STATICLY_CHECKED_DATA['blog-categories'],
  'pages-titles': { ...SHARED_VOCAB_SCHEMA['pages-titles'] },

  _infos: {
    lng: '__SCANNED_ON_BUILD_FIELD__'
  },

  themes: {
    'enable-light-theme': _,
    'enable-dark-theme': _
  },

  vocab: {
    ...SHARED_VOCAB_SCHEMA.vocab,
    'no-blog-post': _,
    '404': _,
    'see-more': _,
    loading: _,
    prev: _,
    next: _
  },

  manualSEO: {
    homepage: {
      'meta-description': _
    }
  }
} as const satisfies TypedLeafsJSONData<MaybeScanned>;

type NotScanned = '';
type Scanned = '__SCANNED_ON_BUILD_FIELD__';
type MaybeScanned = NotScanned | Scanned;
