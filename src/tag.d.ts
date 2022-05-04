declare module '@analytics/google-tag-manager' {
  export interface googleTagManagerProps {
    containerId: string
    dataLayerName?: string
    customScriptSrc?: string
    preview?: string
    auth?: string
    execution?: string
  }

  function googleTagManager({
    containerId,
    dataLayerName,
    customScriptSrc,
    preview,
    auth,
    execution
  }: googleTagManagerProps)

  export = googleTagManager
}
