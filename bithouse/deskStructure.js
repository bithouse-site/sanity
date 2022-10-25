import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
        ),
        ...S.documentTypeListItems().filter(listItem => !['footer'].includes(listItem.getId()))
    ])