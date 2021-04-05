import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Advetise.css';
import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '5px',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  

const Advetise = (props) => {
    const courses = props.courses;
     
    const handleCourse = props.handleCourse;

    const {picture, price, name, key} = courses;

   
     
        const classes = useStyles();
    
    
    return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={picture} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} md container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  <Link to={`/course/${key}`}>{name}</Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  { props.showButton && <Button variant="primary" onClick={() => handleCourse(courses)}>  
                    <FontAwesomeIcon icon={faPlus} /> Enroll Now</Button>}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">${price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>






      //   <Card style={{ width: '18rem' }}>
      //      <Card.Img variant="top" src={picture} />
      //      <Card.Body>
      //        <Card.Title><Link to={`/course/${key}`}>{name}</Link><br/></Card.Title>
      //         <Card.Text>
      //          ${price}
      //          </Card.Text>
      //          { props.showButton && <Button variant="primary"  onClick={() => handleCourse(courses)}>  
      //           <FontAwesomeIcon icon={faPlus} />  Enroll Now</Button>}
      //      </Card.Body>
      //  </Card>

      //   /* <div className="advetise">
      //   <div className="photography">
      //   <img src={picture} alt=""/>
      //   </div>
      //   <div className="discription">
      //  <Link to={`/course/${key}`}> <h1>{name}</h1></Link><br/>
      //   <h3>${price}</h3><br/>
      //   { props.showButton && <Button variant="primary"  onClick={() => handleCourse(courses)}>  
      //   <FontAwesomeIcon icon={faPlus} />  Enroll Now</Button>}
   

      //   </div>
      //   </div> */
        
        
        
    );
};

export default Advetise;