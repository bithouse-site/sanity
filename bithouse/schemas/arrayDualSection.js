export default {
  name: "dualSectionArray",
  type: "object",
  title: "Dual Schema",
  fields: [
    {
      name: "dualSymmetric",
      type: "reference",
      title: "Dual Symmetric",
      to: [{ type: "dualSymmetric" }],
    },
  ],
};
