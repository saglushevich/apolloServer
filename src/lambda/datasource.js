import { RESTDataSource } from "apollo-datasource-rest";

export class DogAPI extends RESTDataSource {
  async getDog({ breed }) {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/dogs?name=${breed}`,
      {
        headers: {
          "X-Api-Key": "FZvdT5D6gVW1zV6qMdv5tw==1H3a9TU340W7LAKZ",
          "content-type": "application/json"
        },
      }
    );

    return response;
  }
}