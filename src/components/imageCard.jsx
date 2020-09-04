import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

export default function ImageCard({ image, height, title }) {
  return (
    <Card
      style={{
        maxWidth: "100vw",
        borderRadius: 0,
        boxShadow: "none",
      }}
    >
      
      <CardMedia
        style={{
          height,
          width: "100%",
        }}
        image={image}
        title={title}
      />
    </Card>
  );
}
