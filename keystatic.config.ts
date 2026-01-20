import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'src/content/projects/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                status: fields.multiselect({
                    label: 'Status',
                    options: [
                        { label: 'Production', value: 'Production' },
                        { label: 'Development', value: 'Development' },
                        { label: 'Concept', value: 'Concept' },
                        { label: 'On Hold', value: 'On Hold' },
                    ],
                    defaultValue: ['Development'],
                }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    {
                        label: 'Tags'
                    }
                ),
                images: fields.array(
                    fields.image({ label: 'Image', directory: 'public/images/projects', }),
                    {
                        label: 'Images'
                    }),
                content: fields.mdx({ label: 'Content' }),
            },
        }),
        certificates: collection({
            label: 'Certificates',
            slugField: 'title',
            path: 'src/content/certificates/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                issuer: fields.text({ label: 'Issuer' }),
                skills: fields.array(
                    fields.text({ label: 'Skill' }),
                    {
                        label: 'Skills'
                    }
                ),
                media: fields.file({ label: 'Media' }),
                credential: fields.text({ label: 'Credential URL' }),
                issueDate: fields.date({ label: 'Issue Date' }),
                content: fields.markdoc({ label: 'Content' }),
            },
        }),
    },
});