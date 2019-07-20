/*
  Copyright 2017 Google Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import defaultExport from './_default.mjs';
import './_version.mjs';

/**
 * @namespace workbox.routing
 * @borrows workbox.routing.Router#setCatchHandler as setCatchHandler
 * @borrows workbox.routing.Router#setDefaultHandler as setDefaultHandler
 * @borrows workbox.routing.Router#unregisterRoute as unregisterRoute
 */

export * from './_public.mjs';
export default defaultExport;