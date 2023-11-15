"use client";
import React from "react";
import ForceGraph2D from "react-force-graph-2d";
import { data } from "@/utils/misc";

const Hello = () => {
  return (
    <>
      <ForceGraph2D
        graphData={data}
        backgroundColor="lightGray"
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px sans-serif`;
          ctx.textAlign = "center";
          ctx.fillStyle = "green";
          ctx.fillText(label, node.x!, node.y!);
        }}
        linkDirectionalArrowLength={5}
        linkWidth={2}
        linkAutoColorBy={"source"}
      />
      ,
    </>
  );
};

export default Hello;
