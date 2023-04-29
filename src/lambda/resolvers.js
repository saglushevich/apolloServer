const query = {
    Query: {
      dog: (_, { breed }, { dataSources }) =>
        dataSources.dogAPI.getDog({ breed }),
    },
  };
  
  export default query;