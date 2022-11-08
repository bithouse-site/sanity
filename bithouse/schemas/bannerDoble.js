import buttonObject from "./buttonObject"

export default{
  name: 'bannerDoble',
  type: 'document',
  title: 'Banner Doble',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },{
      name: 'image',
      type: 'image',
      title: 'Image'
    },{
      name: 'description',
      type: 'string',
      title: 'Description'
    },{
      name: 'button',
      type: 'buttonObject',
      title: 'Button'
    },{
      name: 'color',
      type: 'colorlist',
      title: 'Color',
      options:{
        list: [
          {title: 'Verde Oscuro', value: '#0A694D'},
          {title: 'Verde Claro', value: '#00A99D'},
          {title: 'Negro', value: '#1B1C1E'},
          {title: 'Blanco', value: '#FCFCFC'},
          {title: 'Gris Oscuro', value: '#868585'},
          {title: 'Gris Claro', value: '#B4B2B0'},
        ]
      }
    }
  ]
}