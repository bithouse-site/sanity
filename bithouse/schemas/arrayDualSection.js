export default {
  name: "dualSectionArray",
  type: "array",
  title: "Dual Schema",
  of: [
    {
      name: "dualSymmetric",
      type: "reference",
      title: "Dual Symmetric",
      to: [{ type: "dualSymmetric" }],
    },
  ],
};
