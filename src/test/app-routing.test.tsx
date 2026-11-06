import {QueryClient} from "@tanstack/react-query";
import {createRouter, rootRouteId} from "@tanstack/react-router";
import {describe, expect, it} from "vitest";

import {routeTree} from "@/routeTree.gen";
import {Route as ProjectRoute} from '@/routes/projets.$slug';

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
    it('permanently redirects the legacy Well Being Work URL to the corrected slug', () => {
        const loader = ProjectRoute.options.loader;
        expect(typeof loader).toBe('function');
        if (typeof loader !== 'function') throw new Error('Project loader missing');
        let caught: unknown;
        try {
            Reflect.apply(loader, undefined, [{params: {slug: 'welle-being-work'}}]);
        } catch (error) {
            caught = error;
        }
        expect(caught).toMatchObject({
            options: {
                to: '/projets/$slug',
                params: {slug: 'well-being-work'},
                statusCode: 301
            }
        });
    });
    it("matches a page for / instead of falling back to not found", () => {
        const router = createRouter({routeTree, context: {queryClient: new QueryClient()}});

        const matches = router.matchRoutes("/");

        expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    });
});
