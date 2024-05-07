export default function loadBalancer(chinaDownload, franceDownload) {
  return Promise.race([chinaDownload, franceDownload]);
}
