// Configure the base path and map the different node packages.
System.config({
  baseURL: '/base',
  paths: {'node:*': 'node_modules/*'},
  map: {
    'rxjs': 'node:rxjs',
    'tslib': 'node:tslib/tslib.js',
    'moment': 'node:moment/min/moment-with-locales.min.js',

    // Angular specific mappings.
    '@angular/core': 'node:@angular/core/bundles/core.umd.js',
    '@angular/core/testing': 'node:@angular/core/bundles/core-testing.umd.min.js',
    '@angular/common': 'node:@angular/common/bundles/common.umd.min.js',
    '@angular/common/testing': 'node:@angular/common/bundles/common-testing.umd.min.js',
    '@angular/common/http': 'node:@angular/common/bundles/common-http.umd.min.js',
    '@angular/common/http/testing': 'node:@angular/common/bundles/common-http-testing.umd.min.js',
    '@angular/compiler': 'node:@angular/compiler/bundles/compiler.umd.min.js',
    '@angular/compiler/testing': 'node:@angular/compiler/bundles/compiler-testing.umd.min.js',
    '@angular/forms': 'node:@angular/forms/bundles/forms.umd.min.js',
    '@angular/forms/testing': 'node:@angular/forms/bundles/forms-testing.umd.min.js',
    '@angular/animations': 'node:@angular/animations/bundles/animations.umd.min.js',
    '@angular/animations/browser': 'node:@angular/animations/bundles/animations-browser.umd.min.js',
    '@angular/platform-browser/animations':
        'node:@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',
    '@angular/platform-browser':
        'node:@angular/platform-browser/bundles/platform-browser.umd.min.js',
    '@angular/platform-browser/testing':
        'node:@angular/platform-browser/bundles/platform-browser-testing.umd.min.js',
    '@angular/platform-browser-dynamic':
        'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
    '@angular/platform-browser-dynamic/testing':
        'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.min.js',

    // Path mappings for local packages that can be imported inside of tests.
    '@material': 'dist/packages/material/index.js',
    '@material-experimental': 'dist/packages/material-experimental/index.js',
    '@cdk-experimental': 'dist/packages/cdk-experimental/index.js',

    '@cdk': 'dist/packages/cdk/index.js',
    '@cdk/a11y': 'dist/packages/cdk/a11y/index.js',
    '@cdk/accordion': 'dist/packages/cdk/accordion/index.js',
    '@cdk/bidi': 'dist/packages/cdk/bidi/index.js',
    '@cdk/coercion': 'dist/packages/cdk/coercion/index.js',
    '@cdk/collections': 'dist/packages/cdk/collections/index.js',
    '@cdk/drag-drop': 'dist/packages/cdk/drag-drop/index.js',
    '@cdk/keycodes': 'dist/packages/cdk/keycodes/index.js',
    '@cdk/layout': 'dist/packages/cdk/layout/index.js',
    '@cdk/observers': 'dist/packages/cdk/observers/index.js',
    '@cdk/overlay': 'dist/packages/cdk/overlay/index.js',
    '@cdk/platform': 'dist/packages/cdk/platform/index.js',
    '@cdk/portal': 'dist/packages/cdk/portal/index.js',
    '@cdk/scrolling': 'dist/packages/cdk/scrolling/index.js',
    '@cdk/stepper': 'dist/packages/cdk/stepper/index.js',
    '@cdk/table': 'dist/packages/cdk/table/index.js',
    '@cdk/testing': 'dist/packages/cdk/testing/index.js',
    '@cdk/text-field': 'dist/packages/cdk/text-field/index.js',
    '@cdk/tree': 'dist/packages/cdk/tree/index.js',

    '@cdk-experimental/scrolling': 'dist/packages/cdk-experimental/scrolling/index.js',
    '@cdk-experimental/dialog': 'dist/packages/cdk-experimental/dialog/index.js',

    '@material/autocomplete': 'dist/packages/material/autocomplete/index.js',
    '@material/badge': 'dist/packages/material/badge/index.js',
    '@material/bottom-sheet': 'dist/packages/material/bottom-sheet/index.js',
    '@material/button': 'dist/packages/material/button/index.js',
    '@material/button-toggle': 'dist/packages/material/button-toggle/index.js',
    '@material/card': 'dist/packages/material/card/index.js',
    '@material/checkbox': 'dist/packages/material/checkbox/index.js',
    '@material/chips': 'dist/packages/material/chips/index.js',
    '@material/core': 'dist/packages/material/core/index.js',
    '@material/datepicker': 'dist/packages/material/datepicker/index.js',
    '@material/dialog': 'dist/packages/material/dialog/index.js',
    '@material/divider': 'dist/packages/material/divider/index.js',
    '@material/expansion': 'dist/packages/material/expansion/index.js',
    '@material/form-field': 'dist/packages/material/form-field/index.js',
    '@material/grid-list': 'dist/packages/material/grid-list/index.js',
    '@material/icon': 'dist/packages/material/icon/index.js',
    '@material/input': 'dist/packages/material/input/index.js',
    '@material/list': 'dist/packages/material/list/index.js',
    '@material/menu': 'dist/packages/material/menu/index.js',
    '@material/paginator': 'dist/packages/material/paginator/index.js',
    '@material/progress-bar': 'dist/packages/material/progress-bar/index.js',
    '@material/progress-spinner': 'dist/packages/material/progress-spinner/index.js',
    '@material/radio': 'dist/packages/material/radio/index.js',
    '@material/select': 'dist/packages/material/select/index.js',
    '@material/sidenav': 'dist/packages/material/sidenav/index.js',
    '@material/slide-toggle': 'dist/packages/material/slide-toggle/index.js',
    '@material/slider': 'dist/packages/material/slider/index.js',
    '@material/snack-bar': 'dist/packages/material/snack-bar/index.js',
    '@material/sort': 'dist/packages/material/sort/index.js',
    '@material/stepper': 'dist/packages/material/stepper/index.js',
    '@material/table': 'dist/packages/material/table/index.js',
    '@material/tabs': 'dist/packages/material/tabs/index.js',
    '@material/testing': 'dist/packages/material/testing/index.js',
    '@material/toolbar': 'dist/packages/material/toolbar/index.js',
    '@material/tooltip': 'dist/packages/material/tooltip/index.js',
    '@material/tree': 'dist/packages/material/tree/index.js',
  },
  packages: {
    // Thirdparty barrels.
    'rxjs': {main: 'index'},
    'rxjs/operators': {main: 'index'},

    // Set the default extension for the root package, because otherwise the tests can't
    // be built within the production mode. Due to missing file extensions.
    '.': {defaultExtension: 'js'}
  }
});
