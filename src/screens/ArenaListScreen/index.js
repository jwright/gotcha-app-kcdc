import React from 'react';
import { useQuery } from "@apollo/client";

import Arenas from "../../components/Arenas"

import ArenasQuery from "../../queries/Arenas";

const ArenaListScreen = ({ route }) => {
  const { location: { latitude, longitude } } = route.params;

  const { loading, error, data } = useQuery(ArenasQuery, {
    variables: {
        latitude, longitude, radius: 25
      },
  });

  if (loading || error) { return null; }

  return <Arenas arenas={data.arenas} />;
}

export default ArenaListScreen;
