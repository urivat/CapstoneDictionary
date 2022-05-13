import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
 

const Cards = ({word}) => {
  const [showList, setShowList] = useState(true)


    const toggleState = () => {
      setShowList(false)
    }

  return (
    <div style={{}}>
      <Card
        style={{
          width: 400,
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            {word.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {word.definition}
          </Typography>
        </CardContent>
        <CardActions>
          {showList: ? true: false <Button variant='contained' size="small" color="black" onClick= {toggleState}  >Study</Button>}
        </CardActions>
      </Card>
    </div>
  );
}
export default Cards