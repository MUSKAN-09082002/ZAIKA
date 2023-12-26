import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <div className="Recipebg">
      <Container>
        <Header
          size="huge"
          content={`RECIPE LIST FOR ${searchedQuery}`}
          textAlign="center"
        />
        <Grid columns={4} doubling>
          {recipes &&
            recipes.map((recipe) => (
              <Grid.Column>
                <RecipeListItem recipe={recipe} />
              </Grid.Column>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RecipeList;
