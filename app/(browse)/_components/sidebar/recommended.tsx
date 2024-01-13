import { User } from "@prisma/client";
import React from "react";

interface RecommendedProps {
  data: User[];
}

const Recommended = ({ user }: RecommendedProps) => {
  return <div>Recommended</div>;
};

export default Recommended;
