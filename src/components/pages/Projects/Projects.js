import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../cards/cards";
import Container from "@material-ui/core/Container";
import Projectimg1 from "../../../assets/chatbox.PNG";
import Projectimg2 from "../../../assets/tracker.png";
import Projectimg3 from "../../../assets/todo.png";
import Projectimg4 from "../../../assets/game.png";
import Projectimg5 from "../../../assets/memories.JPG";
const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const projects = () => {
    if (activeTab === 0) {
      return (
        <div>
          <Grid
            container
            spacing={4}
          >
            <Card
              title="Chat box"
              des="Chat box app is devloped in react and socket.io in which we can live chat with each other."
              pic={Projectimg1}
              git="https://github.com/Pineapple-1/Chat-Application"
              live="https://chat-box-react-app.netlify.app/"
            />
            <Card
              title="Covid-19 Tracker"
              des='Covid-19 Tracker app which gets the data from an api "https://covid19.mathdro.id/api" '
              pic={Projectimg2}
              git="https://github.com/Pineapple-1/COVID-19-Tracker"
              live="https://chat-box-react-app.netlify.app/"
            />
            <Card
              title="Todo"
              des="Todo app which works as a reminder for important thing todo."
              pic={Projectimg3}
              git="https://github.com/Pineapple-1/TODO-APP"
              live="https://pineapple-1.github.io/TODO-APP/"
            />
            <Card
              title="Memories"
              des="A social media app which allows users to create memories and share them with each other."
              pic={Projectimg5}
              git="https://github.com/Pineapple-1/Memories"
              live="https://react-memories-app.netlify.app/"
            />
              <Card
              title="Memories"
              des="A social media app which allows users to create memories and share them with each other."
              pic={Projectimg5}
              git="https://github.com/Pineapple-1/Memories"
              live="https://react-memories-app.netlify.app/"
            />

          </Grid>
        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div>
          <Card
            title="Rock Paper Scissors"
            des="It is a rock paper scissors game devloped in javascript it was my first github repository it is still my personal favourite to this day."
            pic={Projectimg4}
            git="https://github.com/Pineapple-1/rock-paper-scissor/blob/master/game.js"
          />
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div
          style={{
            margin: "auto",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.815)",
          }}
        >
          <h1>Stuff coming this way soon.</h1>
        </div>
      );
    }
  };

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  const classes = useStyles();

  return (
    
     <Container>
       
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.root} style={{ backgroundColor: "#161618", color: "rgba(255, 255, 255, 0.815)" }}>
          <Tabs
            value={activeTab}
            onChange={(event, id) => {
              setActiveTab(id);
            }}
            indicatorColor="rgba(255, 255, 255, 0.815)"
            textColor="rgba(255, 255, 255, 0.815)"
            centered
          >
            <Tab label="React.JS" />
            <Tab label="JAVASCRIPT" />
            <Tab label="C++" />
          </Tabs>
        </Paper>
        </Grid>
        <Grid item xs={12}>
        <div className="content"> {projects()}</div>
        </Grid>
       </Grid>
       </Container>
      

  );
};
export default Projects;
