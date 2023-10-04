// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { IoDocumentsOutline, IoDocumentOutline, IoSettingsOutline } from "react-icons/io5"

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(IoSettingsOutline)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
        S.divider(),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'indexPage', 'aboutPage', 'artistPage', 'pressPage'].includes(listItem.getId())),
      S.listItem()
        .title('Pages')
        .icon(IoDocumentsOutline)
        .child(
          S.list()
          .title('Page')
          .items([
            S.listItem()
              .title('Home')
              .icon(IoDocumentOutline)
              .child(
                S.document()
                  .schemaType('indexPage')
                  .documentId('indexPage')
                  .title('Home Page')
              ),
            S.listItem()
              .title('About')
              .icon(IoDocumentOutline)
              .child(
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage')
                  .title('About Page')
              ),
            S.listItem()
              .title('Artist')
              .icon(IoDocumentOutline)
              .child(
                S.document()
                  .schemaType('artistPage')
                  .documentId('artistPage')
                  .title('Artist Page')
              ),
            S.listItem()
              .title('Press')
              .icon(IoDocumentOutline)
              .child(
                S.document()
                  .schemaType('pressPage')
                  .documentId('pressPage')
                  .title('Press Page')
              )
          ])
        ),
    ])

