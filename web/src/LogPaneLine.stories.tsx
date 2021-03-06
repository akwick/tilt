import React from "react"
import LogPaneLine from "./LogPaneLine"

function infoLine() {
  return (
    <div className="LogPane">
      <LogPaneLine
        text="Hello world"
        manifestName="fe"
        level="INFO"
        lineId={1}
        shouldHighlight={false}
        showManifestPrefix={true}
        isContextChange={false}
      />
    </div>
  )
}

function warnLine() {
  return (
    <div className="LogPane">
      <LogPaneLine
        text="Hello world"
        manifestName="fe"
        level="WARN"
        lineId={1}
        shouldHighlight={false}
        showManifestPrefix={true}
        isContextChange={false}
      />
    </div>
  )
}

function threeLines() {
  return (
    <div className="LogPane">
      <LogPaneLine
        text="line 1"
        manifestName="fe"
        level="INFO"
        lineId={1}
        shouldHighlight={false}
        showManifestPrefix={true}
        isContextChange={false}
      />
      <LogPaneLine
        text="line 2"
        manifestName="fe"
        level="INFO"
        lineId={1}
        shouldHighlight={false}
        showManifestPrefix={true}
        isContextChange={false}
      />
      <LogPaneLine
        text="line 3"
        manifestName="fe"
        level="INFO"
        lineId={1}
        shouldHighlight={false}
        showManifestPrefix={true}
        isContextChange={false}
      />
    </div>
  )
}

export default {
  title: "LogPaneLine",
}

export const InfoLine = infoLine
export const WarnLine = warnLine
export const ThreeLines = threeLines
