import React from "react";
import { useQuery } from "@apollo/client";
import { useTheme } from "@material-ui/core/styles";
import { User } from "../common/interfaces";
import { GET_ORGANIZATION_MEMBERS } from "../common/graphql/queries/getOrganizationMembers";

const Members: React.FC = () => {
  const { data, loading: membersLoading } = useQuery(GET_ORGANIZATION_MEMBERS);
  const { organization } = data?.currentUser ?? {};
  const theme = useTheme();

  return <div>{/* Add your logic here */}</div>;
};

export default Members;
