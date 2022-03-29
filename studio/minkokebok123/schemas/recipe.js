export default
{
    title: 'Oppskrift',
    name: 'recipe',
    type: 'document',
    fields: [
        {
            title: 'Navn',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Kort beskrivelse',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Vegetar?',
            name: 'vegetarian',
            type: 'boolean',
            initialValue: false
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          }
    ]
}