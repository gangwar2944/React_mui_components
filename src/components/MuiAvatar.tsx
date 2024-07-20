import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={1} direction="row">
        <Avatar sx={{ bgcolor: "primary.main" }}>VG</Avatar>
        <Avatar sx={{ bgcolor: "secondary.main" }}>AS</Avatar>
      </Stack>
      <Stack spacing={1} direction="row">
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.main" }}>VG</Avatar>
          <Avatar sx={{ bgcolor: "secondary.main" }}>AS</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="women"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="men"
          />
        </AvatarGroup>
      </Stack>
      <Stack spacing={1} direction="row">
        <AvatarGroup max={3}>
          <Avatar variant="square" sx={{ bgcolor: "primary.main" }}>VG</Avatar>
          <Avatar variant="rounded" sx={{ bgcolor: "secondary.main" }}>AS</Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
