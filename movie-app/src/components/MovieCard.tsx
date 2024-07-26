import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Movie } from "../types/Movie";

type MovieCardProps = {
  data: Movie;
  onClick: () => void;
};

const defaultImage =
  "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*QOZm9X5er1Y0r5-t";
const handleImageError = (event: any) => {
  event.target.src = defaultImage;
};

export default function ImgMediaCard(props: MovieCardProps) {
  const { data, onClick } = props;
  return (
    <Card
      sx={{ maxWidth: 400, margin: 2, position: "relative" }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="250"
        width="200"
        image={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        onError={handleImageError}
      />
      <CardContent sx={{ marginBottom: "40px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {data.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.overview && data.overview.length > 150
            ? `${data.overview.substring(0, 150)}...`
            : data.overview}
        </Typography>
        <Typography variant="body2" color="text.tier">
          {data.release_date}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ position: "absolute", bottom: 0, left: 0 }}
      ></CardActions>
    </Card>
  );
}
