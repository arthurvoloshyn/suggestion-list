import { Card, CardContent, Typography } from "@mui/material";

type Tag = {
  id: number;
  label: string;
};

type Status = {
  id: number;
  label: string;
};

export function SuggestionCard({
  title,
  description,
  tags,
  status,
  createdAt,
  grade,
}: {
  title: string;
  description: string;
  tags: Tag[];
  status: Status;
  createdAt: Date;
  grade: number;
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>{description}</Typography>
        <Typography>Tags: {tags.map((tag) => tag.label).join(", ")}</Typography>
        <Typography>Status: {status.label}</Typography>
        <Typography>Grade: {grade}</Typography>
        <Typography>Created at: {createdAt.toDateString()}</Typography>
      </CardContent>
    </Card>
  );
}
