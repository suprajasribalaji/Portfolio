module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  presets: [
    "next/babel",
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react"
  ]
};
