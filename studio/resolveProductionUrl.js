const remoteURL = "https://verhaal.gatsbyjs.io/"
const localURL = "http://localhost:8000"
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL

export default function resolveProductionUrl(document) {
  return `${previewURL}/projects/${document.slug.current}`
}
