import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardContent,
  Divider,
  Drawer,
  Stack,
  useMediaQuery,
  useTheme,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { MovieDetailsData } from "../types/Movie";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TitleIcon from "@mui/icons-material/Title";
import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";

type MetaDataSectionProps = {
  label: string;
  value: string;
  icon: any;
  direction: "row" | "column";
};
type MovieDetailsProps = {
  movie: MovieDetailsData | null;
  setDetailsId: any;
};

const drawerWidth = 600;

export default function MovieDetails(props: MovieDetailsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { movie, setDetailsId } = props;

  return (
    <Drawer
      sx={{
        width: isMobile ? "100%" : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isMobile ? "100%" : drawerWidth,
          backgroundColor: "#141414",
          color: "white",
          borderLeft: "1px solid #333",
          display: "flex",
          flexDirection: "column",
          borderRadius: "4px",
        },
      }}
      open
      variant="persistent"
      anchor="left"
    >
      {!movie ? (
        <Stack
          sx={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#141414",
          }}
        >
          <CircularProgress size={60} color="inherit" />
        </Stack>
      ) : (
        <Stack spacing={2} sx={{ height: "100%", padding: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Main Infos</Typography>
            <IconButton
              onClick={() => setDetailsId(null)}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider sx={{ borderColor: "#333" }} />
          <Card
            sx={{
              backgroundColor: "#333",
              color: "black",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Stack direction={"column"} spacing={2}>
                <MetaDataSection
                  label="Original Title"
                  value={movie.original_title ?? ""}
                  icon={<TitleIcon sx={{ color: "black" }} />}
                  direction="row"
                />
                <Divider sx={{ borderColor: "#333" }} />
                <MetaDataSection
                  label="Release date"
                  value={movie.release_date ?? ""}
                  icon={<CalendarMonthIcon sx={{ color: "black" }} />}
                  direction="row"
                />
                <Divider sx={{ borderColor: "#333" }} />
                <MetaDataSection
                  label="Overview"
                  value={movie.overview ?? ""}
                  icon={<ArticleIcon sx={{ color: "black" }} />}
                  direction="column"
                />
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      )}
    </Drawer>
  );
}

function MetaDataSection(props: MetaDataSectionProps) {
  const theme = useTheme();
  return (
    <Stack
      direction={props.direction}
      spacing={1}
      justifyContent={"space-between"}
      padding={1}
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: 1,
      }}
      alignItems={props.direction === "row" ? "center" : "flex-start"}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {props.icon}
        <Typography color={"text.secondary"} lineHeight={2} marginLeft={2}>
          {props.label}
        </Typography>
      </Stack>
      <Typography lineHeight={2}>{props.value}</Typography>
    </Stack>
  );
}
