/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Type declaration for ambient System. */
declare const System: any;

// Configure the base path and map the different node packages.
System.config({
  paths: {'node:*': 'node_modules/*'},
  map: {
    'main': 'main.js',
    'tslib': 'node:tslib/tslib.js',
    'moment': 'node:moment/min/moment-with-locales.min.js',

    'rxjs': 'node_modules/rxjs/bundles/rxjs.umd.min.js',
    'rxjs/operators': 'system-rxjs-operators.js',

    // Angular specific mappings.
    '@angular/core': 'node:@angular/core/bundles/core.umd.js',
    '@angular/common': 'node:@angular/common/bundles/common.umd.js',
    '@angular/common/http': 'node:@angular/common/bundles/common-http.umd.js',
    '@angular/compiler': 'node:@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'node:@angular/forms/bundles/forms.umd.js',
    '@angular/animations': 'node:@angular/animations/bundles/animations.umd.js',
    '@angular/elements': 'node:@angular/elements/bundles/elements.umd.js',
    '@angular/router': 'node:@angular/router/bundles/router.umd.js',
    '@angular/animations/browser': 'node:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations':
        'node:@angular/platform-browser/bundles/platform-browser-animations.umd',
    '@angular/platform-browser': 'node:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
        'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    '@material': 'dist/packages/material/index.js',
    '@material-experimental': 'dist/packages/material-experimental/index.js',
    '@material-examples': 'dist/packages/material-examples/index.js',
    '@material-moment-adapter': 'dist/packages/material-moment-adapter/index.js',
    '@cdk': 'dist/packages/cdk/index.js',
    '@cdk-experimental': 'dist/packages/cdk-experimental/index.js',

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
    '@cdk/text-field': 'dist/packages/cdk/text-field/index.js',
    '@cdk/tree': 'dist/packages/cdk/tree/index.js',

    '@cdk-experimental/scrolling': 'dist/packages/cdk-experimental/scrolling/index.js',
    '@cdk-experimental/dialog': 'dist/packages/cdk-experimental/dialog/index.js',

    '@material/autocomplete': 'dist/packages/material/autocomplete/index.js',
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
    '@material/toolbar': 'dist/packages/material/toolbar/index.js',
    '@material/tooltip': 'dist/packages/material/tooltip/index.js',
    '@material/badge': 'dist/packages/material/badge/index.js',
    '@material/tree': 'dist/packages/material/tree/index.js',
  },
  packages: {
    // Set the default extension for the root package, because otherwise the dev-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {defaultExtension: 'js'}
  }
});
