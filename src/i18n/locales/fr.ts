import type { SharedVocabType, VocabType } from '##/types/hell/i18n';

const SHARED: SharedVocabType = {
  'pages-titles': {
    homepage: "Page d'accueil",
    'category-one': 'Catégorie (1)',
    'subcategory-one': 'Sous-catégorie (1)',
    'subcategory-two': 'Sous-catégorie (2)',

    'category-two': 'Catégorie (2)',
    'subcategory-three': 'Sous-catégorie (3)',
    'subcategory-four': 'Sous-catégorie (4)'
  },
  vocab: {
    page: 'page',
    breadcrumbs: "Fil d'ariane",
    'brand-short': 'PoC'
  }
};

export default {
  'pages-titles': { ...SHARED['pages-titles'] },

  _infos: { lng: 'fr' },

  themes: {
    'enable-light-theme': 'Activer le thème clair',
    'enable-dark-theme': 'Activer le thème sombre'
  },

  'blog-categories': {
    'category-one': {
      _title: SHARED['pages-titles']['category-one'],
      '_meta-description': 'Metadescription Catégorie (1)',

      'subcategory-one': {
        title: SHARED['pages-titles']['subcategory-one'],
        'meta-description': 'Metadescription Catégorie (1) -> Sous-catégorie (1)'
      },
      'subcategory-two': {
        title: SHARED['pages-titles']['subcategory-two'],
        'meta-description': 'Metadescription Catégorie (1) -> Sous-catégorie (2)'
      }
    },

    'category-two': {
      _title: SHARED['pages-titles']['category-two'],
      '_meta-description': 'Metadescription Catégorie (2)',

      'subcategory-three': {
        title: SHARED['pages-titles']['subcategory-three'],
        'meta-description': 'Metadescription Catégorie (2) -> Sous-catégorie (3)'
      },
      'subcategory-four': {
        title: SHARED['pages-titles']['subcategory-four'],
        'meta-description': 'Metadescription Catégorie (2) -> Sous-catégorie (4)'
      }
    }
  },

  vocab: {
    ...SHARED.vocab,
    'no-blog-post': 'Rien à afficher ici !',
    '404': '404 - Page introuvable !',
    'see-more': 'Voir plus !',
    loading: 'Chargement en cours...',
    prev: 'Précédent',
    next: 'Suivant'
  },

  manualSEO: {
    homepage: {
      'meta-description': `Metadescription ${SHARED['pages-titles'].homepage.toLowerCase()}`
    }
  }
} as const satisfies VocabType;
