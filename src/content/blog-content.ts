import { getCollection, type CollectionEntry } from 'astro:content';
import { datePropertySorter, reverseSorter } from '../utils';

export type BlogCollectionEntry = CollectionEntry<'blog'>;

const byDate = reverseSorter(datePropertySorter<BlogCollectionEntry>((post) => post.data.pubDate));

export type GetBlogCollectionOptions = {
    filterByAnyTags?: string[];
};

export async function getBlogCollection(options?: GetBlogCollectionOptions) {
    let collection = await getCollection('blog', (post) => {
        if (options?.filterByAnyTags) {
            if (!options.filterByAnyTags.some((tag) => post.data.tags?.includes(tag))) {
                return false;
            }
        }

        return true;
    });

    collection = collection.sort(byDate);

    return collection;
}
