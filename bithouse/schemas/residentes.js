export default {
  name: "residentes",
  type: "document",
  title: "Residentes",
  preview: {
    select: {
      title: "banner.title",
    },
  },
  fields: [
    {
      name: "banner",
      type: "banner",
      title: "Banner",
    },
    {
      name: "moduloResidentes",
      type: "moduloResidentes",
      title: "Residentes",
    },
    {
      name: "productos",
      type: "array",
      title: "Productos",
      of: [{ type: "producto" }],
    },
    {
      name: "quotes",
      type: "quotes",
      title: "Quotes",
    },
    {
      name: "bannerDoble",
      type: "bannerDoble",
      title: "Banner Doble",
    },
  ],
};
