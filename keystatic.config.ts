import { config, fields, collection, singleton } from '@keystatic/core';

// Helper for Hardware items (Name, Specs, Description)
const createHardwareGroup = (label: string) => fields.object({
    title: fields.text({ label: `${label} Section Title` }),
    icon: fields.text({ label: "Icon Name (Tabler)" }),
    items: fields.array(
        fields.object({
            name: fields.text({ label: "Item Name" }),
            specs: fields.text({ label: "Specifications" }),
            description: fields.text({ label: "Description", multiline: true }),
        }),
        { label: `${label} Items`, itemLabel: props => props.fields.name.value }
    )
});

// Helper for Software items (Title, Description, Link, Icon)
const createSoftwareGroup = (label: string) => fields.object({
    title: fields.text({ label: `${label} Section Title` }),
    icon: fields.text({ label: "Icon Name (Tabler)" }),
    items: fields.array(
        fields.object({
            title: fields.text({ label: "App Title" }),
            description: fields.text({ label: "Usage Description", multiline: true }),
            link: fields.text({ label: "URL" }),
            icon: fields.text({ label: "Icon Name (Tabler)" }),
        }),
        { label: `${label} Apps`, itemLabel: props => props.fields.title.value }
    )
});

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
                description: fields.text({ label: 'Description' }),
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
                    fields.image({ label: 'Image', directory: 'public/images/projects', publicPath: '/images/projects/', }),
                    {
                        label: 'Images'
                    }),
                content: fields.markdoc({
                    label: 'Content', options: {
                        image: {
                            directory: 'public/images/projects', publicPath: '/images/projects/'
                        }
                    }
                }),
            },
        }),
        certificates: collection({
            label: 'Certificates',
            slugField: 'title',
            path: 'src/content/certificates/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description' }),
                issuer: fields.text({ label: 'Issuer' }),
                skills: fields.array(
                    fields.text({ label: 'Skill' }),
                    {
                        label: 'Skills'
                    }
                ),
                media: fields.file({ label: 'Media', directory: 'public/images/certificates', publicPath: '/images/certificates/', }),
                credential: fields.text({ label: 'Credential URL' }),
                issueDate: fields.date({ label: 'Issue Date' }),
                expireDate: fields.date({ label: 'Expire Date' }),
                content: fields.markdoc({
                    label: 'Content',
                }),
            },
        }),

    }
});