import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface UserAvatarProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
}
const UserAvatar = () => {
  return <div>UserAvatar</div>;
};

export default UserAvatar;
