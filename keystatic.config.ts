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
                title: fields.slug({
                    name: {
                        label: 'Title', validation: {
                            isRequired: true
                        }
                    }
                }),
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
                        label: 'Tags',
                        validation: {
                            length: {
                                min: 1
                            }
                        }
                    }
                ),
                images: fields.array(
                    fields.image({ label: 'Image', directory: 'public/images/projects', publicPath: '/images/projects/', }),
                    {
                        label: 'Images',
                        validation: {
                            length: {
                                min: 1
                            }
                        }
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
                title: fields.slug({
                    name: {
                        label: 'Title', validation: {
                            isRequired: true
                        }
                    }
                }),
                description: fields.text({
                    label: 'Description', validation: {
                        isRequired: true
                    }
                }),
                issuer: fields.text({
                    label: 'Issuer', validation: {
                        isRequired: true
                    }
                }),
                skills: fields.array(
                    fields.text({ label: 'Skill' }),
                    {
                        label: 'Skills',
                        validation: {
                            length: {
                                min: 1
                            }
                        }
                    }
                ),
                media: fields.file({
                    label: 'Media', directory: 'public/images/certificates', publicPath: '/images/certificates/', validation: {
                        isRequired: true
                    }
                }),
                credential: fields.text({
                    label: 'Credential URL', validation: {
                        isRequired: true
                    }
                }),
                issueDate: fields.date({
                    label: 'Issue Date', validation: {
                        isRequired: true
                    }
                }),
                expireDate: fields.date({
                    label: 'Expire Date', validation: {
                        isRequired: true
                    }
                }),
                content: fields.markdoc({
                    label: 'Content',
                }),
            },
        }),

    }
});