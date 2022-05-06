import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Box, Container, IconButton, Paper, Toolbar, Typography, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
// import { BottomNavigation } from '@material-ui/core/BottomNavigation';
// import { BottomNavigationAction } from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';
import { Grade } from '@material-ui/icons';
// css для себя
const useStyles=makeStyles((theme)=>({
 root: {
   flexGrow: 1
 },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay:{
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)

  },
  CardMedia: {
    paddingTop: "56.25%"
  },
  CardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))


const cards=[1,2,3,4,5,6,7,8,9];

function App() {
  const classes=useStyles();
  const [value, setValue]=React.useState("recents")

  const handleChange=(event,newValue) =>{
    setValue(newValue);
  };

  return (
    <>
   <AppBar position='fixed'>
       <Container fixed>
         <Toolbar>
         <IconButton edge="start" 
          color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon/>

         </IconButton>
         <Typography variant="h6" className={classes.title}>Кинопоиск</Typography>
         <Box mr={3}>
         {/* <Box mr={3}>   отступ*/}
           <Button color='inherit' variant='outlined'> Войти</Button>
         </Box>
         <Button color='secondary' variant='contained'> Зарегистрироваться</Button>
         </Toolbar>
         
       </Container>
   </AppBar>
   <main>
        <Paper className={classes.mainFeaturesPost}
        //  style={{backgroundImage: 'url(https://source.unsplash.com/random' }}>
        style={{backgroundImage: 'url(https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/af12c79535987d965c45f0d52a7b3a30/960' }}>

         <Container fixed>
           <div className={classes.overlay}></div>
           <Grid container>
             <Grid item md={6}>

              <div className={classes.mainFeaturesPostContent}>
                <Typography
                 component="h1"
                 variant="h2"
                  color="inherit" 
                 gutterBottom>
                  {/* текст */}
                  Кинопоиск
                </Typography>

                <Typography component="h5" color="inherit" paragraph >
                  {/* текст */}
                  
Количество пользователей	посетители — 35 млн подписчики — 4,3 млн
Расположение сервера	Алматы (Казахстан)
                </Typography>

                <Button variant='contained' color='secondary'>
                  Читать дальше
                </Button>
              </div>
             </Grid>
           </Grid>
         </Container>
        </Paper>

        <div className={classes.mainContent}>
          <Container maxWidth="md">
            {/* sm */}
           <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
             Кинопоиск
           </Typography>
           <Typography variant='h5' align='center' color='textSecondary' paragraph>
           «Кинопоиск» — крупнейший русскоязычный интернет-сервис о кино. С 2018 года также доступен онлайн-кинотеатр
            (до 2 ноября 2021 имевший отдельное название — КиноПоиск HD) с несколькими тысячами фильмов, сериалов, мультфильмов, в том числе премьерных и эксклюзивных.
           </Typography>
           <div className={classes.mainButtpns}>
             <Grid container spacing={5} justify="center">
                  <Grid item>
                    <Button variant='contained' color='primary'>  Начать просмотр</Button>
                    
                  </Grid>
                  <Grid item>
                  <Button variant='outlined' color='primary'>  Читать дальше</Button>
                  </Grid>
             </Grid>
           </div>
                 <Container className={classes.cardGrid} maxWidht="md">
                   <Grid container spacing={4}>
                     {cards.map((card)=>(
                       <Grid item key={card} xs={12} sm={6} md={4}>
                         <Card className={classes.card}>
                             <CardMedia className={classes.CardMedia}
                              //  image="https://source.unsplash.com/random"
                              image="https://s1.afisha.ru/mediastorage/a0/d9/8733aca357d24d789677ac42d9a0.jpg"
                               title="image title">

                             </CardMedia>
                             <CardContent className={classes.CardContent}>
                               <Typography variant='h5' gutterBottom>
                               Аватар (2009)
                               </Typography>

                               <Typography >
                               Парализованный морпех становится мессией для жителей Пандоры. Самый кассовый фильм в истории кино
                               </Typography>
                             </CardContent>
                                <CardActions>
                                  <Button size='small' color='primary'>
                                   Смотреть
                                  </Button>

                                  <Button size='small' color='primary'>
                                  В Избранное
                                  </Button>

                                  <LayerIcon />
                                  <PlayCircleFilledIcon/>
                                </CardActions>
                         </Card>

                         </Grid>
                     ))}
                   </Grid>

                  </Container>
          </Container>
        </div>

   </main>

   <footer>
        <Typography variant='h6' align="center" gutterBottom>  </Typography>
        <BottomNavigation 
        value={value}
        onChange={handleChange} 
        className={classes.root}>

          <BottomNavigationAction 
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
          />

         <BottomNavigationAction 
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
          />

         <BottomNavigationAction 
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
          />

         <BottomNavigationAction 
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
          />


        </BottomNavigation>
   </footer>
   </>
  );
}

export default App;
