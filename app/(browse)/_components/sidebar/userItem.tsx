import React from "react";
interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}
const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  return <div>UserItem</div>;
};

export default UserItem;
