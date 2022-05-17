import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
 

const Cards = ({word}) => {
  const [showList, setShowList] = useState(false)


    const toggleState = () => {
      if (showList === true){
        setShowList(false)
      }else {
        setShowList(true)
      }
      
    }

  return (
    <div style={{}}>
      <Card variant="outlined"
        style={{
          width: 400,
          backgroundColor: "white",
          marginBottom: '1em'
          
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 20 }}
            color="inherit"
            gutterBottom
          >
            {word.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {showList ? word.definition : ' '}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained' size="small" color="black" onClick= {toggleState}  >Study</Button>
          <Button variant="text" size="small" color="green">Add</Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default Cards