import { useState } from 'react';
import useEffect from './useIsomorphicEffect';
var matchers = new Map();
/**
 * Match a media query and get updates as the match changes. The media string is
 * passed directly to `window.matchMedia` and run as a Layout Effect, so initial
 * matches are returned before the browser has a chance to paint.
 *
 * ```tsx
 * function Page() {
 *   const isWide = useMediaQuery('min-width: 1000px')
 *
 *   return isWide ? "very wide" : 'not so wide'
 * }
 * ```
 *
 * Media query lists are also reused globally, hook calls for the same query
 * will only create a matcher once under the hood.
 *
 * @param query A media query
 */

export default function useMediaQuery(query) {
  var _useState = useState(false),
      matches = _useState[0],
      setMatches = _useState[1];

  useEffect(function () {
    if (typeof query === 'boolean') {
      return setMatches(query);
    }

    var mql = matchers.get(query);

    if (!mql) {
      mql = window.matchMedia(query);
      mql.refCount = 0;
      matchers.set(mql.media, mql);
    }

    var handleChange = function handleChange() {
      setMatches(mql.matches);
    };

    mql.refCount++;
    mql.addListener(handleChange);
    handleChange();
    return function () {
      if (!mql) return;
      mql.removeListener(handleChange);
      mql.refCount--;

      if (mql.refCount <= 0) {
        matchers.delete(mql.media);
      }

      mql = undefined;
    };
  }, [query]);
  return matches;
}